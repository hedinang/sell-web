import { Col, Dropdown, Row } from "antd";
import "./style.scss";
import { FiMoreHorizontal } from "react-icons/fi";

export const Header = () => {
  const conversationOption = [
    {
      key: "vn",
      label: "sim việt nam",
      children: [
        { key: "viettel", label: "sim 4g viettel" },
        { key: "vina", label: "sim 4g vina" },
        { key: "mobile", label: "sim 4g mobile" },
      ],
    },
    { key: "hk", label: "sim hong kong" },
    { key: "tw", label: "sim đài loan" },
  ];

  return (
    <>
      <header className="topbar-1">
        <div className="logo">SIMBADINH.COM</div>

        <div className="search">
          <input placeholder="Bạn tìm gì..." />
          <button>🔍</button>
        </div>

        <div className="phone">0975896865</div>
        <div className="account">👤 Tài khoản</div>
      </header>

      <div className="topbar-2">
        <div>Trang chủ</div>
        <div>Tin tức</div>
        <Dropdown
          menu={{
            items: conversationOption,
            // onClick: handleMenuClick
          }}
          placement="bottomLeft"
          trigger={["click"]}
        >
          <button
            // icon={<DashOutlined />}
            type="text"
            size="small"
            onClick={(e) => e?.stopPropagation?.()}
          >
            Danh mục sim
          </button>
        </Dropdown>
        <div>Khuyến mãi</div>
        <div>Chính sách</div>
      </div>
    </>
  );
};
