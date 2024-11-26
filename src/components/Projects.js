import React from 'react';
import 'animate.css';
import ProjectCard from './ProjectCard';
import Portfolio from '../assets/img/portfolio.png';
import VideoX from '../assets/img/videox.png';
import LiveTV from '../assets/img/LiveTV.png';
import NetflixClone from '../assets/img/netflixclone.png';
import IMDB from '../assets/img/IMDB.png';
import ToDo from '../assets/img/todolist.png';
import ImageGallary from '../assets/img/ImageGallary.png';
import Logic from '../assets/img/logic.png';
import soon from '../assets/img/comingsoon.png';

const details = [
  {
    id: "1",
    title: 'Portfolio',
    imge: <img className="h-full " src={Portfolio} alt="" />,
    gitlink: 'https://github.com/codesrahul',
    extlink: 'https://codesrahul.netlify.app/',
  },
  {
    id: "2",
    title: 'VideoX',
    imge: <img className="h-full " src={VideoX} alt="" />,
    gitlink: 'https://github.com/codesrahul',
    extlink: 'https://videox.netlify.app/',
  },
  {
    id: "3",
    title: 'Netflix-Clone',
    imge: <img className="h-full " src={NetflixClone} alt="" />,
    gitlink: 'https://github.com/codesrahul',
    extlink: 'https://videox.netlify.app/',
  },
  {
    id: "4",
    title: 'IMDB',
    imge: <img className="h-full " src={IMDB} alt="" />,
    gitlink: 'https://github.com/codesrahul',
    extlink: 'https://cr-imdb.netlify.app/',
  },
  {
    id: "5",
    title: 'Live TV',
    imge: <img className="h-full " src={LiveTV} alt="" />,
    gitlink: 'https://github.com/codesrahul',
    extlink: 'https://cr-tv.netlify.app/',
  },
  {
    id: "6",
    title: 'ToDo List',
    imge: <img className="h-full " src={ToDo} alt="" />,
    gitlink: 'https://github.com/codesrahul',
    extlink: 'https://cr-todolist.netlify.app/',
  },
  {
    id: "7",
    title: 'Image Gallary',
    imge: <img className="h-full " src={ImageGallary} alt="" />,
    gitlink: 'https://github.com/codesrahul',
    extlink: 'https://cr-imagegallary.netlify.app/',
  },
 
  {
    id: "8",
    title: 'logic',
    imge: <img className="h-full " src={Logic} alt="" />,
    gitlink: 'https://github.com/codesrahul',
    extlink: 'https://codeslogic.netlify.app/',
  },

  {
    id: "9",
    title: 'In Progress...',
    imge: <img className="h-full " src={soon} alt="" />,
    gitlink: 'https://github.com/codesrahul',
    extlink: 'https://github.com/codesrahul',
  },
];

const Projects = () => {
  return (
    <section id="Projects" className="text-white bg-black relative">
      <div className="flex flex-col items-center justify-center px-12 py-14 xlx:mx-20 lgx:mx-10 mdx:7 msx:mx-1 msx:px-4">
        <h1 className="text-5xl font-centra font-bold mb-5 ">Projects</h1>
        <p className="font-poppins text-center mb-6">
        “Done is better than perfect.”
          <br /> Here, You Find Some Project's Done By Me.. 😊
        </p>
        <div className="grid grid-cols-3 gap-4 w-full  lgx:grid-cols-2 smx:grid-cols-1">
          <ProjectCard value={details[0]}></ProjectCard>
          <ProjectCard value={details[1]}></ProjectCard>
          <ProjectCard value={details[2]}></ProjectCard>
          <ProjectCard value={details[3]}></ProjectCard>
          <ProjectCard value={details[4]}></ProjectCard>
          <ProjectCard value={details[5]}></ProjectCard>
          <ProjectCard value={details[6]}></ProjectCard>
          <ProjectCard value={details[7]}></ProjectCard>
          <ProjectCard value={details[8]}></ProjectCard>
        </div>
      </div>
    </section>
  );
};

export default Projects;
