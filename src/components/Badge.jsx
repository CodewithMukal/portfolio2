import React from "react";

export const Badge = (props) => {
  return (
    <div
      className={`flex justify-center min-w-[50px] md:min-w-[80px] lg:min-w-[100px] hover:scale-110 transition-transform cursor-pointer py-4 px-4 h-[30px] items-center border-[1px] gap-1 md:gap-2 lg:gap-3 border-black dark:border-white font-sans`}
    >
      <div className="flex justify-center gap-2 items-center">
        {props.dark && (
          <img
            className="hidden dark:block md:w-[20px] md:h-[20px] w-[12px] h-[12px] lg:w-[28px] lg:h-[28px]"
            src={props.dark}
            alt=""
          />
        )}
        {props.image && (
          <img
            className="dark:hidden md:w-[20px] md:h-[20px] w-[12px] h-[12px] lg:w-[28px] lg:h-[28px]"
            src={props.image}
            alt=""
          />
        )}
        <p className="lg:text-[20px] text-[12px] font-bold dark:text-white">
          {props.lang}
        </p>
      </div>
    </div>
  );
};
