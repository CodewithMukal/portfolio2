import React from "react";

export const Heading = (props) => {
  return (
    <div id={props.id}>
      <div className="inline-block">
        <p className="text-black riseUp uppercase text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white px-1 font-['Inter']">
          {props.text}
        </p>
        <div className="h-[1px] riseUp delay-300 relative left-[30%] w-[75%] bg-black dark:bg-white"></div>
        <div className="h-[1px] riseUp delay-500 relative top-[4px] left-[5%] w-[70%] bg-black dark:bg-white"></div>
      </div>
    </div>
  );
};
