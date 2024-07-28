import Link from "next/link";
import React from "react";
import { CircularText } from "../icons/SvgIcons";

const Circular = () => {
  return (
    <div
      className="fixed bottom-4 left-4 flex 
    items-center justify-center overflow-hidden md:absolute md:bottom-auto md:left-auto md:right-8 md:top-0 md:hidden
    xs:right-0 xs:top-6 
    "
    >
      <div className="relative flex h-auto w-48 items-center justify-center">
        <CircularText className="animate-spin-slow text-black dark:text-white" />
        {/* <Link href='mailto:haro.j.angel@gmail.com'  */}
        <Link
          href="https://github.com/aharoJ"
          target={"_blank"}
          className="absolute left-1/2 top-1/2 
            flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center
            justify-center rounded-full border border-solid border-dark bg-dark font-semibold text-light
            shadow-md hover:bg-light hover:text-dark
            dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light
            md:h-14 md:w-14 md:text-[12px]
            "
        >
          aharoJ
        </Link>
        {/* absolute  bg-black text-light shadow-md border border-solid border-dark w-16 h-16 rounded-full font-semibold
            dark:bg-light dark:text-dark dark:border-light hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light
            md:w-14 md:h-14 md:text-[12px] */}
      </div>
    </div>
  );
};

export default Circular;
