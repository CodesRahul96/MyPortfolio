import React, { useState, useEffect } from "react";
import crlogo from "../assets/img/crlogo.png";
import nav1 from "../assets/img/nav-icon1.svg";
import nav3 from "../assets/img/nav-icon3.svg";
import ham from "../assets/img/hamburger.png";
import nav2 from "../assets/img/githu.png";
import "animate.css";
import HamMenu from "./HamMenu";

const NavBar = () => {
  const [clicked, setClicked] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [hamt, sethamt] = useState("");
  const menuclick = (e) => {
    setClicked(e.target.text);
  };
  const hamclick = () => {
    sethamt(!hamt);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar fixed top-0 w-full flex items-center justify-center flex-wrap h-19 z-50 py-4 ease-in-out duration-300 ${
          scrolled ? "py-0 bg-[#030712]" : ""
        } }`}
      >
        <div className="navcontainer w-full flex items-center justify-between flex-wrap transition-all mx-28 px-3  mdx:mx-14 msx:mx-7">
          <a
            href="/"
            className="flex items-center transition ease-in-out delay-150"
          >
            <img src={crlogo} style={{ maxHeight: "60px" }} alt="logo"></img>
            <h2
              className={` text-white text-xl font-bold ${
                scrolled ? "hidden" : "block"
              }`}
            >
              CodeRahul
            </h2>
          </a>
          <div className="nav-collapse flex items-center flex-grow-1 msx:hidden">
            <div className="menu-holder ml-auto" onClick={menuclick}>
              <a
                href="#Home"
                className={
                  "px-6 text-lg font-meduim font-poppins hover:text-white cursor-pointer " +
                  (clicked === "Home" ? "text-[#1da1f2]" : "text-[#b8b8b8]")
                }
              >
                {`Home`}
              </a>
              <a
                href="#Skills"
                className={
                  "px-6 text-lg font-meduim font-poppins transition ease-in-out cursor-pointer hover:text-white " +
                  (clicked === "Skills" ? "text-[#1da1f2]" : "text-[#b8b8b8]")
                }
              >
                Skills
              </a>
              <a
                href="#Projects"
                className={
                  "px-6 text-lg font-meduim font-poppins cursor-pointer hover:text-white " +
                  (clicked === "Projects" ? "text-[#1da1f2]" : "text-[#b8b8b8]")
                }
              >
                Projects
              </a>
            </div>
            <span className="button-holder py-2 flex  items-center">
              <div className="social-icons ml-4 lgx:hidden">
                <div className="group circle inline-flex items-center justify-center mr-1.5 h-10 w-10 bg-gray-800/50  border border-white rounded-full transition ease-in-out hover:border-transparent hover:bg-[#1da1f2] ">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/codesrahul"
                  >
                    <img src={nav1} className="group-hover:invert" alt=""></img>
                  </a>
                </div>
                <div className="group circle inline-flex items-center justify-center mr-1.5 h-10 w-10 bg-gray-800/50  border border-white rounded-full transition ease-in-out hover:border-transparent hover:bg-[#1da1f2] ">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/codesrahul96"
                  >
                    <img
                      alt=""
                      src={nav2}
                      className="h-[18px] group-hover:invert"
                    ></img>
                  </a>
                </div>
                <div className="group circle inline-flex items-center justify-center mr-1.5 h-10 w-10 bg-gray-800/50  border border-white rounded-full transition ease-in-out hover:border-transparent hover:bg-[#1da1f2] ">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/codesrahul"
                  >
                    <img alt="" src={nav3} className="group-hover:invert"></img>
                  </a>
                </div>
              </div>
              <a href="https://drive.google.com/file/d/1n3SV6Cr93pzF0ZMfYOsjOYS1-APO-v4_/view?usp=sharing">
                <button
                  className={`border border-white rounded font-poppins text-lg text-white font-medium px-6 ml-5 whitespace-nowrap transition-colors hover:bg-[#1da1f2] hover:text-white hover:border-transparent ease-in-out duration-300 ${
                    scrolled ? "py-2" : "py-3"
                  } `}
                >
                  Download CV
                </button>
              </a>
            </span>
          </div>
          <div className="hidden msx:block">
            <div className="flex items-center">
              <HamMenu value={hamt}></HamMenu>
              <img
                alt=""
                onClick={hamclick}
                className={`inline-block z-50 h-full cursor-pointer ${
                  hamt ? "animate-hanim1" : "animate-hanim2"
                }`}
                src={ham}
              ></img>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
