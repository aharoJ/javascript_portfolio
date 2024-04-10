import React from "react";
import AnimatedText from "@/components/animation/TextAnimation";
import FeaturedProject from "@/components/abstract/FeaturedProject";
import project from "public/images/projects/opensource-portfolio.png";

const LandingProject = () => {
  return (
    <>
      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       OpenSource Portfolio         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
      <AnimatedText
        text="Open Source Portfolio"
        className=" tracking mb-8 mt-3 text-6xl font-normal text-gray-400 dark:text-orange-200 sm:mb-8 sm:!text-6xl xs:!text-4xl"
      />
      <div className="grid grid-cols-12 gap-x-8 gap-y-8 md:gap-x-6 md:gap-y-10">
        <div className="col-span-12">
          <FeaturedProject
            title="Portfolio "
            img={project}
            summary="All code for the frontend is available in GitHub and all backend is available trough the a zip."
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
