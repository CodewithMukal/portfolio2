import React from "react";

export const Stack = (props) => {
  return (
    <div className="border-black bg-white hover:bg-gray-400 hover:text-white cursor-pointer dark:hover:text-black dark:text-black dark:border-white border-[1px] px-4">
      <div className="flex  justify-center gap-2 max-w-[80px] h-[25px] items-center">
        <img src={props.image} className="w-[20px] dark:hidden" alt="" />
        <img src={props.dark} className="w-[20px] hidden dark:block" alt="" />
        <p className="font-bold">{props.lang}</p>
      </div>
    </div>
  );
};
