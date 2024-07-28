import React from "react";
import { GithubIcon } from "../icons/SvgIcons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FramerImage = motion(Image);
const SmallProject = ({ title, img, link, github, hashtags = [] }) => {
  return (
    <article className="relative flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-4 dark:border-light dark:bg-dark md:p-2">
      <div className="absolute -right-2 top-0 -z-10 h-[101%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light md:h-[102%] md:w-[101%] md:rounded-br-xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt="Project Image"
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="mt-4 flex w-full justify-between md:mt-0 md:justify-center">
        <h2 className="mx-6 text-left text-4xl font-semibold text-gray-400 dark:text-orange-200 md:mx-4 md:text-2xl">
          <Link
            href={link}
            target="_blank"
            className="underline-offset-2 hover:underline"
          >
            {title}
          </Link>
        </h2>
        <div className="mx-6 flex items-center space-x-8 md:mx-0">
          <Link href={github} target="_blank" className="w-11 md:w-7 ">
            <GithubIcon />
          </Link>
        </div>
      </div>

      <div className="ml-12 mt-2 flex w-full flex-row flex-wrap justify-start space-x-4 md:ml-0 md:mt-0 md:space-x-2">
        {hashtags.map((tag, index) => (
          <span
            key={index}
            className="mx-0 text-2xl font-normal text-dark/80 dark:text-light/80 md:flex-wrap md:text-sm md:font-normal md:tracking-tighter"
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default SmallProject;
