import React from "react";
import { insightsData } from "./data";
import Slider from "react-slick";

import "./styles.scss";

function Insights() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    dots: false,
    infinite: true,
    fadeIn: false,
    pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="sl-insights-container">
      <h2 className="sl-highlight-heading">
        WITH <b>INSIGHTS FROM</b>
      </h2>
      <div className="sl-slider">
        <Slider {...settings}>
          {insightsData.map((item) => (
            <div className="sl-insights-slide" key={item.id}>
              <div>
                <img
                  src={item.image}
                  className="sl-insights-slide-img"
                  alt={item.name + " " + item.designation}
                />
              </div>
              <div className="sl-insights-slide-content">
                <p className="sl-insights-slide-content-name">{item.name}</p>
                <p className="sl-insights-slide-content-desig">
                  {item.designation}
                </p>
                {item.company_logo && (
                  <img
                    src={item.company_logo}
                    className="sl-insights-slide-content-logo"
                    alt={item.company_alt}
                  />
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Insights;
