import React from "react";
import ColorfulAharoJHover from "src/components/animation/ColorfulAharoJHover.js";
import Desktop from "./DesktopNav.js";
import Mobile from "./MobileNav.js";
import LightDarkModeSwticherIcon from "../hooks/LightDarkModeSwitcherIcon.js";

const Navbar = () => {
  return (
    <header
      className="sticky top-0 z-10 flex w-full items-center justify-between bg-white bg-opacity-50 px-0 py-0 font-medium text-dark   
        backdrop-blur-sm dark:bg-black  dark:bg-opacity-50 dark:text-light lg:px-16 md:px-6 md:py-5 "
    >
      <Desktop />
      <Mobile />
      <div className="absolute left-[50%] top-0 translate-x-[-50%]">
        <ColorfulAharoJHover />
      </div>

      <div className="hidden md:absolute md:left-[85%] md:top-0 md:inline-block md:translate-x-[-50%]">
        <LightDarkModeSwticherIcon />
      </div>
    </header>
  );
};

export default Navbar;
