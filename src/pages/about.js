import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import TransitionEffect from "@/components/animation/TransitionEffect";
import CoreSkills from "../components/CoreSkills";
import DoughnutChart from "@/components/abstract/DoughnutChart";
import Timeline from "@/components/experience/TimeLine";
import TabsLanguageSkills from "@/components/abstract/TabsLanguageSkills";
import VerticalSelfie from "@/components/experience/VerticalSelfie";
import TextAnimation from "@/components/animation/TextAnimation";

const About = () => {
  return (
    <>
      <Head>
        <title>aharoJ | About</title>
        <meta name="description" content="Created by aharoJ" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full text-dark dark:text-light">
        <Layout className="p-0 lg:p-24 md:pt-16 sm:pt-8">
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       SELFIE | DOUGHNUT          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <div className="flex w-full">
            <div className="flex w-[40%] justify-start md:hidden ">
              <VerticalSelfie />
            </div>

            <div className="flex w-[60%] flex-row items-center p-0 md:hidden ">
              <div className="w-[40%] items-start justify-start flex flex-col">
                <TextAnimation
                  text="SKILLS LANGUAGES FRAMEWORKS DATABASES LIBRARIES "
                  className=" w-full flex flex-col justify-start  text-6xl font-light capitalize tracking-tight 
                    text-gray-400 dark:text-orange-200  md:mb-8 md:hidden md:text-4xl md:font-light md:!normal-case"
                />
              </div>
              <div className="w-[60%] ">
                <DoughnutChart />
              </div>
            </div>
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       iPHONE: SELFIE | DOUGHNUT          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <div className="hidden lg:hidden md:flex md:w-[100%] md:flex-col">
            <VerticalSelfie />
          </div>
          <div className="hidden lg:hidden md:mb-8 md:flex md:w-[100%] md:flex-col">
            <DoughnutChart />
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       LANGUAGE TABS         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <div className="mt-12 flex w-[100%] justify-evenly md:hidden ">
            <TabsLanguageSkills />
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       TIMELINE          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <Timeline />
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       CORESKILLS          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <CoreSkills />
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        </Layout>
      </main>
    </>
  );
};
export default About;
