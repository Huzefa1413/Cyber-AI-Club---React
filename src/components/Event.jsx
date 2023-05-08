import React, { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Event = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="blog-slider" data-aos="fade-right">
      <div className="blog-slider__wrp swiper-wrapper">
        <div className="blog-slider__item">
          <div className="blog-slider__img">
            <img src={props?.event?.pic} alt="" />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">{props?.event?.date}</span>
            <div className="blog-slider__title">{props?.event?.title}</div>
            <div className="blog-slider__text">{props?.event?.text} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
