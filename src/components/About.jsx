import React from "react";
import pic from "../assets/pic.svg";
import insta from "../assets/insta.svg";
import linkedin from "../assets/linkedin.svg";
import x from "../assets/x.svg";
import github from "../assets/github.svg";

export const About = () => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  let string = "1st"
  if(year===2024 && month>=5){
    string = "1st"
  }
  else if((year===2025 && month>=5) || (year===2026 && month<5)){
    string = "2nd"
  }
  else if((year===2026 && month>=5)||(year===2027 && month<5)){
    string = "3rd"
  }
  else if((year===2027 && month>=5)||(year===2028 && month<5)){
    string = "4th"
  }
  return (
    <div>
      <div className="flex flex-col max-w-[1380px] mt-[50px] md:px-[30px] border-b-[1px] dark:border-white border-black pb-[40px]">
        <div className="flex flex-col justify-center items-center md:flex-row">
          <div>
            <img
              className="hover:rounded-[50%] transition-all anim1"
              src={pic}
              alt=""
            />
          </div>
          <div className="flex px-4 flex-col justify-between">
            <div className="flex flex-col md:flex-row justify-start md:justify-between pt-[10px]">
              <div>
                <h1 className='font-["Inria_Sans"] text-4xl  md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-black to-[#666666] dark:from-white dark:to-[#999999]'>
                  Mukal Markanda
                </h1>
                <h3 className="px-[4px] font-['Inria_Sans'] dark:text-white">
                  {string} year B.Tech. at NIT Jalandhar
                </h3>
              </div>
              <div className="flex justify-start md:justify-center my-4 gap-4 items-center">
                <a
                  target="_blank"
                  className="hover:opacity-60 dark:white"
                  href="https://www.instagram.com/ordinary_mukal"
                >
                  <img
                    className="dark:white dark-white"
                    src={insta}
                    alt="insta"
                  />
                </a>
                <a
                  target="_blank"
                  className="hover:opacity-60 dark:white"
                  href="https://x.com/MukalMarkanda"
                >
                  <img className="dark:white dark-white" src={x} alt="x" />
                </a>
                <a
                  target="_blank"
                  className="hover:opacity-60 dark:white"
                  href="https://www.linkedin.com/in/mukal-markanda/"
                >
                  <img
                    className="dark:white dark-white"
                    src={linkedin}
                    alt="linkedin"
                  />
                </a>
                <a
                  target="_blank"
                  className="hover:opacity-60"
                  href="https://github.com/CodewithMukal"
                >
                  <img
                    className="dark:white dark-white"
                    src={github}
                    alt="github"
                  />
                </a>
              </div>
            </div>
            <div>
              <p className="font-['Inter'] text-[#4D4D4D] dark:text-white text-[18px] pb-[10px]">
                I'm hooked in tech, design, and building cool stuff. I’m
                currently exploring web <br />
                development, learning new tools and frameworks, and working on
                personal and team projects to sharpen my skills. <br />
                I love collaborating on creative ideas, participating in
                hackathons, and diving into anything <br /> that challenges me
                to learn and grow. Whether it's coding up interfaces, bringing
                designs to life, or solving real-world problems—I’m all in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
