import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import css3 from '../assets/img/css-3.png';
import html5 from '../assets/img/html.png';
import js from '../assets/img/js.png';
import reactpn from '../assets/img/physics.png';
import ps from '../assets/img/ps.png';
import tailwind from '../assets/img/tail.svg';
import git from '../assets/img/Git.png';
import github from '../assets/img/githu.png';

const images = [css3, html5, js, reactpn, ps, tailwind, git, github];

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
        {images.map((im) => {
          return (
            <div key={im}>
              <img src={im} className={'mx-auto px-3 h-32'} alt=""></img>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderBox;
