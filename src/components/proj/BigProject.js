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
      className="relative flex w-full  items-center
        rounded-3xl border border-solid border-dark bg-light p-4 dark:border-light dark:bg-dark
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
          <div className="ml-6 flex flex-wrap justify-start space-x-4">
            {hashtags.map((tag, index) => (
              <span
                key={index}
                className="text-2xl font-light  text-dark/80 dark:text-light/80"
              >
                #{tag}
              </span>
            ))}
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Title | Description         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <div className="ml-6 flex w-auto flex-row ">
            <div className="w-1/2">
              <Link href={link} target="_blank">
                <h2 className="my-2 text-left text-7xl font-semibold  text-gray-400 hover:underline dark:text-orange-200 sm:text-sm">
                  {title}
                </h2>
              </Link>
            </div>
            <div className="w-1/2">
              <div className="mx-6 mt-6 flex items-center  justify-end space-x-4">
                <Link href={github} target="_blank" className="w-12">
                  <GithubIcon />
                </Link>
                <Link
                  href={link}
                  target="_blank"
                  className="rounded-lg bg-dark p-2 text-2xl font-semibold text-light 
                dark:bg-light dark:text-dark"
                >
                  Visit Project
                </Link>
              </div>
            </div>
          </div>
          <p className="my-2 px-6  text-2xl font-normal text-dark/80 dark:text-light sm:text-sm">
            {description}
          </p>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Icon | Visit Project         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        </div>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
      </div>
    </article>
  );
};

export default BigProject;
