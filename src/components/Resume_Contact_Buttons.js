import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { Tooltip, Button } from "@material-tailwind/react";


const Resume_Contact_Buttons = () => {
    return (
        <>
        {/* <div className="flex items-center flex-row  self-start  mt-2 lg:self-center"> */}
        <div className="flex items-center flex-row justify-between space-x-8 mt-2 ">
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Resume         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
                {/* <Link href="/resume_angel_haro.pdf" target={"_blank"} */}
                <Link href="https://aharoj.io/about"
                    className=" mb-6 items-center bg-slate-600 text-light p-2.5 px-8 rounded-lg 
                    hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark
                     hover:dark:bg-dark hover:dark:border-light
                    hover:dark:text-light md:p-2 md:mx-4
                    text-xl md:text-2xl xs:p-2
                " 
                >   Resume
                </Link>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Contact         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

                <Tooltip content="aharoJair@gmail.com" className="bg bg-transparent text-red-950 dark:text-white text-xs">
                <Link href="mailto:aharoJair@gmail.com" target={"_blank"}
                    className="mb-6 text-2xl font-medium capitalize 
                    hover:underline-offset-4
                    text-dark underline dark:text-light 
                    md:text-2xl xs:p-2
                ">  Contact 
                </Link> 
                </Tooltip>               
        </div>
        </>
    );
    
};

export default Resume_Contact_Buttons;
