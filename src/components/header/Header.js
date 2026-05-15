import {Dropdown, Input} from "antd";
import {IoCartSharp, IoSearchOutline} from "react-icons/io5";
import {MdAccountCircle, MdPhone} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import "./style.scss";
import {useCartContext} from "../../context/CartContext";
import Search from "antd/es/input/Search";

export const Header = () => {
  const navigate = useNavigate();

  const {orderList} = useCartContext();
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
        <div className="topbar-1">
          <button className="logo" onClick={() => navigate("/nation-list")}>
            SIMBADINH.COM
          </button>

          <div>
            <Input
                placeholder={
                  "Bạn tìm gì..."
                }
                className="w-full"
                prefix={<IoSearchOutline size={15}/>}
                allowClear
            />
          </div>

          <button
              className="flex items-center gap-[1px]"
              onClick={() => navigate("/cart")}
          >
            <IoCartSharp size={18}/>
            <div>Giỏ hàng</div>
            <div>({orderList.length})</div>
          </button>

          <div className="flex items-center gap-[1px]">
            <MdPhone size={18}/>
            <div>0975896865</div>
          </div>
          <div className="flex items-center gap-[1px]">
            <MdAccountCircle size={18}/>
            <div>Tài khoản</div>
          </div>
        </div>

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
