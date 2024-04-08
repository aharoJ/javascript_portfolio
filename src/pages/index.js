import React, { useRef, useEffect } from "react";
import Link from "next/link";
import TextAnimation from "@/components/animation/TextAnimation";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import TransitionEffect from "@/components/animation/TransitionEffect";
import { GithubIcon } from "../components/icons/SvgIcons";
import { motion } from "framer-motion";
import Circular from "@/components/animation/SpinningCircleAharoJ";
import {  FaSchool } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import ReactIcons from "@/components/icons/ReactIcons";
import { GrDocumentConfig } from "react-icons/gr";
import { RiOpenSourceFill } from "react-icons/ri";
import { BsFileEarmarkBinary } from "react-icons/bs";
import Resume_Contact_Buttons from "@/components/Resume_Contact_Buttons";
import AnimatedText from "@/components/animation/TextAnimation"
import FeaturedProject from "@/components/abstract/FeaturedProject";

import apple from "public/images/projects/apple.png"
import selfie from "public/images/profile/selfie.png"
import aharoJ_porfolio from "public/images/projects/aharoJ_porfolio.png"
import k from "public/images/profile/k.png"


const FramerImage= motion(Image);
{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~        Project         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
const Project = ({ title, img, link, github, hashtags = [] }) => {  
    return (
        <article className="w-full flex flex-col items-center justify-center rounded-2xl p-2 relative
        border border-solid border-dark bg-light dark:bg-dark dark:border-light
        md:p-2
        ">
            
            <div className="absolute top-0 -right-2 -z-10 w-[101%] h-[101%] rounded-[2.5rem] bg-dark
            rounded-br-3xl  dark:bg-light 
            md:rounded-br-xl md:-right-0.8 md:w-[101%] md:h-[102%]"/>
            
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={img} alt="aharoJ" className="w-full h-auto"
                whileHover={{scale: 1.05}}
                transition={{duration:0.2}}
                />
            </Link>
            
            <div className="w-full flex flex-col items-start justify-between mt-4">

                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl text-gray-400 dark:text-orange-200 font-semibold lg:text-lg">{title}</h2>
                </Link>

                <div className="w-full mt-2 flex items-center justify-between">

                    <div className="flex items-center space-x-12">
                        <Link href={link} target="_blank" className="text-lg font-semibold underline underline-offset-4 dark:text-light/70 md:text-base">
                            Visit
                        </Link>

                        <Link href={github} target="_blank" className="w-8 md:w-6">
                            <GithubIcon/> {" "}
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center ml-4 space-x-2 ">
                        {hashtags.map((tag, index) => (
                            <span key={index} className="dark:text-light/80 text-dark/80 font-light text-xl
                            md:text-sm md:font-light md:tracking-tighter 
                            ">
                                #{tag}
                            </span>
                        ))}
                    </div>

                </div>

            </div>
        </article>
    )
}




const Home = () => {
  return (
    <>
      <Head>
        <title>aharoJ | Home</title>
        <meta name="description" content="Created by aharoJ" />
      </Head>
      <TransitionEffect/> 

      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-16 md:pt-16 sm:pt-8">
            
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Selfie          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
            <div className="flex items-center justify-between w-full lg:flex-col">
                <div className="relative flex h-auto w-[37%] md:w-full xs:w-[80%]  
                rounded-2xl border-2 border-solid border-dark hover:border-4 hover:border-pink-900 
                bg-light  dark:bg-gray-600 dark:hover:border-pink-900 mb-5
                ">
                    <div className=" absolute top-0 -right-2 -z-20 w-[102%] h-[102%] rounded-[1.5rem] bg-dark dark:bg-white"/>
                        <Image  src={k} alt="anon-pic" className="w-full h-auto rounded-xl"
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        50vw"
                        />
                </div>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
                
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Name | Summary | Resume | Contact          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
                <div className="w-[60%] flex flex-col items-center self-center lg:w-full">
                    
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Angel J. Haro         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
                    <TextAnimation text="Angel J. Haro" 
                        className="mb-12 flex flex-row text-8xl font-light tracking-wider justify-center
                        md:text-5xl md:font-light md:flex-wrap md:mb-8 md:!normal-case dark:text-orange-200 text-gray-400
                    "/>
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Summary         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
                    <p className="mb-6 font-light text-xl md:text-base">
                    Until you make the unconscious conscious, it will direct your life and you will call it fate. You are a function of what the whole universe is doing in the same way that a wave is a function of what the whole ocean is doing. - Watts
                    </p>
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Resumme | Contact        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
                    <Resume_Contact_Buttons/>
                </div>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
            </div>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}




            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       React Icons         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
            <div className="flex flex-row flex-wrap items-end justify-evenly mt-6 ">
                <ReactIcons icon={BsFileEarmarkBinary} value={4} label="LANGUAGES " className="xl:items-center mr-4 ml-4 md:mt-2" />
                <ReactIcons icon={GrDocumentConfig} value={15} label="PROJECTS" className="xl:items-center mr-4 ml-4 md:mt-2" />
                <ReactIcons icon={RiOpenSourceFill} value={9} label="OPENSOURCE" className="xl:items-center mr-4 ml-4 md:mt-2" />
                <ReactIcons icon={FaSchool} value={13} label="PARTNERSHIPS FORGED " className="xl:items-center mr-4 ml-4 md:mt-2" />
                <ReactIcons icon={GiTeacher} value={127} label="STUDENTS MENTORED" className="xl:items-center mr-4 ml-4 md:mt-2" />
            </div>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}



            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       OpenSource Portfolio         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
            <AnimatedText text="Open Source Portfolio"  className=" mt-12 mb-8 text-6xl font-extralight tracking sm:mb-8 sm:!text-6xl xs:!text-4xl"/>
            <div className="grid grid-cols-12  gap-y-8 gap-x-8 md:gap-y-10 md:gap-x-6">          
                <div className="col-span-12">
                    <FeaturedProject 
                        title="Portfolio "
                        img={aharoJ_porfolio}
                        summary="Check out my full-stack Porfolio. All code for the frontend is available in GitHub and all backend is available trough the a zip."
                        github="https://github.com/aharoJ/portfolio"
                        link="https://github.com/aharoJ/portfolio"
                        hashtags={["NextJs", "Spring-Boot", "TailwindCSS", "PostgreSQL"]}

                    />
                </div>                    
            </div>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}


        </Layout>
        {/* CIRCULAR AHAROJ ON LEFT BOTTOM CORNER */}
        {/* <Circular/> */}
      </main>
    </>
  )
}
export default Home
