import React from "react";
import "animate.css";
import ProjectCard from "./ProjectCard";
import Portfolio from "../assets/img/portfolio.png";
import VideoX from "../assets/img/videox.png";
import LiveTV from "../assets/img/LiveTV.png";
import NetflixClone from "../assets/img/netflixclone.png";
import IMDB from "../assets/img/IMDB.png";
import ToDo from "../assets/img/todolist.png";
import ImageGallary from "../assets/img/ImageGallary.png";
import Logic from "../assets/img/logic.png";
import soon from "../assets/img/comingsoon.png";

const details = [
  {
    id: "1",
    title: "Portfolio",
    imge: <img className="h-full " src={Portfolio} alt="Portfolio" />,
    gitlink: "https://github.com/codesrahul96",
    extlink: "https://codesrahul.vercel.app/",
  },
  {
    id: "2",
    title: "VideoX",
    imge: <img className="h-full " src={VideoX} alt="VideoX" />,
    gitlink: "https://github.com/CodesRahul96/VideoX.git",
    extlink: "https://video-x.vercel.app/",
  },
  {
    id: "3",
    title: "Netflix-Clone",
    imge: <img className="h-full " src={NetflixClone} alt="Netflix-Clone" />,
    gitlink: "https://github.com/CodesRahul96/Netflix-Clone.git",
    extlink: "https://codesrahul-netflix.vercel.app/",
  },
  {
    id: "4",
    title: "IMDB",
    imge: <img className="h-full " src={IMDB} alt="IMDB" />,
    gitlink: "https://github.com/codesrahul96",
    extlink: "https://codesrahul-imdb.vercel.app/",
  },
  {
    id: "5",
    title: "Live-TV",
    imge: <img className="h-full " src={LiveTV} alt="Live-TV" />,
    gitlink: "https://github.com/codesrahul96",
    extlink: "https://codesrahul-tv.vercel.app/",
  },
  {
    id: "6",
    title: "todo-list",
    imge: <img className="h-full " src={ToDo} alt="todo-list" />,
    gitlink: "https://github.com/CodesRahul96/todo-list.git",
    extlink: "https://codesrahul-todolist.vercel.app/",
  },
  {
    id: "7",
    title: "Image-Gallary",
    imge: <img className="h-full " src={ImageGallary} alt="Image-Gallary" />,
    gitlink: "https://github.com/CodesRahul96/Image-Gallary.git",
    extlink: "https://codesrahul-imagegallary.vercel.app/",
  },

  {
    id: "8",
    title: "logic",
    imge: <img className="h-full " src={Logic} alt="logic" />,
    gitlink: "https://github.com/codesrahul96",
    extlink: "https://codeslogic.netlify.app/",
  },

  {
    id: "9",
    title: "In Progress...",
    imge: <img className="h-full " src={soon} alt="Progress" />,
    gitlink: "https://github.com/codesrahul96",
    extlink: "https://github.com/codesrahul96",
  },
];

const Projects = () => {
  return (
    <section id="Projects" className="text-white relative">
      <div className="flex flex-col items-center justify-center px-12 py-14 mx-32 xlx:mx-20 lgx:mx-10 mdx:mx-7 msx:mx-4 msx:px-4">
        <h1 className="text-5xl font-centra font-bold mb-5 "> Projects </h1>
        <p className="font-poppins text-center mb-6">
          “Done is better than perfect.”
          <br /> Here, You Find Some Project's Done By Me.. 😊
        </p>
        <div className="w-full grid grid-cols-3 gap-4 lgx:grid-cols-2 smx:grid-cols-1">
          <ProjectCard value={details[0]} />
          <ProjectCard value={details[1]} />
          <ProjectCard value={details[2]} />
          <ProjectCard value={details[3]} />
          <ProjectCard value={details[4]} />
          <ProjectCard value={details[5]} />
          <ProjectCard value={details[6]} />
          <ProjectCard value={details[7]} />
          <ProjectCard value={details[8]} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
