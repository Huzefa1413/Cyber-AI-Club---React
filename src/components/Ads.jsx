import React, { useState, useEffect } from 'react';

const Ads = () => {
  const ads = [
    './assets/Ads/ads1.jpg',
    './assets/Ads/ads2.jpg',
    './assets/Ads/ads3.jpg',
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % ads.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [ads.length]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {ads.map((ad, i) => (
          <div
            key={i}
            className={
              i === activeSlide ? 'carousel-slide active' : 'carousel-slide'
            }
          >
            <img src={ad} alt="Advertisement" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ads;
