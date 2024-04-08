import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import ExperienceInfo from "../abstract/ExperienceInfo";
import EducationInfo from "../abstract/EducationInfo";

const Timeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="container-for-experience">
      <h2 className="mb-6 mt-6 w-full text-center text-5xl font-light tracking-tight text-gray-400 dark:text-orange-200 md:text-2xl">
        Education
      </h2>

      <div ref={ref} className="relative mx-auto w-full md:w-full">
        <motion.div
          className="absolute left-9 top-0 h-full w-[4px] origin-top
            bg-dark dark:bg-light 
            md:left-[18px] md:w-[3px] "
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="ml-4 flex w-full flex-col items-start justify-between md:ml-2">
          <EducationInfo
            degree="Bachelor of Science, Computer Science"
            school_name="California State University, Dominguez Hills"
            companyLink="#"
            bullets={[
              "Introduction to Computer Science and Programming I, Introduction to Computer Science and Programming II, IOS Programming, Software Development, Assembly and Introduction to Computer Organization, Discrete Structures, Applied Data Structures, Careers in Tech, Data Structures, Computer Organization, Machine Learning, Analysis of Algorithms, Programming Languages.",
            ]}
            // description={
            //   "Introduction to Computer Science and Programming I, Introduction to Computer Science and Programming II, IOS Programming, Software Development, Assembly and Introduction to Computer Organization, Discrete Structures, Applied Data Structures, Careers in Tech, Data Structures, Computer Organization, Machine Learning, Analysis of Algorithms, Programming Languages"
            // }
          />

          <h2 className="mb-6 mt-6 w-full text-center text-5xl font-light tracking-tight text-gray-400 dark:text-orange-200 md:text-2xl">
            Experience
          </h2>

          <ExperienceInfo
            title="Research Development Software Engineer"
            company="Google exploreCSR"
            time="Jan, 2023 - Present"
            address="Los Angeles, California"
            bullets={[
              "Researched Professor Umesh Vazirani's teachings to better understand the basics of quantum computing and its software applications, including hands-on work with Cirq. Moved on to machine learning, building a deep neural network without any libraries.Wrapped up by researching into how to create comprehensive software from start to finish.",
            ]}
          />

          {/* Local Research Experiences for Undergraduates */}
          <ExperienceInfo
            title="Software Development Engineer in Test (SDET)"
            company="Local Research Experiences for Undergraduates"
            companyLink="#"
            time="Feb 2023 - Oct 2023"
            address="Union, New Jersey (remote)"
            bullets={[
              "Investigated the effectiveness of mutation testing to evaluate software test quality, leveraging the Little Darwin framework and Pitest to explore the impact of test suite sizes and mutation operator variety on mutation scores, aiming to strengthen software robustness and uncover deeper insights into test suite coverage.",
            ]}
          />

          <ExperienceInfo
            title="Software Engineer Intern"
            company="Turner Fairbank Highway Research Center"
            companyLink="#"
            time="May 2023 - Aug 2023"
            address="McLean, Virginia"
            bullets={[
              "Contributed to open-source projects for driving automation at Turner Fairbank Highway Research Center, enhancing simulation tools and streamlining development processes to advance the future of autonomous driving. Streamlined software development processes by optimizing Python dependencies with Docker and automating tasks, which ultimately led to faster and more efficient deployment cycles.",
            ]}
          />

          <ExperienceInfo
            title="Lead Computer Science Scholar"
            company="CSUDH Coding Club"
            companyLink="https://csudh.edu"
            time="Aug 2021 - Sept 2023"
            address="Los Angeles, California"
            bullets={[
              "Led transformative STEM education initiatives at CSUDH Coding Club, significantly boosting student engagement and proficiency in technology across underserved districts. My efforts focused on developing and delivering dynamic Swift, JavaScript, Robotics, and the Apple Education curriculum training; expanded a pivotal program from 3 to 13 schools.",
            ]}
          />

          <ul className="ml-4 flex w-full flex-col items-start justify-between xs:ml-2">
            <ExperienceInfo
              title="Lead Mobile Expert"
              company="T-Mobile"
              time="Feb 2019 - Jun 2021"
              address="Los Angeles, California, United States"
              bullets={[
                "Lead  T-Mobile team's effectiveness and significantly grew store revenue by leading initiatives in sales and customer service, resulting in a remarkable 139% surge in meeting monthly goals alongside elevated customer satisfaction levels, ensuring top-tier service and creating strong lasting customer relationships.",
              ]}
            />

            <ExperienceInfo
              title="Lead Server"
              company="Marisa's Mexican Restaurant"
              time="Jun 2012 - Jan 2018"
              address="Downey, California, United States"
              bullets={[
                "Excelled as a lead server by mastering the menu, including daily specials, seasonal offerings, and a variety of craft beers, which enhanced guest experience and maximized gratuity earnings. Ensured exceptional customer service with a friendly demeanor in a fast-paced setting, successfully managing multiple tasks simultaneously.",
              ]}
            />
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
