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
      whileTap={{ scale: 0.3 }}
      className={`cursor-pointer rounded-full p-3 transition-all hover:bg-gray-200 dark:hover:bg-gray-700 md:p-2 ${className}`}
    >
      <motion.a className="mx-0 p-0">
        {isLightMode ? (
          <MoonIcon
            size={iconSize}
            className={`mx-1.5 text-gray-600 ${MoonIcon}`}
          />
        ) : (
          <SunIcon
            size={iconSize}
            className={`mx-1 text-orange-200 ${SunIcon}`}
          />
        )}
      </motion.a>
    </motion.div>
  );
};

export default LightDarkModeSwticherIcon;
