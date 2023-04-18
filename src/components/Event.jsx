import React from 'react';

const Event = (props) => {
  return (
    <div className="blog-slider">
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