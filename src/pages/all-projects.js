import AnimatedText from "@/components/animation/TextAnimation";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import TransitionEffect from "@/components/animation/TransitionEffect";
import apple from "public/images/projects/apple.png";
import vivaldi from "public/images/projects/vivaldi.png";
import alacritty from "public/images/projects/vim.png";
import skhd_yabai from "public/images/projects/yabai_skhd.png";
import tmux from "public/images/projects/tmux.png";
import lf from "public/images/projects/lf.png";
import starship from "public/images/projects/starship.png";
import SmallProject from "@/components/proj/SmallProject";
import notebook from "public/images/projects/notebook.png";
import twiter from "public/images/projects/twitter.png";
import threeD from "public/images/projects/3D-Portfolio.png";
import ems from "public/images/projects/ems.png";
import gpt3 from "public/images/projects/gpt3.png";

const allprojects = () => {
  return (
    <>
      <Head>
        <title> aharoJ | Projects </title>
        <meta name="Projects" content="Created by aharoJ" />
      </Head>
      <TransitionEffect />

      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       WEB APPS          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <AnimatedText
            text="WEB APPS"
            className="mb-16 text-8xl text-gray-400 dark:text-orange-200 sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-x-12 gap-y-28 md:gap-x-6 md:gap-y-10">
            <div className="col-span-6 sm:col-span-12">
              <SmallProject
                img={twiter}
                title="Twitter"
                github="https://github.com/aharoJ/Twitter"
                link="https://github.com/aharoJ/Twitter"
                hashtags={["Java", "Spring", "React", "Typescript", "HTML&CSS"]}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <SmallProject
                title="3D Portfolio"
                img={threeD}
                github="https://github.com/aharoJ/3D-Portfolio"
                link="https://github.com/aharoJ/3D-Portfolio"
                hashtags={["React", "Tailwindcss", "Javascript", "Vite"]}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <SmallProject
                img={ems}
                title="EmployeeTracker"
                github="https://github.com/aharoJ/EmployeeManagementSystemApp"
                link="https://github.com/aharoJ/EmployeeManagementSystemApp"
                hashtags={["Java", "Spring", "Vite", "React", "Tailwindcss"]}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <SmallProject
                title="Apple"
                img={apple}
                github="https://github.com/aharoJ/Apple"
                link="https://github.com/aharoJ/Apple"
                hashtags={["React", "HTML&CSS", "Typescript", "Sanity"]}
              />
            </div>
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~         DOT FILES          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <AnimatedText
            text="DOT FILES"
            className="my-24 text-8xl text-gray-400 dark:text-orange-200 sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-x-12 gap-y-28 md:gap-x-6 md:gap-y-10">
            <div className="col-span-6 sm:col-span-12">
              <SmallProject
                title="yabai-skhd-config"
                img={skhd_yabai}
                github="https://github.com/aharoJ/yabai-skhd-config"
                link="https://github.com/aharoJ/yabai-skhd-config"
                hashtags={[
                  "hacking MacOS",
                  "shell scripting",
                  "skhd-config",
                  "yabai-config",
                ]}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <SmallProject
                title="tmux-config"
                img={tmux}
                github="https://github.com/aharoJ/tmux-config"
                link="https://github.com/aharoJ/tmux-config"
                hashtags={["handcrafted design", "catppuccin", "tmux-config"]}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <SmallProject
                title="lf-config"
                img={lf}
                github="https://github.com/aharoJ/lf-config"
                link="https://github.com/aharoJ/lf-config"
                hashtags={[
                  "shell scripting",
                  "custom Scripts",
                  "kitty-config",
                  "lf-config",
                ]}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <SmallProject
                title="starship-config"
                img={starship}
                github="https://github.com/aharoJ/starship-config"
                link="https://github.com/aharoJ/starship-config"
                hashtags={[
                  "custom toml file",
                  "hand-picked colors",
                  "timezone",
                  "starship-config",
                ]}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <SmallProject
                title="vivaldi-config"
                img={vivaldi}
                summary="My open-sourced Vivaldi, designed with the goal of maximizing productivity for tech-savvy users and programmers. 
                    This theme seeks balance and sleek design will reduce eye strain for those who spend hours in front of the screen. For developers and power users to navigate the browser with ease."
                github="https://github.com/aharoJ/vivaldi-config"
                link="https://themes.vivaldi.net/themes/nV6vpPxDvdN"
                hashtags={["custom binds", "hotkeys", "vialdi-config"]}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <SmallProject
                title="alacritty-config"
                img={alacritty}
                github="https://github.com/aharoJ/alacritty-config"
                link="https://github.com/aharoJ/alacritty-config"
                hashtags={[
                  "terminal emulator",
                  "yalm file",
                  "alacritty-config",
                ]}
              />
            </div>
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Machine Learning          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <AnimatedText
            text="MACHINE LEARNING"
            className="my-24 text-8xl text-gray-400 dark:text-orange-200 sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-x-12 gap-y-24 md:gap-x-6 md:gap-y-10">
            <div className="col-span-6 sm:col-span-12">
              <SmallProject
                title="Machine Learning"
                img={notebook}
                summary="Over 8,000 lines of markdown notes on Artificial Intelligence, Capstone Project, Code, Documentation and more..,"
                github="https://github.com/aharoJ/opensource/tree/main/machine-learning"
                link="https://github.com/aharoJ/opensource/tree/main/machine-learning"
                hashtags={[
                  "ai",
                  "machine learning",
                  "capstone",
                  "deep learning",
                  "jupyter",
                ]}
              />
            </div>
            {/* UPDATE HERE  */}
            <div className="col-span-6 sm:col-span-12">
              <SmallProject
                title="chatGPT3"
                img={gpt3}
                github="https://github.com/aharoJ/chatGPT3"
                link="https://github.com/aharoJ/chatGPT3"
                hashtags={["react", "html", "css", "javascript", "ml"]}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default allprojects;
