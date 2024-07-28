import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Tooltip, Button } from "@material-tailwind/react";

const Resume_Contact_Buttons = () => {
  return (
    <>
      {/* <div className="flex items-center flex-row  self-start  mt-2 lg:self-center"> */}
      <div className="mt-2 flex flex-row items-center justify-between space-x-8 ">
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Resume         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        {/* <Link href="/resume_angel_haro.pdf" target={"_blank"} */}
        <Link
          href="https://aharoj.io/about"
          className=" mb-6 items-center rounded-lg border border-solid border-transparent bg-slate-600 
                    p-2.5 px-8 text-xl text-light hover:border-dark hover:bg-light
                     hover:text-dark hover:dark:border-light
                    hover:dark:bg-dark hover:dark:text-light md:mx-4
                    md:p-2 md:text-2xl xs:p-2
                "
        >
          {" "}
          Resume
        </Link>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Contact         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        <Tooltip
          content="aharoJair@gmail.com"
          className="bg bg-transparent text-xs text-red-950 dark:text-white"
        >
          <Link
            href="mailto:aharoJair@gmail.com"
            target={"_blank"}
            className="mb-6 text-2xl font-medium capitalize text-dark
                underline hover:underline-offset-4 dark:text-light md:text-2xl xs:p-2 "
          >
            Contact
          </Link>
        </Tooltip>
      </div>
    </>
  );
};

export default Resume_Contact_Buttons;
