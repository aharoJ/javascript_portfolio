import React from "react";
import TextAnimation from "@/components/animation/TextAnimation";
import Layout from "@/components/Layout";
import Head from "next/head";
import TransitionEffect from "@/components/animation/TransitionEffect";
import HorizantalSelfie from "@/components/experience/HorizantalSelfie";
import AnimatedStats from "@/components/animation/AnimatedStats";
import LandingProject from "@/components/experience/LandingProject";
import ResumeContactButton from "@/components/button/ResumeContactButton";
import WrapperLandingProject from "@/components/proj/WrapperLandingProject";

const Home = () => {
  const alan = `Until you make the unconscious conscious, it will direct your life and you will call it fate. You are a function of what the whole universe is doing in the same way that a wave is a function of what the whole ocean is doing. ~ Alan Watts`;
  return (
    <>
      <Head>
        <title>aharoJ | Home</title>
        <meta name="description" content="Created by aharoJ" />
      </Head>
      <TransitionEffect />

      <main className="flex min-h-screen w-full items-center text-dark dark:text-light">
        <Layout className="pt-16 md:pt-16 sm:pt-8">
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Selfie | Name | Summary | Buttons         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <div className="flex w-full md:flex-col md:items-center md:justify-center">
            <div className="w-[37%] md:w-[100%]">
              <HorizantalSelfie />
            </div>
            <div className="flex w-[63%] flex-col items-center self-center md:w-full">
              <TextAnimation
                text="Angel J. Haro"
                className="mb-2 justify-center text-9xl font-light tracking-wider text-gray-400 
                dark:text-orange-200 md:mb-8 md:flex-wrap md:text-5xl md:font-light md:!normal-case"
              />
              <div className="flex w-[90%] items-center self-center md:mb-8 md:flex-wrap">
                <p className="text-3xl font-normal md:font-light">{alan} </p>
              </div>
              <div className="my-4 flex w-[50%] md:w-[100%]">
                <ResumeContactButton />
              </div>
            </div>
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       React Icons         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <div className="container-for-stats ">
            <AnimatedStats />
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       LANDING PROJECT         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <div className="landingproject-desktop md:hidden">
            <LandingProject />
          </div>
          <div className="landingproject-iPhone hidden md:block ">
            <WrapperLandingProject />
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        </Layout>
      </main>
    </>
  );
};
export default Home;
