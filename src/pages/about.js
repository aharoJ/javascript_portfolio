import Link from "next/link";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profile_pic from "public/images/profile/aharoJ.jpg";
import TransitionEffect from "@/components/Animation/TransitionEffect";
import CoreSkills from "../components/CoreSkills"; 
import Work from "@/components/my_experience/Work";
import NonTechnical from "@/components/my_experience/NonTechnical";
import Education from "@/components/my_experience/Education";
import { HorizontalTabsWithIcon } from "@/components/mt/HorizontalTabsWithIcon";

import { Alert } from "@material-tailwind/react";
import { DefaultAccordion } from "@/components/mt/DefaultAccordion";
import TextAnimation from "@/components/Animation/TextAnimation";
import ClickHereAnimation from "@/components/mt/ClickHereAnimation";
import { AccordionTwoMore } from "@/components/mt/AccordionTwoMore";
 

const About = () => {
    return (
<>
    <Head>
      <title>aharoJ | About</title>
      <meta name="description" content="Created by aharoJ" />
    </Head>

    <TransitionEffect /> 

    <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
      <Layout className="pt-6 lg:p-24 md:pt-16 sm:pt-8">
        <div className=" mt-12 flex  w-full lg:flex-col">


            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Selfie         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
            <div className="w-1/2 p-2 flex flex-col md:mb-6 md:w-full">
              <div className="col-span-4 relative h-max w-11/12 rounded-2xl border-2 border-solid p-4 
              xl:col-span-4 md:order-1 md:col-span-8 sm:col-span-12 
              border-dark hover:border-4 hover:border-pink-900 bg-light dark:bg-dark dark:hover:border-pink-900 
              ">
                  <div className=" absolute justify-content top-0 -right-3 -z-20 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light/60"/>
                  <Image  src={profile_pic} alt="aharoJ" className=" w-full h-auto rounded-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw" />       
                    <div className="justify-content self-start mt-2 lg:self-center">
                          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Resume         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
                          {/* <Link href="/resume_angel_haro.pdf" target={"_blank"}
                          className="flex items-center  bg-dark text-light p-1.5 px-6 rounded-lg
                          hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark
                          dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light
                          hover:dark:text-light md:p-2 md:mx-4
                          text-base xs:text-sm xs:p-0.5
                          "
                          >  Resume 
                          </Link>  */}


                          <Link href="https://github.com/aharoJ" target={"_blank"}
                          className="flex items-center mt-2 bg-gray-800 text-light p-1.5 px-6 rounded-lg
                          hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark
                          dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light
                          hover:dark:text-light md:p-2 md:mx-4
                          text-base xs:text-sm xs:p-0.5
                          "
                          > 
                          Github 
                          </Link>           
                    </div>
              </div>
            </div>
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */} 


            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Languages          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
            <div className=" w-[100%] md:hidden">
            <TextAnimation text="Comfortable Languages " 
                        className="mb-0 flex flex-row text-4xl font-light tracking-wider justify-center
                        md:text-5xl md:font-light md:flex-wrap md:mb-8 md:!normal-case dark:text-orange-200 text-gray-400
            "/>
              <HorizontalTabsWithIcon/>
              <ClickHereAnimation/>
              
              <div className="mt-6">
              <DefaultAccordion/>
              </div>
              <div className="">
              <AccordionTwoMore/>
              </div>
              
            </div>
            
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */} 

        
        
        
        </div>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */} 

        <Education/>
        <Work/>
        <NonTechnical/>
        <CoreSkills />
        {/* <Circular/> */}
      </Layout>
    </main>
</>
    )
  }
export default About