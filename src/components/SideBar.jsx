import React from "react";

export const SideBar = (props) => {
  const handleClick = (nav) => {
    props.setHide(true);
    window.location.hash = nav;
  };
  return (
    <div>
      <div className="flex flex-col lg:hidden items-center justify-center h-screen bg-black/20 dark:bg-white/20 backdrop-blur-lg fixed top-0 left-0 w-full z-50 ">
       
        <ul className="mt-4 font-[Inter] text-left space-y-4">
          <li onClick={()=>handleClick("about")} className="text-black font-bold hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">
            {"->"} About
          </li>
          <li onClick={()=>handleClick("skills")} className="text-black font-bold hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">
          {"->"} Skills
          </li>
          <li onClick={()=>handleClick("projects")} className="text-black font-bold hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">
          {"->"} Projects
          </li>
          <li onClick={()=>handleClick("experience")} className="text-black font-bold hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">
          {"->"}Experience
          </li>
          <li onClick={()=>handleClick("contact")} className="text-black font-bold hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer">
          {"->"} Contact
          </li>
        </ul>
      </div>
    </div>
  );
};
