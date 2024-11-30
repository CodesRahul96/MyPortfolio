import React from "react";
import { TypeAnimation } from "react-type-animation";
import astro from "../assets/img/header-img.svg";
import ar1 from "../assets/img/arrow2.svg";

const Banner = () => {
  const Typing = () => {
    return (
      <TypeAnimation
        className=" text-white z-40"
        sequence={[
          "Web Developer", // Types 'One'
          3000, // Waits 1s
          "",
          2000,
          "Web Designer",
          3000, // Waits 2s
        ]}
        wrapper="div"
        speed={5}
        cursor={true}
        repeat={Infinity}
      />
    );
  };

  return (
    <div
      id="Home"
      className={`banner bg-banner-bg bg-top bg-cover pt-64 pb-24 z-50  msx:pt-32`}
    >
      <div className="mx-32 xlx:mx-20 lgx:mx-12 mdx:7 msx:mx-7">
        <div className="grid grid-cols-2 gap-2 msx:grid-cols-1">
          <div className=" leftside col-span-1">
            <span
              className="text-xl font-poppins inline-block font-medium py-2 px-2.5  border border-white  text-white mb-4"
              style={{
                background:
                  "linear-gradient(90.21deg,rgba(170,54,124,.5) -5.91%,rgba(74,47,189,.5) 111.58%)",
              }}
            >
              Welcome to My World 🌍
            </span>
            <h1 className="text-5xl text-white font-centra font-black">
              Hi! I'm Codes Rahul
              <Typing></Typing>
            </h1>
            <p className="text-[#b8b8b8] flex-wrap font-poppins py-6">
              I'm Front-end developer with proven ability to design and develop
              JavaScript-based applications for web or mobile environments.
              Strong knowledge of React JS, React Native, JavaScript/TypeScript,
              Tailwind/CSS. Experienced in all stages of interface component
              design, from conception to final testing and deployment of
              web-responsive applications.
            </p>
            <span>
              <a href="#Contact">
                <button className="text-xl text-white font-semibold font-centra flex items-center transition ease-in-out duration-500 hover:-translate-y-1 hover:scale-110">
                  Let's Connect
                  <img alt="" src={ar1} className="h-4 pl-2 "></img>
                </button>
              </a>
            </span>
          </div>
          <div className="rightside flex items-center justify-center msx:">
            <div className="imghld">
              <img alt="" src={astro} className="h-96 animate-updn"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
