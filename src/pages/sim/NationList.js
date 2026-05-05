import { useState } from "react";
import "./nationList.scss";

const banners = [
  {
    name: "eSim du lịch Multi-region Europe",
    price: "75.000 đ – 3.625.000 đ",
    img: "https://sim4g.com/uploads/202408/x59uh5d1-Blue-And-White-Modern-Travel-Vlog-YouTube-Thumbnail.jpg",
  },
  {
    name: "eSim du lịch Đài Loan Taiwan",
    price: "70.000 đ – 1.585.000 đ",
    img: "https://sim4g.com/uploads/202408/cx0jqd6s-wifi-690-300.jpg",
  },
  {
    name: "eSim du lịch Đông Nam Á",
    price: "70.000 đ – 3.080.000 đ",
    img: "https://sim4g.com/uploads/202408/14ifjjj7-banner-home-left-1.png",
  },
];

const products = [
  {
    name: "eSim du lịch Multi-region Europe",
    price: "75.000 đ – 3.625.000 đ",
    img: "https://sim4g.com/uploads/202506/508xoi7v.jpg",
  },
  {
    name: "eSim du lịch Đài Loan Taiwan",
    price: "70.000 đ – 1.585.000 đ",
    img: "https://hico.vn/uploads/202506/ol1kjo4r.jpg",
  },
  {
    name: "eSim du lịch Đông Nam Á",
    price: "70.000 đ – 3.080.000 đ",
    img: "https://sim4g.com/uploads/202510/pruzokor.jpg",
  },
  {
    name: "eSIM Du Lịch Mỹ",
    price: "75.000 đ – 2.170.000 đ",
    img: "https://sim4g.com/uploads/202506/9vn3r179.jpg",
  },
  {
    name: "eSim du lịch Ả Rập Xê Út",
    price: "85.000 đ – 3.655.000 đ",
    img: "https://sim4g.com/uploads/202506/f0sf6c1x.jpg",
  },
  {
    name: "eSim du lịch Nhật Bản",
    price: "90.000 đ – 2.500.000 đ",
    img: "https://hico.vn/uploads/202506/ol1kjo4r.jpg",
  },
];

const NationList = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);

  const nextBanner = () => {
    setBannerIndex((prev) => (prev + 1) % banners.length);
  };

  const prevBanner = () => {
    setBannerIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextProduct = () => {
    setProductIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setProductIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const getVisibleProducts = () => {
    return Array.from({ length: 5 }, (_, i) => {
      return products[(productIndex + i) % products.length];
    });
  };

  const getVisibleBanners = () => {
    return Array.from({ length: 1 }, (_, i) => {
      return banners[(bannerIndex + i) % banners.length];
    });
  };

  const loopProducts = [...products, ...products];
  const loopBanners = [...banners, ...banners];

  return (
    <div className="page">
      <main className="container">
        <section className="content">
          {/* <div className="news-title">Tin tức</div> */}

          <div className="banner-section">
            <button className="slide-banner-left" onClick={prevBanner}>
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </button>

            <div className="banner-list">
              {getVisibleBanners().map((item, index) => (
                <div className="banner-card" key={`${item.name}-${index}`}>
                  <img src={item.img} alt={item.name} />
                </div>
              ))}
            </div>
            <button className="slide-banner-right" onClick={nextBanner}>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* <div className="tabs">
            <div>
              Sim du lịch
              <br />
              Giảm Sốc Đến 30%
            </div>
            <div>
              Wifi 4G 5G
              <br />
              Giảm Sốc Đến 39%
            </div>
            <div>
              Gia Dụng Xả Kho
              <br />
              Giảm Đến 30%
            </div>
            <div>
              Phụ Kiện Xả Kho
              <br />
              Giảm Đến 40%
            </div>
          </div> */}

          <div className="promo">
            GIÁ CỰC TỐT CHỈ CÓ TRONG <span>THÁNG 1</span>
          </div>

          <div className="product-section">
            <button className="slide-left" onClick={prevProduct}>
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </button>

            <div className="product-list">
              {getVisibleProducts().map((item, index) => (
                <div
                  className="product-card text-center"
                  key={`${item.name}-${index}`}
                >
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                  <div className="stars">★★★★★</div>
                  <p>{item.price}</p>
                </div>
              ))}
            </div>

            <button className="slide-right" onClick={nextProduct}>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export { NationList };
