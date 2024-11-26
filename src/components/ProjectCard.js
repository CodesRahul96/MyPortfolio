import React, { useState } from 'react';
import nav1 from '../assets/img/githu.png';
import ext from '../assets/img/external-link.png';
const ProjectCard = ({ value }) => {
  const [hov, setHov] = useState('hidden');
  const [fade, setFade] = useState('hidden');
  const entered = (e) => {
    setHov('animate__slideInDown');
    setFade('animate__fadeInUp');
  };
  const left = (e) => {
    setHov('animate__slideOutUp');
    setFade('animate__fadeOutDown');
  };
  return (
    <div
      onMouseEnter={entered}
      onMouseLeave={left}
      className="group  rounded-xl flex items-center justify-center "
    >
      <div className=" rounded-xl relative overflow-hidden h-full flex items-center justify-center ">
        <div
          style={{
            background:
              'linear-gradient(90.21deg,rgba(170,54,124,.8) -5.91%,rgba(74,47,189,.8) 111.58%)',
          }}
          className={`flex items-center justify-center absolute h-full w-full animate__animated animate__faster ${hov} `}
        ></div>
        <div
          className={`info  absolute animate__animated animate__faster ${fade}`}
        >
          <h1
            className={` text-center text-3xl font-centra font-bold mb-5 pb-5`}
          >
            {value.title}
          </h1>
          <div className="flex flex-row justify-center align-center gap-2 mt-5 ">
            <a
              target={`${value.gitlink === '' ? '' : '_blank'}`}
              href={`${value.gitlink === '' ? '#Home' : value.gitlink}`}
            >
              <img className=" h-14 " src={nav1} alt=""></img>
            </a>
            <a
              target={`${value.extlink === '' ? '' : '_blank'}`}
              href={`${value.extlink === '' ? '#Home' : value.extlink}`}
            >
              <img className=" h-14" src={ext} alt=""></img>
            </a>
          </div>
        </div>
        {value.imge}
      </div>
    </div>
  );
};

export default ProjectCard;
