import React, { useState } from "react";
import pic from "../assets/pic.jpeg";
import insta from "../assets/insta.svg";
import linkedin from "../assets/linkedin.svg";
import x from "../assets/x.svg";
import github from "../assets/github.svg";
import { div } from "framer-motion/client";

export const About = () => {
  const [loading, setLoad] = useState(true);

  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  let string = "1st";
  if (year === 2024 && month >= 5) {
    string = "1st";
  } else if ((year === 2025 && month >= 5) || (year === 2026 && month < 5)) {
    string = "2nd";
  } else if ((year === 2026 && month >= 5) || (year === 2027 && month < 5)) {
    string = "3rd";
  } else if ((year === 2027 && month >= 5) || (year === 2028 && month < 5)) {
    string = "4th";
  }
  return (
    <div className="flex md:flex-row flex-col text-black gap-3 border-b-[1px] border-black dark:border-white pb-[50px] mt-[50px] dark:text-white">
      <img src={pic} className="lg:w-40 md:w-30 md:h-30 h-20 w-20 rounded-full lg:h-40" alt="" />
      <div className="w-full justify-around flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold font-['IBM_Plex_Mono']">Mukal Markanda</h1>
            <p className="font-[Inter]">{string} Year Student at NIT Jalandhar</p>
          </div>
          <div className="flex justify-center items-center">
            <a className="hover:bg-emerald-400/20 rounded-full flex justify-center items-center" href="https://x.com/MukalMarkanda">
              <img className="dark:white m-3 w-5 h-5 dark-white" src={x} alt="" />
            </a>
            <a className="hover:bg-emerald-400/20 rounded-full flex justify-center items-center" href="https://www.linkedin.com/in/mukal-markanda/">
              <img className="dark:white m-3 w-5 h-5 dark-white" src={linkedin} alt="" />
            </a>
            <a className="hover:bg-emerald-400/20 rounded-full flex justify-center items-center" href="https://www.instagram.com/ordinary_mukal/">
              <img className="dark:white m-3 w-5 h-5 dark-white" src={insta} alt="" />
            </a>
            <a className="hover:bg-emerald-400/20 rounded-full flex justify-center items-center" href="https://github.com/CodewithMukal">
              <img className="dark:white m-3 w-5 h-5 dark-white" src={github} alt="" />
            </a>
          </div>
        </div>
        <div>
          <p className="font-['IBM_Plex_Mono']"><br />I design to grab attention, code to crack problems, and build to make an impact every single day.
          If you’re looking for someone who doesn’t just talk innovation but actually builds it—I’m right here.</p>
        </div>
      </div>
    </div>
  );
};
