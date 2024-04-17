import AnimatedText from "@/components/animation/TextAnimation";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import TransitionEffect from "@/components/animation/TransitionEffect";
import apple from "public/images/projects/apple.png";
import vivaldi from "public/images/projects/vivaldi.png";
import inboxapp from "public/images/projects/inbox-app.png";
import machinelearning from "public/images/projects/machine-learning.png";
import alacritty from "public/images/projects/vim.png";
import hackingtwitter from "public/images/projects/hacking-twitter.png";
import skhd_yabai from "public/images/projects/yabai_skhd.png";
import tmux from "public/images/projects/tmux.png";
import lf from "public/images/projects/lf.png";
import starship from "public/images/projects/starship.png";
import chatgpt3 from "public/images/projects/chatgpt3.png";
import BigProject from "@/components/proj/BigProject";
import SmallProject from "@/components/proj/SmallProject";

const viewing = () => {
  return (
    <>
      <Head>
        <title> aharoJ | Projects </title>
        <meta name="Projects" content="Created by aharoJ" />
      </Head>
      <TransitionEffect />

      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Backend Dev          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <AnimatedText
            text="Backend Dev"
            className="mb-8 mt-8 text-6xl font-light sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-x-12 gap-y-8 md:gap-x-6 md:gap-y-10">
            <div className="col-span-6 sm:col-span-12">
              <SmallProject
                img={inboxapp}
                title="Inbox Application"
                github="https://github.com/aharoJ/InboxApp"
                link="https://github.com/aharoJ/InboxApp"
                hashtags={[
                  "java",
                  "spring boot",
                  "spring security",
                  "thymleaf",
                ]}
              />
            </div>
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Frontend Dev          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <AnimatedText
            text="Frontend Dev"
            className="mb-8 mt-8 text-6xl font-light sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-x-12 gap-y-8 md:gap-x-6 md:gap-y-10">
            <div className="col-span-6  sm:col-span-12">
              <SmallProject
                title="chatGPT3"
                img={chatgpt3}
                github="https://github.com/aharoJ/chatGPT3_React"
                link="https://github.com/aharoJ/chatGPT3_React"
                hashtags={["react", "html", "css", "javascript"]} // <-- Added the hashtags prop here
              />
            </div>
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Machine Learning          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <AnimatedText
            text="Machine Learning"
            className=" b-8 mt-20 text-8xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-x-12 gap-y-32 md:gap-x-6 md:gap-y-10">
            <div className="col-span-6 sm:col-span-12">
              <SmallProject
                title="Machine Learning"
                img={machinelearning}
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
          </div>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Dot Files          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
          <AnimatedText
            text="Dot Files"
            className="mb-8 mt-20 text-8xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-x-12 gap-y-8 md:gap-x-6 md:gap-y-10">
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
        </Layout>
      </main>
    </>
  );
};

export default viewing;
