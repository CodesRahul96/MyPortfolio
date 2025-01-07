import React from 'react';
import crlogo from '../assets/img/crlogo.png';
import lnk from '../assets/img/nav-icon1.svg';
import insg from '../assets/img/nav-icon3.svg';
import github from '../assets/img/githu.png';
import twitter from '../assets/img/twitter.png';

const FooterSec = () => {
  const year = new Date().getFullYear();
  return (
    <footer className=" text-white bg-footer-bg bg-cover">
      <div className="footcontainer flex items-start justify-between flex-wrap mx-28 px-3 pt-14 pb-12 border-b border-white/50 mdx:mx-14 msx:mx-7">
        <div className="leftfoot max-w-3xl w-[40%] order-1 msx:w-full msx:order-2 msx:mt-10">
          <div className="leftfoot flex justify-start items-center">
            <img alt="" src={crlogo} style={{ maxHeight: '50px' }}></img>
            <h1 className="text-2xl font-centra font-bold ml-2 whitespace-nowrap tracking-[1px]">
              CodesRahul
            </h1>
          </div>

          <p className="text-left font-poppins mt-5">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="rightfoot flex flex-col order-2 items-start msx:order-1">
          <h1 className="text-2xl font-centra font-bold tracking-[1px]">
            SOCIAL
          </h1>
          <div className="mx-2xl flex flex-row justify-between mt-5">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/codesrahul"
            >
              <img
                className="h-5 w-5  mr-4 opacity-50 hover:opacity-100 hover:scale-125 transition duration-150 ease-in-out"
                src={lnk}
                alt="Rahul's Linkedin Profile"
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/codesrahul"
            >
              <img className="h-6 mr-4 opacity-50 hover:opacity-100 hover:scale-125 transition duration-150 ease-in-out" alt="Rahul's github Profile" src={github} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/codesrahul"
            >
              <img
                className="h-6 mr-4 opacity-50 hover:opacity-100 hover:scale-125 transition duration-150 ease-in-out"
                alt="Rahul's twitter Profile"
                src={twitter}
              />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/codesrahul"
            >
              <img className="h-5 mr-4 opacity-50 hover:opacity-100 hover:scale-125 transition duration-150 ease-in-out" alt="Rahul's instagram Profile" src={insg} />
            </a>
          </div>
        </div>
      </div>

      <div className=" flex py-5 font-poppins text-[11px] font-light justify-center text-[#b8b8b8]">
        Made with ❤ by CodesRahul ©{year}, using REACT JS & TAILWIND CSS.
      </div>
    </footer>
  );
};

export default FooterSec;
