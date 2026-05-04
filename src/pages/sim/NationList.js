import { useState } from "react";
import "./nationList.scss";

const banners = [
  "https://via.placeholder.com/760x260/f59e0b/ffffff?text=DU+LICH+SIM",
  "https://via.placeholder.com/760x260/22c55e/ffffff?text=KHUYEN+MAI+ESIM",
  "https://via.placeholder.com/760x260/3b82f6/ffffff?text=SIM+4G+5G",
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

  const loopProducts = [...products, ...products];

  return (
    <div className="page">
      <header className="topbar">
        <div className="logo">SIM4G.COM</div>

        <div className="search">
          <input placeholder="Bạn tìm gì..." />
          <button>🔍</button>
        </div>

        <div className="phone">0965887789</div>
        <div className="account">👤 Tài khoản</div>
      </header>

      <main className="container">
        <section className="content">
          <div className="news-title">Tin tức</div>

          <div className="hero">
            <div className="banner">
              <div
                className="banner-track"
                style={{
                  transform: `translateX(-${bannerIndex * 100}%)`,
                }}
              >
                {banners.map((item, index) => (
                  <div className="banner-item" key={index}>
                    <img src={item} alt={`banner-${index}`} />
                  </div>
                ))}
              </div>

              <button className="banner-arrow banner-prev" onClick={prevBanner}>
                ‹
              </button>
              <button className="banner-arrow banner-next" onClick={nextBanner}>
                ›
              </button>
            </div>

            <div className="news-box">
              <h4>TIN TỨC ›</h4>
              <div className="play">▶</div>
            </div>
          </div>

          <div className="tabs">
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
          </div>

          <div className="promo">
            GIÁ CỰC TỐT CHỈ CÓ TRONG <span>THÁNG 1</span>
          </div>

          <div className="product-section">
  <button className="slide-left" onClick={prevProduct}>
    <svg width="20" height="20" viewBox="0 0 24 24">
    <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" fill="none"/>
  </svg>
  </button>

  <div className="product-list">
    {getVisibleProducts().map((item, index) => (
      <div className="product-card text-center" key={`${item.name}-${index}`}>
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

