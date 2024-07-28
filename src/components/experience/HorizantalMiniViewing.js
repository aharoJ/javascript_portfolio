import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FramerImage = motion(Image);
const HorizantalMiniViewing = ({ img, link }) => {
  return (
    <article
      className="relative flex w-[73%] flex-col items-center justify-center rounded-2xl border 
      border-solid border-dark bg-light p-4 dark:border-light dark:bg-dark "
    >
      <div
        className="absolute -right-2.5 top-0 -z-10 h-[101%] w-[101%] rounded-[1rem] rounded-br-3xl 
        bg-dark/80 dark:bg-light "
      />

      <Link
        href={link}
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

      <div className="mt-4 w-full self-center lg:self-center">
        <Link
          href="https://aharoj.io/all-projects"
          className="flex items-center justify-center rounded-lg border border-solid border-transparent
            bg-gray-500 p-1 text-base text-light hover:border-dark hover:bg-light
            hover:text-dark dark:bg-gray-400 hover:dark:border-light
            hover:dark:bg-light hover:dark:text-dark/80 "
        >
          <p className="text-5xl font-extrabold tracking-wide ">ALL PROJECTS</p>
        </Link>
      </div>
    </article>
  );
};

export default HorizantalMiniViewing;
