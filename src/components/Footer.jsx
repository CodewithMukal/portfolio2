import React from "react";
import insta from "../assets/insta.svg";
import linkedin from "../assets/linkedin.svg";
import x from "../assets/x.svg";
import github from "../assets/github.svg";
import { useState, useEffect } from "react";

export const Footer = () => {
    const [timeSpent, changeTime] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        changeTime(prev => prev + 1);
      }, 1000);
  
      return () => clearInterval(interval); // cleanup on unmount
    }, []);
  return (
    <div className="font-[Inter] dark:border-white/30 border-black/20 flex justify-around border-t items-center px-2 md:px-0 py-[30px] dark:bg-black">
      <div className="text-black text-[10px] lg:text-[16px] font-['Happy_Monkey'] dark:text-white">
        {/* <p className="">Visitor Number: </p> */}
        <p>Time Spent:</p>
        <p className="text-emerald-400 dark:text-emerald-600">{timeSpent} sec</p>
      </div>
      <div className="text-black text-[10px] md:text-[16px] dark:text-white font-medium">
        Made with ❤️ & 💻 by Mukal Markanda
      </div>
      <div>
        <div className="flex justify-center gap-1 lg:gap-4 items-center">
          <a
            className="green w-[16px] h-[16px] lg:w-auto lg:h-auto"
            target="_blank"
            href="https://www.instagram.com/ordinary_mukal"
          >
            <img className="dark-white black" src={insta} alt="insta" />
          </a>
          <a
            className="green w-[16px] h-[16px] lg:w-auto lg:h-auto"
            target="_blank"
            href="https://x.com/MukalMarkanda"
          >
            <img className="dark-white black" src={x} alt="x" />
          </a>
          <a
            className="green w-[16px] h-[16px] lg:w-auto lg:h-auto"
            target="_blank"
            href="https://www.linkedin.com/in/mukal-markanda/"
          >
            <img className="dark-white black" src={linkedin} alt="linkedin" />
          </a>
          <a
            className="green w-[16px] h-[16px] lg:w-auto lg:h-auto"
            target="_blank"
            href="https://github.com/CodewithMukal"
          >
            <img className="dark-white black" src={github} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};
