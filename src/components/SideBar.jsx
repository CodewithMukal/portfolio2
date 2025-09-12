import React from "react";

export const SideBar = (props) => {
  const handleClick = (nav) => {
    props.setHide(true);
    window.location.hash = nav;
  };
  return (
    <div>
      <div className="flex sideBar border-black/20 flex-col rounded-b-[20px] border-x-[1px] border-b-[1px] dark:border-white/20 lg:hidden dark:text-white items-center justify-center p-8 text-black bg-white dark:bg-[#101010] backdrop-blur-lg z-50 ">
       
        <ul className="font-[Inter] text-left space-y-4">
          <li onClick={()=>handleClick("about")} className=" font-bold hover:text-gray-800 dark:hover:text-emerald-400 cursor-pointer">
          About
          </li>
          <li onClick={()=>handleClick("skills")} className=" font-bold hover:text-gray-800 dark:hover:text-emerald-400 cursor-pointer">
          Skills
          </li>
          <li onClick={()=>handleClick("projects")} className=" font-bold hover:text-gray-800 dark:hover:text-emerald-400 cursor-pointer">
          Projects
          </li>
          <li onClick={()=>handleClick("experience")} className=" font-bold hover:text-gray-800 dark:hover:text-emerald-400 cursor-pointer">
          Experience
          </li>
          <li onClick={()=>handleClick("contact")} className=" font-bold hover:text-gray-800 dark:hover:text-emerald-400 cursor-pointer">
          Contact
          </li>
        </ul>
      </div>
    </div>
  );
};
