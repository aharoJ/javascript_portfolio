import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import useThemeSwitcher from 'src/components/hooks/useThemeSwitcher';
import { motion } from 'framer-motion';

const MoonSonIcon = ({ size, mobilesize, className = "", suncolor, mooncolor =""}) => {
    const [currentTheme, setTheme] = useThemeSwitcher();
    const [windowWidth, setWindowWidth] = useState(null);  // Initialize with null

    const iconSize = windowWidth ? (windowWidth >= 768 ? size : mobilesize) : mobilesize;

    useEffect(() => {
        setWindowWidth(window.innerWidth);  // Update once on mount for initial size

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isLightMode = currentTheme === "light";

    return (
        <motion.div 
            onClick={() => setTheme(isLightMode ? "dark" : "light")} 
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.3 }}
            className={`cursor-pointer p-5 md:p-2 rounded-full hover:bg-orange-800/20 dark:hover:bg-gray-700 transition-all ${className}`}
        >
            <motion.a className="mx-0 p-0">
                {
                    isLightMode
                        ? <FaSun size={iconSize} className={`text-gray-600 ${suncolor}` } />
                        : <FaMoon size={iconSize} className={`text-orange-200 ${mooncolor}` } />
                }
            </motion.a>
        </motion.div>
    );
};

export default MoonSonIcon;
