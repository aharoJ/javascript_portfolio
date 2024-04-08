import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute flex cursor-pointer items-center justify-center rounded-full bg-dark
    px-6 py-3 font-semibold text-light shadow-dark  dark:bg-light dark:text-dark 
    lg:px-4 lg:py-2 md:px-3 md:py-1.5 md:text-sm 
    xs:bg-dark xs:p-[0.1rem]
    xs:text-xs xs:font-medium
     xs:tracking-tight  xs:text-light xs:dark:bg-light xs:dark:text-dark
    "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 2.5 } }}
      // transition={{duration:2.5,  }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const CoreSkills = () => {
  return (
    <>
      <h2 className="mt-16 w-full text-center text-5xl font-light tracking-tight text-gray-400 dark:text-orange-200 md:mt-16 md:text-6xl">
        Core Skills
      </h2>
      <div
        className="relative flex h-screen w-full items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] lg:bg-circularLightLg
      lg:dark:bg-circularDarkLg md:h-[40vh]
      md:bg-circularLightSm sm:dark:bg-circularDarkSm
      
      "
      >
        <motion.div
          className="flex cursor-pointer items-center justify-center rounded-full bg-dark p-8 
        font-semibold text-light shadow-dark dark:bg-light dark:text-dark 
        lg:p-6 md:p-4
        xs:p-[0.1rem] xs:text-xs xs:font-medium
        "
          whileHover={{ scale: 1.05 }}
        >
          Core
        </motion.div>
        <Skill name="Java" x="0vw" y="-10vw" />
        <Skill name="Python" x="0vw" y="10vw" />
        <Skill name="Shell" x="13vw" y="0vw" />
        <Skill name="DSA" x="-13vw" y="0vw" />

        <Skill name="ML" x="10vw" y="-13vw" />
        <Skill name="DL" x="-10vw" y="13vw" />
        <Skill name="Js" x="10vw" y="13vw" />
        <Skill name="Ts" x="-10vw" y="-13vw" />

        <Skill name="Spring-Boot" x="0vw" y="-20vw" />
        <Skill name="Pitest" x="18vw" y="-20vw" />
        <Skill name="LittleDarwin" x="-18vw" y="-20vw" />

        <Skill name="Hacking" x="-26vw" y="-14vw" />
        <Skill name="Dot-configs" x="30vw" y="-14vw" />
        <Skill name="Django" x="0vw" y="20vw" />

        <Skill name="Databases" x="-30vw" y="2vw" />
        <Skill name="MySQL" x="-26vw" y="13vw" />
        <Skill name="NoSQL" x="-18vw" y="20vw" />

        <Skill name="Design Pattern" x="30vw" y="2vw" />
        <Skill name="React" x="18vw" y="20vw" />
        <Skill name="Next.js" x="28vw" y="13vw" />
      </div>
    </>
  );
};

export default CoreSkills;
