import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion";
import useThemeSwitcher from "../hooks/useThemeSwitcher";

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} group relative my-4 text-light dark:text-dark`}
      onClick={handleClick}
    >
      {" "}
      {title}
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Hover          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
      <span
        className={`
                ease absolute -bottom-0 left-0
                inline-block h-[1px] bg-orange-200
                transition-[width] duration-500 group-hover:w-full dark:bg-gray-400
                ${router.asPath === href ? "w-3/5" : "w-0"}
                `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const MobileNav = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Hambuerger           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
      <button
        className=" hidden flex-col items-center justify-center lg:flex"
        onClick={handleClick}
      >
        <span
          className={` block h-1 w-10 rounded-sm bg-dark transition-all duration-500 ease-out dark:bg-light ${isOpen ? "translate-y-1 rotate-45" : "translate-y-0.5"}`}
        ></span>
        <span
          className={` block h-1 w-10 rounded-sm bg-dark transition-all duration-500 ease-out dark:bg-light ${isOpen ? "opacity-0" : "-translate-y-4"}`}
        ></span>
        <span
          className={` block h-1 w-10 rounded-sm bg-dark transition-all duration-500 ease-out dark:bg-light ${isOpen ? "-translate-y-1 -rotate-45" : "translate-y-2"}`}
        ></span>
      </button>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       CONTAINER [  ]          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className=" dark:bg-darl/70 fixed left-1/2 top-96 z-30 flex min-w-[70vw] -translate-x-1/2 -translate-y-1/2 
            flex-col items-center justify-between rounded-3xl
            bg-dark/70 backdrop-blur-sm dark:backdrop-blur-sm "
        >
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       container [ ]          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <div className="grid grid-cols-12 gap-x-7 gap-y-2 px-10">
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Home About Project          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
            <div className="col-span-12 pb-0">
              <nav className="flex flex-row items-center justify-center">
                <CustomMobileLink
                  href="/"
                  title="Home"
                  className="px-5 text-xl font-medium tracking-tight !text-gray-400 dark:!text-orange-200"
                  toggle={handleClick}
                />
                <CustomMobileLink
                  href="/about"
                  title="About"
                  className="px-5 text-xl font-medium tracking-tight !text-gray-400 dark:!text-orange-200"
                  toggle={handleClick}
                />
                <CustomMobileLink
                  href="/projects"
                  title="Projects"
                  className="px-5 text-xl font-medium tracking-tight !text-gray-400 dark:!text-orange-200"
                  toggle={handleClick}
                />

                {/* Close Icon */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 4 }}
                  onClick={handleClick}
                  className="text-md px-5 font-extrabold  tracking-tighter text-red-400/80 hover:bg-opacity-80 "
                >
                  EXIT
                </motion.button>
              </nav>
            </div>

            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ICONS          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
            {/* <div className="col-span-12"> */}
            {/*   <nav className="items-row flex flex-row justify-between"> */}
            {/*     <SocialMediaLinks */}
            {/*       mobilesize={25} */}
            {/*       className="text-orange-200 dark:!text-gray-400" */}
            {/*     />{" "} */}
            {/*     <MoonSunIcon */}
            {/*       mobilesize={25} */}
            {/*       className="md:ml-2" */}
            {/*       suncolor="!text-orange-200" */}
            {/*       mooncolor="!text-gray-400" */}
            {/*     /> */}
            {/*   </nav> */}
            {/* </div> */}
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default MobileNav;
