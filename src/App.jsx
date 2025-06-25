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

function App() {

  const [darkMode, setMode] = useState(false);
  const body = document.querySelector(".bodyClass");
  const [hide, setHide] = useState(true);
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
    transition: { duration: 0.8 }
  };

  return (
    <>
      <Analytics/>
      {!hide && (<SideBar setHide={setHide}/>)}
      <Navbar hide={hide} setHide={setHide} darkMode={darkMode} setMode={setMode} body={body} />
      <div className="max-w-[1380px] px-3 mx-auto">
        <div className="flex justify-start flex-col gap-24 mt-6 lg:mt-24">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <Heading id="about" text="Learn About Me" />
            <About />
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
