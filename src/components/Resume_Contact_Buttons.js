import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import TextAnimation from '@/components/Animation/TextAnimation';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import TransitionEffect from '@/components/Animation/TransitionEffect';
import { GithubIcon } from './icons/SvgIcons';
import skhd_yabai from 'public/images/projects/skhd_yabai.png';
import { motion } from 'framer-motion';
import Circular from '@/components/Animation/SpinningCircleAharoJ';
import selfie from 'public/images/profile/selfie.png'
import {  FaSchool } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import leetcode from "public/images/projects/leetcode.png";
import ReactIcons from '@/components/icons/ReactIcons';
import { GrDocumentConfig } from "react-icons/gr";
import { RiOpenSourceFill } from "react-icons/ri";
import { LuBinary } from "react-icons/lu";
import { BsFileEarmarkBinary } from "react-icons/bs";

const Resume_Contact_Buttons = () => {
    return (
        <>
        {/* <div className='flex items-center flex-row  self-start  mt-2 lg:self-center'> */}
        <div className='flex items-center flex-row justify-between space-x-8 mt-2 '>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Resume         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
                {/* <Link href='/resume_angel_haro.pdf' target={'_blank'} */}
                <Link href='https://aharoj.io/about'
                    className=' mb-6 items-center bg-dark text-light p-2.5 px-8 rounded-lg 
                    hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light
                    hover:dark:text-light md:p-2 md:mx-4
                    text-xl md:text-2xl xs:p-2
                ' 
                >   Resume
                </Link>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Contact         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
                <Link href='mailto:aharoJair@gmail.com' target={'_blank'}
                    className='mb-6 text-2xl font-medium capitalize 
                    hover:underline-offset-4
                    text-dark underline dark:text-light 
                    md:text-2xl xs:p-2
                '>  Contact 
                </Link>                
        </div>
        </>
    );
    
};

export default Resume_Contact_Buttons;
