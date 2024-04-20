import React from "react";
import AnimatedText from "@/components/animation/TextAnimation";
import FeaturedProject from "@/components/abstract/FeaturedProject";
import project from "public/images/projects/opensource-portfolio.png";
import BigProject from "../proj/BigProject";

const LandingProject = () => {
  return (
    <>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       OpenSource Portfolio         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
      <AnimatedText
        text="Open Source "
        className=" tracking mb-8 mt-3 text-8xl font-normal text-gray-400 dark:text-orange-200 sm:mb-8 sm:!text-6xl xs:!text-4xl"
      />
      <div className="grid grid-cols-12 gap-x-8 gap-y-8 md:gap-x-6 md:gap-y-10">
        <div className="col-span-12">
          <BigProject
            title="Portfolio "
            img={project}
            description="Built with Next.js and styled by TailwindCSS, a custom light-dark mode switcher. 
            Dynamic UI for Iphones and Macbooks. React Icons, a custom animated SVG sun/moon toggler. 
            Motion-Framer for animations. Backed with Spring-Boot and Spring-Security and PostgreSQL for database managment. All backend is available trough a zip."
            github="https://github.com/aharoJ/portfolio"
            link="https://github.com/aharoJ/portfolio"
            hashtags={["NextJs", "Spring-Boot", "TailwindCSS", "PostgreSQL"]}
          />
        </div>
      </div>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
    </>
  );
};
export default LandingProject;
