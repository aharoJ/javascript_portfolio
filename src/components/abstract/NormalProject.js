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
  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~        Project         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */
}
const NormalProject = ({ title, img, link, github, hashtags = [] }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl border
        border-solid border-dark bg-light p-2 dark:border-light dark:bg-dark
        md:p-2
        "
    >
      <div
        className="md:-right-0.8 absolute -right-2 top-0 -z-10 h-[101%] w-[101%] rounded-[2.5rem]
            rounded-br-3xl  bg-dark 
            dark:bg-light md:h-[102%] md:w-[101%] md:rounded-br-xl"
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt="aharoJ"
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <Link
          href={link}
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-semibold text-gray-400 dark:text-orange-200 lg:text-lg">
            {title}
          </h2>
        </Link>

        <div className="mt-2 flex w-full items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link
              href={link}
              target="_blank"
              className="text-lg font-semibold underline underline-offset-4 dark:text-light/70 md:text-base"
            >
              Visit
            </Link>

            <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />{" "}
            </Link>
          </div>

          <div className="ml-4 flex flex-wrap justify-center space-x-2 ">
            {hashtags.map((tag, index) => (
              <span
                key={index}
                className="text-xl font-light text-dark/80 dark:text-light/80
                            md:text-sm md:font-light md:tracking-tighter 
                            "
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default NormalProject;
