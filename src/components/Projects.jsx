import React from "react";
import { ProjectCard } from "./ProjectCard";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import react from "../assets/react.svg";
import { Stack } from "./Stack";
import tailwind from "../assets/tailwind.svg";
import node from "../assets/node.svg";
import express from '../assets/express.svg'
import mongo from '../assets/mongo.svg'

export const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-fit mt-[50px] mx-auto gap-[50px]">
      <ProjectCard
        title="ToolsPDF"
        ss={proj1}
        githubLink="https://github.com/CodewithMukal/toolsPDF"
        link="https://toolspdf.vercel.app/"
        stackDiv={
          <div className="grid my-3 w-fit grid-cols-3 gap-4">
            <Stack image={react} dark={react} lang="React" />
            <Stack image={tailwind} dark={tailwind} lang="Tailwind" />
            <Stack image={node} dark={node} lang="NodeJS" />
          </div>
        }
        description="A scalable product containing multiple PDF editing tools. Whether the task is to make a PDF, break a PDF or change its structure, these tools got you."
      />
      <ProjectCard
        title="ClipURL"
        ss={proj2}
        githubLink="https://github.com/CodewithMukal/Clip-Url-Frontend"
        link="https://clipurlx.vercel.app"
        stackDiv={
          <div className="grid my-3 w-fit grid-cols-3 gap-4">
            <Stack image={react} dark={react} lang="React" />
            <Stack image={tailwind} dark={tailwind} lang="Tailwind" />
            <Stack image={node} dark={node} lang="NodeJS" />
            <Stack image={express} dark={express} lang="Express" />
            <Stack image={mongo} dark={mongo} lang="MongoDB" />
          </div>
        }
        description="ClipURL allows user to convert their long, nastly links into their shortened beautiful versions without changing the destination."
      />
    </div>
  );
};
