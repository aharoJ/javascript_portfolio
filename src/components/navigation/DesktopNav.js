import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import useThemeSwitcher from "../hooks/useThemeSwitcher.js";
import SocialMediaLinks from "../icons/SocialMediaIcons";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} group relative `}>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

      {title}
      <span
        className={`
          ease absolute -bottom-0.5 left-0 inline-block h-[1px]
          bg-dark transition-[width] duration-500 group-hover:w-full
          ${router.asPath === href ? "w-full" : "w-0"}
          dark:bg-light
                `}
      >
      </span>
    </Link>
  );
};

function useForceUpdate() {
  const [value, setValue] = useState(0);
  return () => setValue(value + 1);
}

const DesktopNav = () => {
  const [mode, setMode] = useThemeSwitcher();
  const router = useRouter();
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    router.events.on("routeChangeComplete", forceUpdate);

    return () => {
      router.events.off("routeChangeComplete", forceUpdate);
    };
  }, [router.events]);

  return (
    <div
      className="flex h-full w-full items-center justify-between bg-light/10 p-1
        backdrop-blur-md dark:bg-dark/50 dark:backdrop-blur-md lg:hidden
        "
    >
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Home About           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
      <nav>
        <CustomLink href="/" title="Home" className="mx-4 text-2xl" />
        <CustomLink href="/about" title="About" className="mx-4 text-2xl" />
        <CustomLink href="/featured" title="Featured" className="mx-4 text-2xl" />
        <CustomLink href="/projects" title="Projects" className="mx-4 text-2xl" />
      </nav>

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ICONS for Desktop          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
      <nav className="flex items-center justify-center">
        <SocialMediaLinks size={30} />{" "}
      </nav>
    </div>
  );
};

export default DesktopNav;
