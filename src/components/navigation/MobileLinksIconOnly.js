import { useRouter } from "next/router";
import React from "react";

const MobileLinksIconOnly = ({ href, icon: Icon, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} group relative my-2 text-light dark:text-dark`}
      onClick={handleClick}
    >
      {Icon && <Icon />}
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

export default MobileLinksIconOnly;
