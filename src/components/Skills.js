import React from 'react';
import bgimg from '../assets/img/color-sharp.png';
import Skillsbox from './Skillsbox';
import Slider from './Slider';

const Skills = () => {
  const newskills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Reactjs',
    'Nodejs',
    'MongoDB',
    'GIT',
    'GitHub',
    'Tailwind Css',
    'Material UI',
    'Resposive Design',
    'Canva',
    'Photoshop',
  ];
  return (
    <>
      <div id="Skills" className="skill-main relative  ">
        <div className="skill-cont w-full">
          <div className="skill-holder flex flex-wrap relative z-20 mb-10">
            <div className="skill-gg basis-full w-full">
              <div className="skill-cnt text-center items-center text-white  px-12 py-14 rounded-3xl -mt-12 bg-[#151515]  mx-32 xlx:mx-20 lgx:mx-10 mdx:7 msx:mx-7">
                <div className="flex flex-col items-center">
                  <h1 className="text-5xl font-centra font-bold mb-5">
                    Skills
                  </h1>
                  <p className="font-poppins text-center">
                  I excel in JavaScript (ES6), TypeScript, HTML5, and Tailwind/CSS3, and have extensive experience in the React JS ecosystem, including React-Native for mobile app development on iOS and Android platforms.
                    <br />⭐ APPRISING MERN STACK DEVELOPER ⭐
                  </p>
                  <div className="group flex justify-center flex-wrap my-5">
                    <Skillsbox value={newskills}></Skillsbox>
                  </div>
                </div>
                <Slider></Slider>
              </div>
            </div>
          </div>
        </div>
        <img
          src={bgimg}
          className="absolute top-[28%] z-0 w-[40%]"
          alt=""
        ></img>
      </div>
    </>
  );
};

export default Skills;
