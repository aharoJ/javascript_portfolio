import React, { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { FaSchool } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { RiOpenSourceFill } from "react-icons/ri";
import { BsFileEarmarkBinary } from "react-icons/bs";
import { FiGitCommit } from "react-icons/fi";

const AnimateNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 8000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed();
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const LoadIcon = ({ icon: Icon, value, label }) => {
  return (
    <div
      className={
        "flex flex-col items-end justify-center md:mt-8 md:items-center"
      }
    >
      <div className="flex flex-row items-center">
        {Icon && <Icon size={50} className="mr-2" />}
        <span className="inline-block text-5xl font-semibold md:text-3xl">
          <AnimateNumbers value={value} />
        </span>
      </div>

      <h2 className="text-lg font-light capitalize tracking-tight text-dark/75 dark:text-light/75 xl:text-center md:text-lg ">
        {label}
      </h2>
    </div>
  );
};

const AnimatedStats = () => {
  return (
    <div className="mb-12 mt-12 flex flex-row items-center justify-center space-x-16 md:mb-0 md:mt-0 md:flex-col md:space-x-0 ">
      <LoadIcon
        icon={BsFileEarmarkBinary}
        value={5}
        label="LANGUAGES "
        className=" ml-4 mr-4 md:ml-0 md:mr-0 md:mt-2"
      />
      <LoadIcon
        icon={RiOpenSourceFill}
        value={17}
        label="OPENSOURCE"
        className=" ml-4 mr-4 md:ml-0 md:mr-0 md:mt-2"
      />
      <LoadIcon
        icon={FaSchool}
        value={13}
        label="PARTNERSHIPS FORGED "
        className=" ml-4 mr-4 md:ml-0 md:mr-0 md:mt-2"
      />
      <LoadIcon
        icon={GiTeacher}
        value={127}
        label="STUDENTS MENTORED"
        className=" ml-4 mr-4 md:ml-0 md:mr-0 md:mt-2"
      />
      <LoadIcon
        icon={FiGitCommit}
        value={1644}
        label="CODE COMMITS"
        className=" ml-4 mr-4 md:ml-0 md:mr-0 md:mt-2"
      />
    </div>
  );
};

export default AnimatedStats;
