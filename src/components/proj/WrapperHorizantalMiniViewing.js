import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FramerImage = motion(Image);
const WrapperHorizantalMiniViewing = ({ img, link }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl border 
      border-solid border-dark bg-light p-1 dark:border-light dark:bg-dark "
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

      <div className="mt-0 w-full self-center ">
        <Link
          href="https://aharoj.io/projects"
          className="flex items-center justify-center rounded-lg border border-solid border-transparent
            p-0 text-dark dark:text-light"
        >
          <p className="text-2xl font-extrabold tracking-wide hover:underline ">
            ALL PROJECTS
          </p>
        </Link>
      </div>
    </article>
  );
};

export default WrapperHorizantalMiniViewing;
