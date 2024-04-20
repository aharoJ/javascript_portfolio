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

      <div className="mt-4 flex w-full justify-between">
        <h2 className="text-left text-4xl mx-6 font-semibold text-gray-400 dark:text-orange-200 lg:text-lg">
          <Link
            href={link}
            target="_blank"
            className="underline-offset-2 hover:underline"
          >
            {title}
          </Link>
        </h2>
        <div className="flex items-center space-x-8 mx-6">
          <Link href={github} target="_blank" className="w-11 ">
            <GithubIcon />
          </Link>
        </div>
      </div>

      <div className="mt-2 flex w-full flex-row flex-wrap justify-start space-x-4 ml-12">
        {hashtags.map((tag, index) => (
          <span
            key={index}
            className="text-2xl mx-0 font-normal text-dark/80 dark:text-light/80 md:text-sm md:font-light md:tracking-tighter"
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default SmallProject;
