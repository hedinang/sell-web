import Uppy from "@uppy/core";
import AwsS3 from "@uppy/aws-s3";
import apiFactory from "./index";

export const uploadFileWithUppy = async ({
                                           file,
                                           onProgress,
                                         }) => {
  const uppy = new Uppy({
    autoProceed: false,
    restrictions: {
      maxNumberOfFiles: 1,
    },
  });

  uppy.use(AwsS3, {
    // Luôn dùng multipart.
    // Có thể đổi thành file.size > 100 * 1024 * 1024.
    shouldUseMultipart: true,

    // Uppy tự chia file thành từng chunk 10 MiB.
    getChunkSize: () => 5 * 1024 * 1024,

    // Retry chunk lỗi.
    retryDelays: [0, 1000, 3000, 5000],

    // 1. Java backend tạo multipart upload.
    async createMultipartUpload(uppyFile) {
      const result = await apiFactory.resourceApi.init({
        fileName: uppyFile.name,
        fileSize: uppyFile.size,
        contentType:
            uppyFile.type || "application/octet-stream",
      })

      return {
        uploadId: result.uploadId,
        key: result.objectKey,
      };
    },

    // 2. Uppy tự gọi hàm này cho từng chunk.
    async signPart(
        _uppyFile,
        {
          uploadId,
          key,
          partNumber,
          signal,
        },
    ) {

      const response = await apiFactory.resourceApi.partUrl({
        uploadId: uploadId,
        objectKey: key,
        partNumber:
            String(partNumber)
      })

      return {
        url: response.uploadUrl,
      };
    },

    // Chưa hỗ trợ resume phiên cũ thì trả mảng rỗng.
    async listParts() {
      return [];
    },

    // 3. Java backend complete multipart.
    async completeMultipartUpload(
        _uppyFile,
        {
          uploadId,
          key,
          parts,
        },
    ) {
      const result = await apiFactory.resourceApi.complete({
        uploadId,
        objectKey: key,
        parts: parts.map((part) => ({
          partNumber: part.PartNumber,
          etag: part.ETag,
        })),
      })

      return {
        location: result.url,
        ...result,
      };
    },

    // 4. Hủy multipart nếu người dùng cancel.
    async abortMultipartUpload(
        _uppyFile,
        {
          uploadId,
          key,
        },
    ) {
      const result = await apiFactory.resourceApi.abort({
        uploadId,
        objectKey: key,
      })
    },
  });

  uppy.on(
      "upload-progress",
      (_uppyFile, progress) => {
        const loaded = progress.bytesUploaded;
        const total = progress.bytesTotal;

        const percent = total
            ? Math.round((loaded / total) * 100)
            : 0;

        onProgress?.({
          percent,
          loaded,
          total,
        });
      },
  );

  try {
    uppy.addFile({
      name: file.name,
      type:
          file.type || "application/octet-stream",
      data: file,
      source: "antd-upload",
    });

    const result = await uppy.upload();

    if (result.failed.length > 0) {
      throw (
          result.failed[0].error ||
          new Error("Upload thất bại")
      );
    }

    const uploadedFile = result.successful[0];

    return {
      file: uploadedFile,
      response: uploadedFile?.response?.body,
    };
  } finally {
    uppy.destroy();
  }
};