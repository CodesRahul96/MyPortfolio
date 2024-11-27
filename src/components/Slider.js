import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css3 from "../assets/img/css.png";
import html from "../assets/img/html.png";
import js from "../assets/img/javascript.png";
import reactjs from "../assets/img/reactjs.png";
import ps from "../assets/img/ps.png";
import tailwind from "../assets/img/tail.svg";
import git from "../assets/img/Git.png";
import github from "../assets/img/githu.png";
import nodejs from "../assets/img/nodejs.png";
import mongo from "../assets/img/mongodb.png";
import canva from "../assets/img/canva.png";
import material from "../assets/img/material-ui.png";

const images = [
  css3,
  html,
  js,
  reactjs,
  nodejs,
  mongo,
  git,
  github,
  canva,
  tailwind,
  material,
  ps,
];

const SliderBox = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="text-white relative mx-auto max-w-3xl items-center mt-10">
      <Slider {...settings}>
        {images.map((im, index) => {
          return (
            <div key={index}>
              <img src={im} className={"mx-auto px-3 h-32"} alt="slide_img"></img>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderBox;
