import React from "react";
import Layout from "./Layout";
import SocialMediaLinks from "./icons/SocialMediaIcons";
import LightDarkIcon from "./icons/MoonSunIcon";

const Footer = () => {
  const handleScrollToTop = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to top
    });
  };

  return (
    <footer
      className="w-full border-t-4 border-solid border-gray-400 p-0  text-lg
  font-medium dark:border-orange-200 dark:text-light lg:text-2xl md:text-base"
    >
      <Layout className="flex items-center justify-between p-2 md:flex-col md:p-0">
        <span className="pl-2 font-thin lg:pl-0 md:whitespace-nowrap md:pl-0 md:pt-0 md:text-xs">
          {" "}
          {new Date().getFullYear()} &copy; All Rights Reserved.
        </span>

        <div className="flex items-center lg:pt-0 md:pt-2">
          {/* Updated "return" link */}
          <a
            href="#"
            onClick={handleScrollToTop}
            className=" font-bold tracking-wide text-gray-500 underline  decoration-wavy
                underline-offset-2 dark:text-orange-200 md:pb-2"
          >
            RETURN
          </a>
        </div>

        <nav className="flex items-center justify-center md:pb-0">
          <SocialMediaLinks size={30} mobilesize={30} className="md:pb-0" />{" "}
          {/* Optional: classname, size, mobilesize */}
          {/* <LightDarkIcon size={30} mobilesize={30} className='md:pb-0' />       {/*Optional: classname, size, mobilesize */}
        </nav>
      </Layout>
    </footer>
  );
};

export default Footer;
