import React from "react";
import { Badge } from "./Badge";
import c from "../assets/c.svg";
import cdark from "../assets/cdark.svg";
import cpp from "../assets/cpp.svg";
import cppdark from "../assets/cppdark.svg";
import python from "../assets/python.svg";
import pythondark from "../assets/pythonda.svg";
import js from "../assets/js.svg";
import jsdark from "../assets/jsdark.svg";
import html from "../assets/html.svg";
import htmldark from "../assets/htmldark.svg";
import css from "../assets/css.svg";
import cssdark from "../assets/cssdark.svg";
import react from "../assets/react.svg";
import reactdark from "../assets/reactdark.svg";
import tailwind from "../assets/tailwind.svg";
import tailwinddark from "../assets/tailwinddark.svg";
import git from "../assets/git.svg";
import gitdark from "../assets/gitdark.svg";
import github from "../assets/github.svg";
import githubdark from "../assets/githubdark.svg";
import figma from "../assets/figma.svg";
import figmadark from "../assets/figmadark.svg";
import unity from "../assets/unity.svg";
import unitydark from "../assets/unitydark.svg";
import postman from "../assets/postman.svg";
import postmandark from "../assets/postmandark.svg";
import vercel from "../assets/vercel.svg";
import verceldark from "../assets/verceldark.svg";
import node from "../assets/node.svg";
import nodeDark from "../assets/nodedark.svg";
import express from "../assets/express.svg";
import expressdark from "../assets/expressdark.svg";
import mongo from "../assets/mongo.svg";
import mongodark from "../assets/mongodark.svg";
import php from "../assets/php.svg";
import phpDark from "../assets/phpDark.svg";

export const Skills = () => {
  return (
    <div className='font-["IBM_Plex_Mono"] dark:text-white text-xl md:text-2xl lg:text-2xl'>
      <div>
        <div className="flex flex-col md:items-center items-start gap-3 md:gap-0 md:flex-row border-b-[1px] justify-between px-5 py-8 border-black dark:border-white">
          <h1>Programming Languages</h1>
          <div className="flex flex-col justify-center items-start gap-4">
            <div className="flex gap-4">
              <Badge image={c} dark={cdark} lang="C" />
              <Badge image={cpp} dark={cppdark} lang="C++" />
              <Badge image={python} dark={pythondark} lang="Python" />
              <Badge image={js} dark={jsdark} lang="Javascript" />
            </div>
            <div className="flex gap-4">
              <Badge image={php} dark={phpDark} lang="PHP" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row border-b-[1px] justify-between px-5 py-8 border-black dark:border-white">
          <h1>FrontEnd</h1>
          <div className="flex gap-4">
            <Badge image={html} dark={htmldark} lang="HTML5" />
            <Badge image={css} dark={cssdark} lang="CSS" />
            <Badge image={react} dark={reactdark} lang="React" />
            <Badge image={tailwind} dark={tailwinddark} lang="Tailwind" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row border-b-[1px] justify-between px-5 py-8 border-black dark:border-white">
          <h1>BackEnd</h1>
          <div className="flex gap-4">
            <Badge image={node} dark={nodeDark} lang="NodeJS" />
            <Badge image={express} dark={expressdark} lang="ExpressJS" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row border-b-[1px] justify-between px-5 py-8 border-black dark:border-white">
          <h1>Databases</h1>
          <div className="flex gap-4">
            <Badge image={mongo} dark={mongodark} lang="MongoDB" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex border-b-[1px] flex-col md:flex-row gap-3 md:gap-0  justify-between px-5 py-8 border-black dark:border-white">
          <h1>Version Control</h1>
          <div className="flex gap-4">
            <Badge image={git} dark={gitdark} lang="Git" />
            <Badge image={github} dark={githubdark} lang="Github" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-3 md:gap-0 flex-col md:flex-row border-b-[1px] justify-between px-5 py-8 border-black dark:border-white">
          <h1>Tools & Platforms</h1>
          <div className="flex gap-4">
            <Badge image={figma} dark={figmadark} lang="Figma" />
            <Badge image={unity} dark={unitydark} lang="Unity" />
            <Badge image={postman} dark={postmandark} lang="Postman" />
            <Badge image={vercel} dark={verceldark} lang="Vercel" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-3 md:gap-0 md:flex-row justify-between px-5 py-8 border-black dark:border-white">
          <h1>Other</h1>
          <div className="flex gap-4">
            <div className="flex justify-center min-w-[100px] hover:scale-110 transition-transform cursor-pointer py-4 px-4 h-[30px] green items-center border-[1px] border-black dark:border-white font-sans">
              <p className="lg:text-[20px] text-[12px] text-center font-bold dark:text-white">
                OOPS
              </p>
            </div>
            <div className="flex justify-center min-w-[100px] hover:scale-110 transition-transform cursor-pointer py-4 px-4 h-[30px] green items-center border-[1px] border-black dark:border-white font-sans">
              <p className="lg:text-[20px] green text-[12px] text-center font-bold dark:text-white">
                Linux
              </p>
            </div>
            <div className="flex justify-center green min-w-[100px] hover:scale-110 transition-transform cursor-pointer py-4 px-4 h-[30px] items-center border-[1px] border-black dark:border-white font-sans">
              <p className="lg:text-[20px] green text-[12px] text-center font-bold dark:text-white">
                DSA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
