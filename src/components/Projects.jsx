import React from "react";
import { ProjectCard } from "./ProjectCard";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import react from "../assets/react.svg";
import { Stack } from "./Stack";
import tailwind from "../assets/tailwind.svg";
import node from "../assets/node.svg";
import express from "../assets/express.svg";
import mongo from "../assets/mongo.svg";
import redis from "../assets/redis.svg";
import nextjs from "../assets/nextjs.svg";
import postgre from "../assets/postgre.svg";

export const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-fit mt-[50px] mx-auto gap-[50px]">
      <ProjectCard
        title="BnBServices"
        id="experience"
        ss={proj4}
        githubLink="https://github.com/mukulubnext/bnbServices"
        link="https://bnb-services-7heb.vercel.app/"
        stackDiv={
          <div className="grid my-3 w-fit grid-cols-3 gap-4">
            <Stack image={nextjs} dark={nextjs} lang="NextJS" />
            <Stack image={tailwind} dark={tailwind} lang="Tailwind" />
            <Stack image={postgre} dark={postgre} lang="Postgre" />
            <Stack image={redis} dark={redis} lang="Redis" />
          </div>
        }
        description="Marketplace to connect buyers and sellers in the field of packaging units. It is a project I built during my intern at UB Next for their respective client."
      />
      <ProjectCard
        title="Leetracer"
        id="experience"
        ss={proj3}
        githubLink="https://github.com/CodewithMukal/leetracer-frontend"
        link="https://leetracer.vercel.app"
        stackDiv={
          <div className="grid my-3 w-fit grid-cols-3 gap-4">
            <Stack image={react} dark={react} lang="React" />
            <Stack image={tailwind} dark={tailwind} lang="Tailwind" />
            <Stack image={node} dark={node} lang="NodeJS" />
            <Stack image={express} dark={express} lang="Express" />
            <Stack image={mongo} dark={mongo} lang="MongoDB" />
            <Stack lang="GraphQL" />
          </div>
        }
        description="This app allows you to compete with your friends on Leetcode. You can analytically view your data, add friend's and get AI recommendations."
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
      <ProjectCard
        title="ToolsPDF"
        ss={proj1}
        githubLink="https://github.com/CodewithMukal/toolsPDF"
        link="https://toolspdf.vercel.app/"
        stackDiv={
          <div className="grid my-3 w-fit grid-cols-3 gap-4">
            <Stack image={react} dark={react} lang="React" />
            <Stack image={tailwind} dark={tailwind} lang="Tailwind" />
          </div>
        }
        description="A scalable product containing multiple PDF editing tools. Whether the task is to make a PDF, break a PDF or change its structure, these tools got you."
      />
    </div>
  );
};
