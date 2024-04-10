import React from "react";
import { GithubIcon } from "../icons/SvgIcons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

{
  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~        Framer Image        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */
}
const FramerImage = motion(Image);
{
  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~        FeaturedProject        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */
}
const FeaturedProject = ({
  hashtags = [],
  title,
  summary,
  img,
  link,
  github,
}) => {
  return (
    <article
      className="relative flex w-full items-center justify-between 
            rounded-3xl border border-solid border-dark bg-light p-2 dark:border-light dark:bg-dark
            lg:flex-col  md:rounded-2xl md:rounded-br-3xl md:p-1"
    >
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~        LEFT SIDE |        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
      <div className="flex w-1/2 p-1 md:w-full ">
        <div
          className="absolute -right-3 top-0 -z-10 h-[101%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
                dark:bg-light sm:h-[102%] xs:-right-2 xs:w-full xs:rounded-[1.5rem]"
        />

        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
          <FramerImage
            src={img}
            alt={title}
            className="h-auto w-full"
            priority
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw"
          />
        </Link>
      </div>

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~         | RIGHT SIDE        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
      <div className="flex w-1/2 flex-col p-5 md:w-full  ">
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~         HashMap        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        <div className="flex flex-row justify-start md:w-full">
          <div className="flex flex-wrap items-start justify-end space-x-4 md:hidden">
            {hashtags.map((tag, index) => (
              <span
                key={index}
                className="text-xl font-light text-dark/80 dark:text-light/80
                            md:text-sm md:font-light md:tracking-tighter"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~         Title        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        <div className="flex flex-col items-start md:w-full  ">
          <Link
            href={link}
            target="_blank"
            className="underline-offset-2 hover:underline"
          >
            <h2
              className="w-full p-0 text-left text-5xl font-semibold text-gray-400 dark:text-orange-200 md:my-0
                            md:text-2xl md:font-light md:tracking-tight"
            >
              {title}
            </h2>
          </Link>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~         Summary        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <p className="my-0 text-xl font-light text-dark dark:text-light md:my-0 sm:text-sm">
            {summary}
          </p>
        </div>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~         GitIcon | Vist        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        <div className="flex items-center justify-end">
          <Link href={github} target="_blank" className="mx-8 w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark px-3 py-1 text-lg 
                        tracking-widest text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
export default FeaturedProject;
