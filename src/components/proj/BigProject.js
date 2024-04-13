import { GithubIcon } from "../icons/SvgIcons";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const FramerImage = motion(Image);
const BigProject = ({
  hashtags = [],
  title,
  description,
  img,
  link,
  github,
}) => {
  return (
    <article
      className="relative flex w-full flex-wrap items-center
        rounded-3xl border border-solid border-dark bg-light p-2 dark:border-light dark:bg-dark
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute -right-3 top-0 -z-10 h-[101%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
          dark:bg-light sm:h-[102%] xs:-right-2 xs:w-full xs:rounded-[1.5rem]"
      />

      <div className="flex w-full">
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       IMAGE         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        <Link
          href={link}
          target="_blank"
          className="w-[50%] cursor-pointer overflow-hidden rounded-lg lg:w-full"
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
          <div className="ml-6 flex w-full justify-start">
            <div className="space-x-4 md:hidden">
              {hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="text-2xl font-normal  text-dark/80 dark:text-light/80
                  md:text-sm md:font-light md:tracking-tighter "
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Title | Description         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <div className="ml-4 flex w-full flex-col ">
            <Link
              href={link}
              target="_blank"
              className="underline-offset-2 hover:underline"
            >
              <h2 className="my-2  text-left text-8xl font-semibold text-gray-400 dark:text-orange-200 sm:text-sm">
                {title}
              </h2>
            </Link>

            <p className="my-2 flex-wrap text-3xl font-medium text-dark dark:text-light sm:text-sm">
              {description}
            </p>
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Icon | Visit Project         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <div className="mt-2 flex w-full items-center justify-end">
            <Link href={github} target="_blank" className="w-14">
              <GithubIcon />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark p-2 px-4 text-2xl font-semibold text-light 
                dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            >
              Visit the Project
            </Link>
          </div>
        </div>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
      </div>
    </article>
  );
};

export default BigProject;
