import React from "react";
import github from "../assets/github.svg";
import openLink from "../assets/openLink.svg";

export const ProjectCard = (props) => {
  return (
    <div className="flex lg:w-[400px] select-none hover:scale-[1.02] backdrop-blur-lg bg-yellow-200/5 dark:bg-white/5 transition-transform">
      <div className="flex flex-col border-[1px] transition-colors hover:border-emerald-400 dark:hover:border-emerald-300 border-black dark:border-white dark:text-white">
        <img className="border-b-[1px] border-black/80 dark:border-white/80" width={516} src={props.ss} alt="" />
        <div className="px-4 py-6 flex flex-col gap-4">
          <div className="flex justify-between">
            <h1 className="font-['Inria_Sans'] font-bold text-3xl">{props.title}</h1>
            <div className="flex justify-center items-center gap-2">
              <a target="_blank" href={props.githubLink}>
                <img
                  className="dark:white transition-transform hover:-translate-y-1 hover:scale-110 dark-white"
                  src={github}
                  alt="githubLink"
                />
              </a>
              <a target="_blank" href={props.link}>
                <img
                  className="dark:white dark-white transition-transform hover:-translate-y-1 hover:scale-110"
                  src={openLink}
                  alt="open"
                />
              </a>
            </div>
          </div>
          <div>
            {
                props.stackDiv
            }
          </div>
          <p className="w-fit">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
