import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { SideBar } from "./components/SideBar";
import { Heading } from "./components/Heading";
import { About } from "./components/About";
import { Interest } from "./components/Interest";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import GitHubCalendar from "react-github-calendar";
import arrowdark from "./assets/arrowdark.svg";
import arrowlight from "./assets/arrowlight.svg";
import bg1 from "./assets/bg1.svg";
import bg2 from "./assets/bg2.svg";
import bg3 from "./assets/bg3.svg";

function App() {
  const [darkMode, setMode] = useState(false);
  const body = document.querySelector(".bodyClass");
  const [hide, setHide] = useState(true);
  const date = new Date();
  const year = date.getFullYear();
  const emeraldTheme = {
    dark: [
      "#1f2937", // level0 - no contributions
      "#a7f3d0", // level1 - low
      "#6ee7b7", // level2 - medium
      "#34d399", // level3 - high
      "#059669", // level4 - very high
    ],
    light: [
      "#e5e7eb", // level0 - no contributions
      "#a7f3d0", // level1
      "#6ee7b7", // level2
      "#34d399", // level3
      "#059669", // level4
    ],
  };
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDarkMode) {
      setMode(true);
    }
  }, []);
  if (darkMode) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8 },
  };

  return (
    <>
      {!hide && <SideBar setHide={setHide} />}
      <div>
        <div className="fixed -z-10 hidden md:flex">
        <img className="relative opacity-20" src={bg3} alt="" />
        </div>
      </div>
      <Navbar
        hide={hide}
        setHide={setHide}
        darkMode={darkMode}
        setMode={setMode}
        body={body}
      />
      <div className="max-w-[1000px] px-3 mx-auto">
        <div className="flex justify-start flex-col gap-24 mt-6 lg:mt-24">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <Heading id="about" text="Learn About Me" />
            <About />
            <div className="dark:text-white text-black flex justify-start gap-4 mt-[30px] items-center">
              <a
                href="https://www.linkedin.com/in/mukal-markanda/"
                target="_blank"
                className="dark:text-white text-black dark:bg-black font-medium px-4 py-2 rounded-[4px] bg-white flex justify-center items-center group gap-1 hover:invert border-black dark:border-white border-[1px] transition-all"
              >
                Connect
                <img
                  className="w-5 h-5 dark:hidden group-hover:translate-x-4 group-hover:translate-y-4 justify-center items-center flex"
                  src={arrowlight}
                  alt=""
                />
                <img
                  className="w-5 h-5 dark:flex group-hover:translate-x-[2px] transition-all group-hover:-translate-y-[2px] justify-center items-center hidden"
                  src={arrowdark}
                  alt=""
                />
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1eJP5oDa5AMeEAafD8HeiLXxjOzBwdP79/view?usp=sharing"
                className="border-white dark:border-black border-[1px] hover:invert font-semibold bg-black text-white dark:bg-white dark:text-black  transition-all px-4 py-2 rounded-sm"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mt-[80px]"
        >
          <Interest />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mt-[80px]"
        >
          <Heading text="SKILLS" />
          <Skills />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mt-[80px]"
        >
          <Heading text="Github Contributions" />
          <div
            id="projects"
            className="dark:flex justify-center hidden items-center my-8 dark:text-white text-black"
          >
            <GitHubCalendar
              blockSize={13}
              theme={emeraldTheme}
              year={[[year]]}
              maxLevel={4}
              username="CodeWithMukal"
            />
          </div>
          <div
            id="projects"
            className="flex justify-center dark:hidden items-center my-8 dark:text-white text-black"
          >
            <GitHubCalendar
              blockSize={13}
              theme={emeraldTheme}
              year={[[year]]}
              colorScheme="light"
              username="CodeWithMukal"
            />
          </div>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mt-[80px]"
        >
          <Heading text="Projects" />
          <Projects />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mt-[80px]"
        >
          <Heading text="Experience" />
          <Experience />
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mt-[80px]"
        >
          <Heading id="contact" text="contact" />
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default App;
