import React, { useRef } from "react";
import { motion } from "framer-motion";
import ScrollTimeLineAnimation from "src/components/animation/ScrollTimeLineAnimation.js";

const EducationInfo = ({ degree, school_name, bullets, description }) => {
  const listItemRef = useRef(null);
  return (
    <li
      ref={listItemRef}
      className="my-2 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <ScrollTimeLineAnimation reference={listItemRef} />

      <motion.div
        initial={{ y: 58, x: 0 }}
        whileInView={{ y: 0, x: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <h1 className="font-normal ml-4 text-2xl text-black/80 dark:text-white md:text-xl">
          {degree}&nbsp;
          <span className="text-2xl font-light tracking-wide md:text-xl text-dark/80 dark:text-light/80">
            @{school_name}
          </span>
        </h1>

        {bullets && (
          <ul className="list-disc mt-2">
            {bullets.map((bullet, index) => (
              <li
                className="ml-4 text-lg font-normal  dark:text-light text-dark/80 md:text-base"
                key={index}
              >
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {description && (
          <p className="mt-2 ml-4 text-lg font-normal dark:text-light text-dark/80 md:text-base">
            {description}
          </p>
        )}
      </motion.div>
    </li>
  );
};

export default EducationInfo;
