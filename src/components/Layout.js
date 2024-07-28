import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    // ORIGINAL
    // <div className={`w-full h-full inline-block z-0 bg-light p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8  dark:bg-black ${className}`}>
    <div
      className={`z-0 inline-block h-full w-full bg-light p-12 dark:bg-black lg:p-4  md:p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
