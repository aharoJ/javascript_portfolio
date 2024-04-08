import React, { useRef } from "react";
import { motion } from "framer-motion";
import ScrollTimeLineAnimation from "src/components/animation/ScrollTimeLineAnimation.js";

const ExperienceInfo = ({ title, company, bullets }) => {
  const listItemRef = useRef(null);
  return (
    <li
      ref={listItemRef}
      className="mx-auto mb-12 flex w-[90%] flex-col items-center justify-between first:mt-0 last:mb-0 md:w-[80%]"
    >
      <ScrollTimeLineAnimation reference={listItemRef} />

      <motion.div
        initial={{ y: 58, x: 0 }}
        whileInView={{ y: 0, x: 0 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        <h1 className="ml-4 text-2xl font-normal text-black/80 dark:text-white md:text-xl">
          {title}&nbsp;
          <span className="text-2xl font-light tracking-wide text-dark/80 dark:text-light/80 md:text-xl">
            @{company}
          </span>
        </h1>

        {bullets && (
          <ul className="mt-2 list-disc">
            {bullets.map((bullet, index) => (
              <li
                className="ml-4 mt-2 text-xl font-normal text-dark/80 dark:text-light md:text-base"
                key={index}
              >
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </li>
  );
};

export default ExperienceInfo;
