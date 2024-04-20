import { GithubIcon } from "../icons/SvgIcons";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const FramerImage = motion(Image);
const FeaturedMobileProject = ({
  hashtags = [],
  title,
  description,
  img,
  link,
  github,
}) => {
  return (
    <article
      className="relative flex w-full  items-center
        rounded-3xl border border-solid border-dark bg-light p-4 dark:border-light dark:bg-dark
        md:rounded-2xl md:rounded-br-3xl md:p-4"
    >
      <div
        className="absolute -right-3 top-0 -z-10 h-[101%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
          dark:bg-light md:-right-2 md:h-[102%] md:w-full md:rounded-[1.5rem]"
      />

      <div className="flex w-full flex-col ">
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       IMAGE         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        <Link
          href={link}
          target="_blank"
          className="w-auto cursor-pointer overflow-hidden rounded-lg lg:w-full"
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
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       CONTENT         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        <div className="flex w-[50%] flex-col md:w-full">
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       TAGS         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <div className="flex flex-wrap justify-start space-x-4">
            {hashtags.map((tag, index) => (
              <span
                key={index}
                className="text-sm font-light text-dark/80 dark:text-light/80"
              >
                #{tag}
              </span>
            ))}
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Title | Description         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <div className="flex w-auto flex-row items-center justify-center space-x-6">
            <Link href={link} target="_blank">
              <h2 className="my-2 text-left text-xl font-semibold text-gray-400 hover:underline dark:text-orange-200 ">
                {title}
              </h2>
            </Link>
            <Link href={github} target="_blank" className="w-6">
              <GithubIcon />
            </Link>
          </div>
          <p className="truncate text-sm font-normal text-dark/80 dark:text-light ">
            {description}
          </p>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Icon | Visit Project         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        </div>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
      </div>
    </article>
  );
};

export default FeaturedMobileProject;
