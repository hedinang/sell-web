import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export const Header = () => {
  const navigate = useNavigate();
  const generateLabel = (text, key) => (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleMenuClick(key);
      }}
    >
      {text}
    </button>
  );

  const conversationOption = [
    {
      key: "vn",
      label: generateLabel("sim việt nam", "vn"),
      children: [
        {
          key: "viettel",
          label: "sim 4g viettel",
          label: generateLabel("sim việt nam", "vn"),
        },
        {
          key: "vina",
          label: "sim 4g vina",
          label: generateLabel("sim việt nam", "vn"),
        },
        {
          key: "mobile",
          label: "sim 4g mobile",
          label: generateLabel("sim việt nam", "vn"),
        },
      ],
    },
    {
      key: "hk",
      label: generateLabel("sim hong kong", "hk"),
    },
    {
      key: "tw",
      label: generateLabel("sim đài loan", "tw"),
    },
  ];

  const handleMenuClick = (e) => {
    navigate(`/sim/search/${e}`);
  };

  return (
    <>
      <header className="topbar-1">
        <button className="logo" onClick={() => navigate("/nation-list")}>
          SIMBADINH.COM
        </button>

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
            onClick: handleMenuClick,
          }}
          placement="bottomLeft"
          trigger={["hover"]}
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
