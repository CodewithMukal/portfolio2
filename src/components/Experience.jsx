import React from "react";

export const Circle = (props) => {
  return (
    <div
      className={`w-[42px] h-[42px] bg-[#7B7B7B] flex justify-center items-center rounded-full ${
        props.small === "yes" ? "scale-50 relative bottom-3" : ""
      }`}
    >
      <div className="w-[50%] h-[50%] bg-white dark:bg-black rounded-full"></div>
    </div>
  );
};
export const Line = () => {
  return <div className={`w-[3px] h-[100px] bg-[#7b7b7b]`}></div>;
};
export const Experience = () => {
  return (
    <div className="w-fit mx-auto relative left-4 md:left-7 lg:left-10 my-[60px] dark:text-white">
      <div className="font-[Inter] flex justify-start items-center">
        <div className="flex gap-4">
          <div className="flex flex-col justify-center items-center">
            <Circle />
            <Line />
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="md:text-2xl text-xl lg:text-3xl font-bold">Student at NIT Jalandhar</h1>
              <p className="text-[12px] md:text-[14px] lg:text-[16px]">2024-Present</p>
            </div>
            <div>
              <p className="text-[12px] md:text-[14px] lg:text-[16px]">{"->"} Building connections and learning everyday.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="font-[Inter] flex justify-start items-center">
        <div className="flex gap-4">
          <div className="flex flex-col justify-center items-center">
            <Circle />
            <Line />
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
                Game Developer at NIT Jalandhar
              </h1>
              <p className="text-[12px] md:text-[14px] lg:text-[16px]">2024-Present</p>
            </div>
            <div className="flex flex-col gap-3 text-[12px] md:text-[14px] lg:text-[16px]">
              <p>{"->"} Successfully hosted a session on Game Development.</p>
              <p>{"->"} Volunteered for HackMOL 6.0 in Organising Team.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Circle small="yes" />
        </div>
      </div>
    </div>
  );
};
