import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import TransitionEffect from "@/components/animation/TransitionEffect";
import CoreSkills from "../components/CoreSkills";
import Selfie from "@/components/experience/Selfie";
import DoughnutChart from "@/components/abstract/DoughnutChart";
import Timeline from "@/components/experience/TimeLine";
import TabsLanguageSkills from "@/components/abstract/TabsLanguageSkills";

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
            <div className="flex w-2/5 justify-center p-2  ">
              <Selfie />
            </div>
            <div className="flex w-3/5 items-center p-2">
              <DoughnutChart />
            </div>
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       LANGUAGE TABS         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <div className="mt-12 flex w-[100%] md:hidden ">
            {/* <HorizontalTabsWithIcon /> */}
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
