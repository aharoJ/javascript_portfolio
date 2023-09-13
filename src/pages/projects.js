import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
// import { Link } from 'react-scroll'
import Link from 'next/link'
import vivaldi from 'public/images/projects/vivaldi-aharoJ.png'
import apple_redesign from 'public/images/projects/apple-redesign-full-stack.png'
import alacritty from 'public/images/projects/Alacritty-aharoJ.png'
import chatGPT3 from 'public/images/projects/chatGPT3.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'



const FramerImage= motion(Image);
const FeaturedProject= ({type, title, summary, img, link, github})=>{
    return (
        <article className='w-full flex items-center justify-between relative 
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '>

<div className='absolute top-0 -right-3 -z-10 w-[100%] h-[102%] rounded-[2.5rem] bg-dark dark:bg-light
 rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
 
            <Link 
                href={link} 
                target='_blank'
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                    <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{scale: 1.05}}
                    transition={{duration:0.2}}
                    priority
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw"
                    />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10' ><GithubIcon/> </Link>
                    <Link href={link} target='_blank'
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
                    dark:bg-light dark:text-dark 
                    sm:px-4 sm:text-base
                    '
                    >Visit the Project</Link>
                </div>
            </div>
        </article>
    )
}


const Project=({title, type, img, link, github})=>{  
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light'
        >
<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark
        rounded-br-3xl  dark:bg-light xs:rounded-br-2xl xs:-right-1.5 '/>
            <Link href={link} target='_blank'
            className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt='aharoJ' className='w-full h-auto'
                whileHover={{scale: 1.05}}
                transition={{duration:0.2}}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold  dark:text-light lg:text-lg'>{title}</h2>
                </Link>
                {/* <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'> {summary}</p> */}
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link}
                     target='_blank'
                     className='text-lg font-semibold underline underline-offset-4 dark:text-light/70 md:text-base'
                        >Visit 
                    </Link>
                    <Link href={github} target='_blank' className='w-8 md:w-6' >
                        <GithubIcon/> {' '}
                    </Link>

                </div>
            </div>
        </article>
    )
}


const Projects = () => {
  return (
    <>
    <Head>
        <title> aharoJ | Projects </title>
        <meta name="description" content="Created by aharoJ" />
    </Head>
    <TransitionEffect/>



    <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
            <AnimatedText text='Some of my projects | apps | open source | contributions'  className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
            <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 xs:gap-x-6'>
                <div className='col-span-12'>
                    <FeaturedProject 
                        title='Vivaldi'
                        img={vivaldi}
                        summary="My open-sourced Vivaldi, designed with the goal of maximizing productivity for tech-savvy users and programmers. This theme's color balance and sleek design will reduce eye strain for those who spend hours in front of the screen. For developers and power users to navigate the browser with ease."
                        github='https://github.com/aharoJ/dot-vivaldi'
                        link='https://themes.vivaldi.net/themes/nV6vpPxDvdN'
                        type='Featured Project'
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title='Alacrrity - Terminal Emulator '
                        img={alacritty}
                        github='/'
                        link='/'
                        type='Project'
                    />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title='chatGPT3 - Backend in Process'
                        img={chatGPT3}
                        github='https://github.com/aharoJ/chatGPT3_GoogleCSR'
                        link='https://github.com/aharoJ/chatGPT3_GoogleCSR'
                        type='Project'
                    />
                </div>
            </div>


            <div className='grid grid-col-12 gap-24 gap-y-32 mt-20 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                <div className='col-span-12'>
                    <FeaturedProject 
                        title='Apple Full-Stack'
                        img={apple_redesign}
                        summary='Apple front-end focused full-stack redesign using Typescript, Jsx, Tailwindcss, NextJs, Redux, Sanity, Stripe Studio and more...'
                        github='https://github.com/aharoJ/apple_full-stack'
                        link='https://github.com/aharoJ/apple_full-stack'
                        type='Featured Project'
                    /> 
                </div>

                {/* <div className='col-span-6'>
                    <Project 
                        title='Crypto Screener Application'
                        img={apple_redesign}
                        github='/'
                        link='/'
                        type='Project'
                    />
                </div>
                <div className='col-span-6'>
                    <Project 
                        title='Crypto Screener Application'
                        img={apple_redesign}
                        github='/'
                        link='/'
                        type='Project'
                    />
                </div> */}
            </div>




        </Layout>
    </main>
    </>
  )
}

export default Projects
