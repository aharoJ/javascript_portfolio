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
import LanguageTabs from "@/components/tabs/LanguageTabs";
import WrapperLanguageTabs from "@/components/tabs/WrapperLanguageTabs";

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
            <div className="flex w-[30%] justify-start md:hidden ">
              <VerticalSelfie />
            </div>

            <div className="mx-2 flex w-[70%] flex-row items-center md:hidden ">
              <div className="flex w-[40%] flex-col items-center justify-start">
                <TextAnimation
                  text="SKILLS LANGUAGES FRAMEWORKS DATABASES LIBRARIES "
                  className=" flex w-full flex-col justify-start  text-6xl font-light capitalize tracking-tight 
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
          <div className="deskttop-LanguageTabs mt-12 flex w-[100%] justify-evenly md:hidden ">
            <LanguageTabs />
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       iPHONE PROJECTS          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <div className="iPhone-LanguageTabs hidden md:block">
            <WrapperLanguageTabs />
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
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
