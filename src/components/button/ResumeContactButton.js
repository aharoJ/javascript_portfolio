import Link from "next/link";
import React from "react";

const ResumeContactButton = () => {
  return (
    <div className="mt-2 flex w-[100%] flex-row items-center justify-between space-x-0 md:flex-row md:space-x-8 md:space-y-0 md:mt-0">
      <div className="w-1/2 whitespace-nowrap md:flex md:w-[100%] md:flex-row md:justify-evenly">
        <Link
          href="https://aharoj.io/about"
          className="items-center rounded-lg border border-solid border-transparent bg-slate-600 p-4  text-2xl text-light 
            hover:border-dark hover:bg-light hover:text-dark dark:bg-blue-500 dark:text-dark hover:dark:border-light
            hover:dark:bg-dark hover:dark:text-orange-200 md:mx-0 md:w-auto md:p-1.5 md:text-xl"
        >
          My Journey
        </Link>
      </div>

      <div className="w-1/2 whitespace-nowrap md:w-[100%]">
        <Link
          href="mailto:aharoJair@gmail.com"
          target={"_blank"}
          className="text-2xl font-bold capitalize text-dark/80 underline tracking-wide hover:underline-offset-4 
            dark:text-light md:text-2xl xs:p-2 "
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default ResumeContactButton;
