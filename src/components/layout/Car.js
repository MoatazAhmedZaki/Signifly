import React, { Component } from "react";
import Slider from "react-slick";

import "./Car.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Car extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 0,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="my-5">
        <Slider {...settings}>
          <div className="containerr ">
            <img
              src="https://www.datocms-assets.com/7718/1544626994-1.jpg"
              alt="the team"
            />
          </div>

          <div className="containerr ">
            <img
              src="https://www.datocms-assets.com/7718/1544626997-2.jpg?w=400"
              alt="the team"
            />
          </div>
          <div className="containerr ">
            {" "}
            <img
              src="https://www.datocms-assets.com/7718/1544626999-3.jpg?w=400"
              alt="the team"
            />
          </div>
          <div className="containerr ">
            {" "}
            <img
              src="https://www.datocms-assets.com/7718/1545242451-high-7about-slides.jpg?w=400"
              alt="the team"
            />
          </div>
          <div className="containerr ">
            {" "}
            <img
              src="https://www.datocms-assets.com/7718/1545242606-low-1about-slides.jpg?w=400"
              alt="the team"
            />
          </div>
          <div className="containerr ">
            {" "}
            <img
              src="https://www.datocms-assets.com/7718/1545242454-high-8about-slides.jpg?w=400"
              alt="the team"
            />
          </div>

          <div className="containerr ">
            {" "}
            <img
              src="https://www.datocms-assets.com/7718/1545242457-high-9about-slides.jpg?w=400"
              alt="the team"
            />
          </div>
          <div className="containerr ">
            {" "}
            <img
              src="https://www.datocms-assets.com/7718/1545242460-low-2about-slides.jpg?w=400"
              alt="the team"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
