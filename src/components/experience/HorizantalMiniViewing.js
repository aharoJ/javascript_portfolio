import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FramerImage = motion(Image);
const HorizantalMiniViewing = ({ img, link }) => {
  return (
    <article
      className="relative flex w-[63%] flex-col items-center justify-center rounded-2xl border 
      border-solid border-dark bg-light p-6 dark:border-light dark:bg-dark md:p-2"
    >
      <div
        className="absolute -right-2.5 top-0 -z-10 h-[101%] w-[101%] rounded-[1rem] rounded-br-3xl 
        bg-dark/80 dark:bg-light md:h-[102%] md:w-[101%] md:rounded-br-xl"
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
          href="https://aharoj.io/viewing"
          className="flex items-center justify-center rounded-lg border border-solid border-transparent
            bg-gray-800 p-1 text-base text-light hover:border-dark hover:bg-light
            hover:text-dark dark:bg-gray-400 hover:dark:border-light
            hover:dark:bg-light hover:dark:text-dark/80 md:mx-4
            md:p-2 xs:p-0.5 xs:text-sm"
        >
          <p className="text-5xl font-extrabold tracking-wide ">
            VISIT All PROJECTS
          </p>
        </Link>
      </div>
    </article>
  );
};

export default HorizantalMiniViewing;