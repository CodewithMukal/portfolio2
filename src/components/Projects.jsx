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
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import js from "../assets/js.svg";

export const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit mt-[50px] mx-auto gap-[50px]">
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
        title="CGPACalc"
        ss={proj2}
        githubLink="https://github.com/CodewithMukal/CGPACalc"
        link="https://cgpa-calc-three.vercel.app/"
        stackDiv={
          <div className="grid my-3 w-fit grid-cols-3 gap-4">
            <Stack image={react} dark={react} lang="React" />
            <Stack image={tailwind} dark={tailwind} lang="Tailwind" />
          </div>
        }
        description="Effortlesly calculate your CGPA for the semester. Just enter grades, credit and calculate how much you scored!"
      />
      <ProjectCard
        title="Calculator"
        ss={proj4}
        githubLink="https://github.com/CodewithMukal/Calculator"
        link="https://calculator-omega-three-56.vercel.app/"
        stackDiv={
          <div className="grid my-3 w-fit grid-cols-3 gap-4">
            <Stack image={react} dark={react} lang="React" />
            <Stack image={tailwind} dark={tailwind} lang="Tailwind" />
          </div>
        }
        description="A simple calculator web app to make solving equations easier than ever before. Only downside: you can only do one operation at a time."
      />
      <ProjectCard
        title="Rock Paper Scissors"
        ss={proj3}
        githubLink="https://github.com/CodewithMukal/Rock-Paper-Scissors"
        link="https://rockpaperscissors-lac.vercel.app/"
        stackDiv={
          <div id="experience" className="grid my-3 w-fit grid-cols-3 gap-4">
            <Stack image={html} dark={html} lang="HTML" />
            <Stack image={css} dark={css} lang="CSS" />
            <Stack image={js} dark={js} lang="JS" />
          </div>
        }
        description="A fun game of classical Rock,Paper,Scissors with Computer. Lets see whats the max score you can get..."
      />
    </div>
  );
};
