import AnimatedText from "@/components/animation/TextAnimation";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import TransitionEffect from "@/components/animation/TransitionEffect";
import BigProject from "@/components/proj/BigProject";
import HorizantalMiniViewing from "@/components/experience/HorizantalMiniViewing";
import alacritty from "public/images/projects/alacritty.png";
import TextAnimation from "@/components/animation/TextAnimation";
import notebook from "public/images/projects/notebook.png";
import twiter from "public/images/projects/twitter.png";

const Projects = () => {
  return (
    <>
      <Head>
        <title> aharoJ | Projects </title>
        <meta name="Projects" content="Created by aharoJ" />
      </Head>
      <TransitionEffect />

      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Full Stack        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <AnimatedText
            text="Featured Projects"
            className="mb-16 text-8xl text-gray-400 dark:text-orange-200 sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-x-8 gap-y-28  md:gap-x-6 md:gap-y-10">
            <div className="col-span-12">
              <BigProject
                title="Twitter"
                img={twiter}
                description="A Solo Project using full stack development. For the tech stack we are using Java, Spring Boot, Spring Security, and Postman for backend stability. Managing credentians, forms, logins, signs with PostgreSQL for robust data management. For the frontend we are using TypeScript with React with vanilla html and css for an interactive UI experience."
                github="https://github.com/aharoJ/twitter-clone"
                link="https://github.com/aharoJ/twitter"
                hashtags={[
                  "Twitter",
                  "Spring",
                  "Java",
                  "React",
                  "Typescript",
                  "PostgreSQL",
                ]}
              />
            </div>
            <div className="col-span-12">
              <BigProject
                title="MyNotebook"
                img={notebook}
                description=" Python notebooks for data analysis with Numpy and Pandas.
                  Data visualization samples using Matplotlib and Seaborn.Projects like a neural network for BRDF reflectance prediction, 
                  an end-to-end machine learning workflow, and a model for house price prediction. 
                  Available for enhanced viewing with Obsidian for a more interactive experience."
                github="https://github.com/aharoJ/Apple_Re-design"
                link="https://github.com/aharoJ/JupyterNotebook"
                hashtags={[
                  "MachineLearning",
                  "NeuralNetworks",
                  "PredictiveModeling",
                  "DL",
                ]}
              />
            </div>
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       NEW DIV          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <div className="mt-36 flex w-full">
            <div className="flex w-auto justify-center md:hidden ">
              <HorizantalMiniViewing
                img={alacritty}
                link="https://aharoj.io/all-projects"
              />
            </div>
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        </Layout>
      </main>
    </>
  );
};

export default Projects;
