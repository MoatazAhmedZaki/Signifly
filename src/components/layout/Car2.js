import React, { Component } from "react";
import Slider from "react-slick";

import "./Car.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Car2 extends Component {
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
              src="https://www.datocms-assets.com/7718/1545237733-high-1approach-slides.png?w=350"
              alt="the team"
            />
          </div>

          <div className="containerr ">
            <img
              src="https://www.datocms-assets.com/7718/1545237738-high-2approach-slides.png?w=350"
              alt="the team"
            />
          </div>
          <div className="containerr ">
            {" "}
            <img
              src="https://www.datocms-assets.com/7718/1545241523-low-1approach-slides.jpg?w=350"
              alt="the team"
            />
          </div>
          <div className="containerr ">
            {" "}
            <img
              src="https://www.datocms-assets.com/7718/1545239748-high-4approach-slides.png?w=350"
              alt="the team"
            />
          </div>
          <div className="containerr ">
            {" "}
            <img
              src="https://www.datocms-assets.com/7718/1545239752-high-5approach-slides.png?w=350"
              alt="the team"
            />
          </div>
          <div className="containerr ">
            {" "}
            <img
              src="https://www.datocms-assets.com/7718/1545241673-low-2approach-slides.jpg?w=350"
              alt="the team"
            />
          </div>

          <div className="containerr ">
            {" "}
            <img
              src="https://www.datocms-assets.com/7718/1545239758-high-3approach-slides.jpg?w=350"
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
