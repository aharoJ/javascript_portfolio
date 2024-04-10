import React, { useState, useEffect } from "react";
import { SunIcon } from "../icons/SvgIcons";
import { MoonIcon } from "../icons/SvgIcons";
import useThemeSwitcher from "src/components/hooks/useThemeSwitcher";
import { motion } from "framer-motion";

const LightDarkModeSwticherIcon = ({ size, mobilesize, className = "" }) => {
  const [currentTheme, setTheme] = useThemeSwitcher();
  const [windowWidth, setWindowWidth] = useState(null); // Initialize with null

  const iconSize = windowWidth
    ? windowWidth >= 768
      ? size
      : mobilesize
    : mobilesize;

  useEffect(() => {
    setWindowWidth(window.innerWidth); // Update once on mount for initial size

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isLightMode = currentTheme === "light";

  return (
    <motion.div
      onClick={() => setTheme(isLightMode ? "dark" : "light")}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.9 }}
      className={`cursor-pointer rounded-full p-5 transition-all hover:bg-orange-800/20 dark:hover:bg-gray-700 md:p-2 ${className}`}
    >
      <motion.a className="mx-0 p-0">
        {isLightMode ? (
          <MoonIcon size={iconSize} className={`text-gray-600  mx-2 ${MoonIcon}`} />
        ) : (
          <SunIcon size={iconSize} className={`text-orange-200 mx-1.5 ${SunIcon}`} />
        )}
      </motion.a>
    </motion.div>
  );
};

export default LightDarkModeSwticherIcon;
