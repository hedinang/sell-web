import { Col, Row, Select } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SimList = () => {
  const navigate = useNavigate();

  const [supplierList, setSupplierList] = useState([
    {
      id: 1,
      name: "Sim 1",
      title:
        "eSim du lịch châu âu 38 nước - Europe C, dùng full mạng xã hội, Nhận QR Ngay | Hico",
      price: 100000,
      img: "https://sim4g.com/uploads/202601/j4iehn8c.jpg",
    },
    {
      id: 2,
      name: "Sim 2",
      title:
        "eSim du lịch châu âu 38 nước - Europe C, dùng full mạng xã hội, Nhận QR Ngay | Hico",
      price: 200000,
      img: "https://sim4g.com/uploads/202510/jp52c7jd.jpg",
    },
    {
      id: 3,
      name: "Sim 3",
      title:
        "eSim du lịch châu âu 38 nước - Europe C, dùng full mạng xã hội, Nhận QR Ngay | Hico",
      price: 150000,
      img: "https://sim4g.com/uploads/202510/2hz5fejn.jpg",
    },
    {
      id: 4,
      name: "Sim 4",
      title:
        "eSim du lịch châu âu 38 nước - Europe C, dùng full mạng xã hội, Nhận QR Ngay | Hico",
      price: 180000,
      img: "https://sim4g.com/uploads/202508/izmud80o.jpg",
    },
    {
      id: 5,
      name: "Sim 5",
      title:
        "eSim du lịch châu âu 38 nước - Europe C, dùng full mạng xã hội, Nhận QR Ngay | Hico",
      price: 220000,
      img: "https://sim4g.com/uploads/202507/k0ozs4k7.jpg",
    },
    {
      id: 6,
      name: "Sim 6",
      title:
        "eSim du lịch châu âu 38 nước - Europe C, dùng full mạng xã hội, Nhận QR Ngay | Hico",
      price: 190000,
      img: "https://sim4g.com/uploads/202507/jeabqsq8.jpg",
    },
    {
      id: 7,
      name: "Sim 7",
      title:
        "eSim du lịch châu âu 38 nước - Europe C, dùng full mạng xã hội, Nhận QR Ngay | Hico",
      price: 160000,
      img: "https://sim4g.com/uploads/202506/9ptlriod.jpg",
    },
    {
      id: 8,
      name: "Sim 8",
      title:
        "eSim du lịch châu âu 38 nước - Europe C, dùng full mạng xã hội, Nhận QR Ngay | Hico",
      price: 210000,
      img: "https://sim4g.com/uploads/202506/hyp5oybi.jpg",
    },
    // {
    //   id: 9,
    //   name: "Sim 9",
    //   price: 170000,
    //   img: "https://sim4g.com/uploads/202601/j4iehn8c.jpg",
    // },
    // {
    //   id: 10,
    //   name: "Sim 10",
    //   price: 230000,
    //   img: "https://sim4g.com/uploads/202601/j4iehn8c.jpg",
    // },
  ]);

  return (
    <div className="flex flex-col justify-center mt-[20px]">
      {/* criteria */}
      <div className="flex gap-[10px] justify-center">
        <div className="flex flex-col items-center gap-[5px]">
          <div>Châu lục</div>
          <Select
            placeholder="Chọn châu lục"
            allowClear
            className="w-[200px]"
            //   value={searchOrder?.search?.category}
            //   onChange={(e) => onChangeFilter("category", e)}
            options={[
              { value: "asia", label: "Châu Á" },
              { value: "europe", label: "Châu Âu" },
              { value: "africa", label: "Châu Phi" },
              { value: "north-america", label: "Châu Bắc Mỹ" },
              { value: "south-america", label: "Châu Nam Mỹ" },
              { value: "oceania", label: "Châu Đại Dương" },
            ]}
          />
        </div>
        <div className="flex flex-col items-center gap-[5px]">
          <div>Quốc gia</div>
          <Select
            placeholder="Chọn quốc gia"
            allowClear
            className="w-[200px]"
            //   value={searchOrder?.search?.category}
            //   onChange={(e) => onChangeFilter("category", e)}
            options={[
              { value: "vn", label: "Việt Nam" },
              { value: "us", label: "Mỹ" },
              { value: "jp", label: "Nhật Bản" },
              { value: "kr", label: "Hàn Quốc" },
              { value: "fr", label: "Pháp" },
              { value: "de", label: "Đức" },
            ]}
          />
        </div>
        <div className="flex flex-col items-center gap-[5px]">
          <div>Nhà mạng</div>
          <Select
            placeholder="Chọn nhà mạng"
            allowClear
            className="w-[200px]"
            //   value={searchOrder?.search?.category}
            //   onChange={(e) => onChangeFilter("category", e)}
            options={[
              { value: "viettel", label: "Viettel" },
              { value: "mobifone", label: "Mobifone" },
              { value: "vinaphone", label: "Vinaphone" },
            ]}
          />
        </div>
        <div className="flex flex-col items-center gap-[5px]">
          <div>Sắp xếp</div>
          <Select
            placeholder="Chọn sắp xếp"
            allowClear
            className="w-[200px]"
            //   value={searchOrder?.search?.category}
            //   onChange={(e) => onChangeFilter("category", e)}
            options={[
              { value: "increase", label: "Giá thấp đến cao" },
              { value: "decrease", label: "Giá cao đến thấp" },
            ]}
          />
        </div>
      </div>

      <Row className="px-[200px] mt-[20px]">
        {supplierList?.map((supplier) => (
          <Col key={supplier.id} span={6}>
            <button
              className="flex flex-col justify-center items-center p-[10px] gap-[10px]"
              onClick={() => {
                navigate(`/sim/supplier/${supplier?.id}`);
              }}
            >
              <img
                src={supplier.img}
                alt={supplier.name}
                className="w-[275px] h-[275px] object-cover"
              />
              <div className="w-[200px]">{supplier?.title}</div>
              <b className="text-[#ea5626]">
                {supplier.price.toLocaleString()} VND
              </b>
            </button>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export { SimList };
