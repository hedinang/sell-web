import { Button, Select } from "antd";
import { useState } from "react";
import { IoArrowBackSharp, IoCheckmarkCircle } from "react-icons/io5";

const SupplierDetail = () => {
  const [supplier, setSupplier] = useState({
    id: 3,
    name: "Sim 3",
    title:
      "eSim du lịch châu âu 38 nước - Europe C, dùng full mạng xã hội, Nhận QR Ngay | Hico",
    price: 150000,
    img: "https://sim4g.com/uploads/202510/2hz5fejn.jpg",
    advantages: [
      "Tặng ngay 500GB Data tốc độ cao mỗi tháng vào đầu chu kỳ",
      "Sử dụng hết 500GB trong tháng sẽ dừng truy cập",
      "Sim chỉ vào mạng, không hỗ trợ nghe gọi, nhắn tin",
      "Mua sim 1 lần không phát sinh cước",
      "Sim 3 in1: Có thể lắp đặt vào nhiều loại máy, không cần cắt sim",
      "Hỗ trợ làm Esim, đăng ký chính chủ",
      "Sim sử dụng toàn quốc không giới hạn",
    ],
  });

  return (
    <div className="flex flex-col items-center h-[765px]">
      <div className="flex gap-[10px] items-center text-xl font-semibold text-center py-[20px]">
        <button>
          <IoArrowBackSharp size={24} />
        </button>
        <div>{supplier?.title}</div>
      </div>
      <div className="flex gap-[50px]">
        <img
          src={supplier.img}
          alt={supplier.name}
          className="w-[470px] h-[470px] object-cover"
        />

        <div>
          <div className="text-[#ea5626] text-[23px] mb-[10px] text-center font-semibold">
            {supplier?.price.toLocaleString()} VND
          </div>
          {supplier?.advantages?.map((item, index) => {
            return (
              <div className="flex items-center gap-2" key={index}>
                <IoCheckmarkCircle color="#3fb846" />
                <div>{item}</div>
              </div>
            );
          })}

          <div className="flex items-center gap-[5px] mt-[30px]">
            <div>Thời gian</div>
            <Select
              placeholder="Chọn thời gian"
              allowClear
              className="w-[200px]"
              //   value={searchOrder?.search?.category}
              //   onChange={(e) => onChangeFilter("category", e)}
              options={[
                { value: "1", label: "1 ngày" },
                { value: "7", label: "7 ngày" },
                { value: "30", label: "30 ngày" },
              ]}
            />
          </div>

          <div className="flex items-center gap-[5px] mt-[30px]">
            <div>Gói cước</div>
            <Select
              placeholder="Chọn gói cước"
              allowClear
              className="w-[200px]"
              //   value={searchOrder?.search?.category}
              //   onChange={(e) => onChangeFilter("category", e)}
              options={[
                { value: "500mb", label: "500MB/ Ngày" },
                { value: "1gb", label: "1GB/ Ngày" },
                { value: "2gb", label: "2GB/ Ngày" },
              ]}
            />
          </div>

          <div className="flex gap-[100px] mt-[30px]">
            <div className="flex flex-col">
              <div>Giá bán</div>
              <div>2,880,000₫</div>
            </div>

            <div className="flex flex-col">
              <div>Số lượng</div>
              <div>1</div>
            </div>
          </div>

          <div className="flex gap-[100px] mt-[30px]">
            <Button className="bg-[#fc7119] text-white">Them gio hang</Button>
            <Button className="bg-[#0098fc] text-white">Mua ngay</Button>
          </div>
        </div>

        <div className="w-[270px] rounded border border-gray-300 bg-white px-3 py-4 text-sm">
          <h2 className="text-center text-xl font-bold text-orange-600">
            TƯ VẤN MUA HÀNG
          </h2>
          <div className="my-12 border-t border-gray-200" />

          <div className="space-y-4">
            <div className="flex items-center gap-3 border-b pb-3">
              <div className="relative text-green-500">
                {/* <Phone size={28} /> */}
                {/* <MessageCircle size={16} className="absolute -top-2 left-4" /> */}
                dsd
              </div>
              <p>
                <span className="font-bold text-blue-500">0965 887 789</span>
                <span> (8:30 - 21:00)</span>
              </p>
            </div>

            <div className="flex items-center gap-3 border-b pb-3">
              <div className="relative text-green-500">
                {/* <Phone size={28} /> */}
                {/* <MessageCircle size={16} className="absolute -top-2 left-4" /> */}
                dsd
              </div>
              <p>
                <span className="font-bold text-blue-500">0987 379 884</span>
                <span> (19:00 - 23:00)</span>
              </p>
            </div>

            <div className="flex gap-3">
              {/* <MapPin className="mt-1 text-green-500" size={28} /> */}
              <div className="space-y-5 leading-6">
                <p className="text-blue-500">
                  Số 43, Ngõ 159 Pháo Đài Láng, phường Láng, Tp Hà Nội
                </p>
                <p>KDC Nam Long, P. Tân Thuận, Tp Hồ Chí Minh</p>
              </div>
            </div>

            <div className="flex items-center gap-3 border-b pb-4">
              {/* <Truck className="text-green-500" size={34} /> */}
              <p className="leading-6">
                Hỗ trợ giao hàng hỏa tốc nhận trong ngày
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SupplierDetail };
