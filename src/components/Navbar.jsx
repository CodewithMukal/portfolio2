import React from "react";
import light from "../assets/light.svg";
import dark from "../assets/dark.svg";
import { useState } from "react";

export const Navbar = (props) => {
  const [spinning, setSpinning] = useState(false);

  const handleClick = () => {
    setSpinning(true);
    props.setMode(!props.darkMode);
    setTimeout(() => setSpinning(false), 1000);
  };
  const handleHam = () => {
    {props.hide ? props.setHide(false) : props.setHide(true)};
  };
  return (
    <div className="flex sticky top-0 py-5 lg:px-2 md:px-3 px-5 backdrop-blur-lg max-w-[1000px] dark:text-white mx-auto justify-between items-center z-10">
      <div className="font-['Kameron'] font-semibold text-4xl">
        <a href="#">MUKAL.ME</a>
      </div>
      <div className="lg:flex justify-center hidden font-semibold font-['IB_Plex_Mono'] gap-2 items-center">
        <div className="flex items-center justify-center">
        <a className="hover:text-emerald-400 hover:bg-[#FFF]/10 rounded-full px-4 py-2" href="#about">
          About
        </a>
        <a className="hover:text-emerald-400 hover:bg-[#FFF]/10 rounded-full px-4 py-2" href="#skills">
          Skills
        </a>
        <a className="hover:text-emerald-400 hover:bg-[#FFF]/10 rounded-full px-4 py-2" href="#projects">
          Projects
        </a>
        <a className="hover:text-emerald-400 hover:bg-[#FFF]/10 rounded-full px-4 py-2" href="#experience">
          Experience
        </a>
        <a className="hover:text-emerald-400 hover:bg-[#FFF]/10 rounded-full px-4 py-2" href="#contact">
          Contact
        </a>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={handleClick}
            className="flex cursor-pointer green justify-center items-center"
          >
            <img
              className={spinning ? "spin" : ""}
              src={props.body.classList.contains("dark") ? dark : light}
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="lg:hidden flex justify-center items-center gap-5">
        <div className="flex justify-center green items-center">
          <button
            onClick={handleClick}
            className="flex cursor-pointer justify-center items-center"
          >
            <img
              className={spinning ? "spin" : ""}
              src={props.body.classList.contains("dark") ? dark : light}
              alt=""
            />
          </button>
        </div>
        <div onClick={()=>handleHam()} className="flex-col green flex gap-1 ">
          <div className="w-4 h-[2px] bg-black dark:bg-white"></div>
          <div className="w-4 h-[2px] bg-black dark:bg-white"></div>
          <div className="w-4 h-[2px] bg-black dark:bg-white"></div>
        </div>
      </div>
    </div>
  );
};
