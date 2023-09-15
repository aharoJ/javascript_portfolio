import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import apple from 'public/images/projects/apple.png';
import vivaldi from 'public/images/projects/vivaldi.png';
import inboxapp from 'public/images/projects/inbox-app.png';
import machinelearning from 'public/images/projects/machine-learning.png';
import portfolio from 'public/images/projects/portfolio.png';
import alacritty from 'public/images/projects/vim.png';
import hackingtwitter from 'public/images/projects/hacking-twitter.png'
import yabai_skhd from 'public/images/projects/yabai_skhd.png';
import tmux from 'public/images/projects/tmux.png';
import lf from 'public/images/projects/lf.png';
import starship from 'public/images/projects/starship.png';
import chatgpt3 from 'public/images/projects/chatgpt3.png';

{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~        Framer Image        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
const FramerImage= motion(Image);
{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~        FeaturedProject        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
const FeaturedProject = ({hashtags =[], title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between relative 
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-2 dark:bg-dark dark:border-light
        
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />

            <Link href={link} target='_blank' className='w-3/4 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                    <FramerImage src={img} alt={title} className='w-full h-auto'
                    priority whileHover={{scale: 1.05}} transition={{duration:0.2}}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw"
                    />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <div className='flex flex-wrap space-x-2 justify-center md:hidden'>
                    {hashtags.map((tag, index) => (
                        <span key={index} className='dark:text-light text-dark font-thin text-xl xs:text-base'>
                            #{tag}
                        </span>
                    ))}
                </div>

                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl text-primary font-bold dark:text-primaryDark sm:text-sm'>{title}</h2>
                </Link>

                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>

                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'><GithubIcon/></Link>
                    <Link href={link} target='_blank'
                    className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
                    dark:bg-light dark:text-dark 
                    sm:px-4 sm:text-base
                    '>Visit the Project</Link>
                </div>
            </div>
        </article>
    );
}

{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~        Project         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
const Project = ({ title, img, link, github, hashtags = [] }) => {  
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark
            rounded-br-3xl  dark:bg-light xs:rounded-br-2xl xs:-right-1.5 '/>
            
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt='aharoJ' className='w-full h-auto'
                whileHover={{scale: 1.05}}
                transition={{duration:0.2}}
                />
            </Link>
            
            <div className='w-full flex flex-col items-start justify-between mt-4'>

                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-lg'>{title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between'>

                    <div className='flex items-center space-x-12'>
                        <Link href={link} target='_blank' className='text-lg font-semibold underline underline-offset-4 dark:text-light/70 md:text-base'>
                            Visit
                        </Link>

                        <Link href={github} target='_blank' className='w-8 md:w-6'>
                            <GithubIcon/> {' '}
                        </Link>
                    </div>

                    <div className='flex flex-wrap justify-center ml-4 space-x-2 md:hidden'>
                        {hashtags.map((tag, index) => (
                            <span key={index} className='dark:text-light text-dark font-thin text-base'>
                                #{tag}
                            </span>
                        ))}
                    </div>

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
        <meta name="Projects" content="Created by aharoJ" />
    </Head>
    <TransitionEffect/>



<main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
    <Layout className='pt-16'>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Full Stack        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        <AnimatedText text='Full Stack'  className='mb-8 text-8xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
        <div className='grid grid-cols-12 gap-24 gap-y-8 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 xs:gap-x-6'>
                <div className='col-span-12'>
                    <FeaturedProject 
                        title='Reverse engineering twitter a.k.a hacking '
                        img={hackingtwitter}
                        summary="Solo reverse engineering Twitter. Stack: Spring Boot, Java, React, TypeScript, PostgreSQL. "
                        github='https://github.com/aharoJ/twitter-clone'
                        link='https://github.com/aharoJ/twitter-clone'
                        hashtags={['Twitter [X]', 'SpringBoot', 'Java', 'React', 'TypeScript', 'PostgreSQL']}

                    />
                </div>
                <div className='col-span-12'>
                    <FeaturedProject 
                    title='Apple Re-design'
                    img={apple}
                    summary='Apple fullstack app using Typescript, Jsx, Tailwindcss, NextJs, Redux, Sanity, Stripe Studio and more...'
                    github='https://github.com/aharoJ/Apple_Re-design'
                    link='https://github.com/aharoJ/Apple_Re-design'
                    hashtags={[ 'Fullstack', 'Typescript', 'TSX', 'TailwindCSS', 'NextJS', 'Redux', 'Sanity']}
                    />
                </div>
                
        </div>


        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Backend Dev          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        <AnimatedText text='Backend Dev'  className='mt-8 mb-8 text-6xl font-light sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
        <div className='grid grid-cols-12 gap-24 gap-y-8 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 xs:gap-x-6'>
            <div className='col-span-6 sm:col-span-12'>
                <Project 
                    img={inboxapp}
                    title='Inbox Application'
                    summary=''
                    github='https://github.com/aharoJ/InboxApp'
                    link='https://github.com/aharoJ/InboxApp'
                    hashtags={['Java', 'Spring-boot', 'Spring-security', 'Spring-security', 'Spring-security']} // <-- Added the hashtags prop here
                /> 
            </div>
        </div>


        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Frontend Dev          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        <AnimatedText text='Frontend Dev'  className='mt-8 mb-8 text-6xl font-light sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
        <div className='grid grid-cols-12 gap-24 gap-y-8 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 xs:gap-x-6'>
            <div className='col-span-6 sm:col-span-12'>
                <Project 
                    img={portfolio}
                    title='Portfolio'
                    summary=''
                    github='https://github.com/aharoJ/portfolio'
                    link='https://github.com/aharoJ/portfolio'
                    hashtags={['JSX', 'NextJs', 'Tailwindcss', 'Motion-Frame']} // <-- Added the hashtags prop here
                /> 
            </div>

            <div className='col-span-6  sm:col-span-12'>
                <Project 
                    title='chatGPT3'
                    img={chatgpt3}
                    github='https://github.com/aharoJ/chatGPT3_React'
                    link='https://github.com/aharoJ/chatGPT3_React'
                    hashtags={['React', 'Html', 'Css', 'Javascript']} // <-- Added the hashtags prop here
                />
            </div>
        </div>


        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Machine Learning          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        <AnimatedText text='Machine Learning'  className=' mt-20 b-8 text-8xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
        <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 xs:gap-x-6'>
            <div className='col-span-6 sm:col-span-12'>
                <Project 
                    title='Machine Learning'
                    img={machinelearning}
                    summary='Over 8,000 lines of markdown notes on Artificial Intelligence, Capstone Project, Code, Documentation and more..,'
                    github='https://github.com/aharoJ/opensource/tree/main/machine-learning'
                    link='https://github.com/aharoJ/opensource/tree/main/machine-learning'
                    hashtags={['AI', 'Markdown', 'Capstone', 'Documentation']} // <-- Added the hashtags prop here

                /> 
            </div>
        </div>


        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Dot Files          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        <AnimatedText text='Dot Files'  className='mb-8 mt-20 text-8xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
        <div className='grid grid-cols-12 gap-24 gap-y-8 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 xs:gap-x-6'>
            <div className='col-span-6 sm:col-span-12'>
                <Project 
                    title='yabai-skhd-config'
                    img={yabai_skhd}
                    summary=''
                    github='https://github.com/aharoJ/yabai-skhd-config'
                    link='https://github.com/aharoJ/yabai-skhd-config'
                    hashtags={['hacking MacOS', 'shell scripting', 'skhd-config', 'yabai-config']} // <-- Added the hashtags prop here
                /> 
            </div>
            <div className='col-span-6 sm:col-span-12'>
                <Project 
                    title='tmux-config'
                    img={tmux}
                    summary=''
                    github='https://github.com/aharoJ/tmux-config'
                    link='https://github.com/aharoJ/tmux-config'
                    hashtags={[ 'handcrafted design', 'catppuccin', 'tmux-config']} // <-- Added the hashtags prop here
                /> 
            </div>
            <div className='col-span-6 sm:col-span-12'>
                <Project 
                    title='lf-config'
                    img={lf}
                    summary=''
                    github='https://github.com/aharoJ/lf-config'
                    link='https://github.com/aharoJ/lf-config'
                    hashtags={['shell scripting', 'custom Scripts', 'kitty-config', 'lf-config']} // <-- Added the hashtags prop here
                /> 
            </div>
            <div className='col-span-6 sm:col-span-12'>
                <Project 
                    title='starship-config'
                    img={starship}
                    summary=''
                    github='https://github.com/aharoJ/starship-config'
                    link='https://github.com/aharoJ/starship-config'
                    hashtags={['custom toml file', 'hand-picked colors', 'timezone', 'starship-config']} // <-- Added the hashtags prop here
                /> 
            </div>
            <div className='col-span-6 sm:col-span-12'>
                <Project 
                    title='vivaldi-config'
                    img={vivaldi}
                    summary='My open-sourced Vivaldi, designed with the goal of maximizing productivity for tech-savvy users and programmers. 
                    This theme seeks balance and sleek design will reduce eye strain for those who spend hours in front of the screen. For developers and power users to navigate the browser with ease.'
                    github='https://github.com/aharoJ/vivaldi-config'
                    link='https://themes.vivaldi.net/themes/nV6vpPxDvdN'
                    hashtags={['custom binds', 'hotkeys', 'vialdi-config']} // <-- Added the hashtags prop here
                /> 
            </div>
            <div className='col-span-6 sm:col-span-12'>
                <Project 
                    title='alacritty-config'
                    img={alacritty}
                    summary=''
                    github='https://github.com/aharoJ/alacritty-config'
                    link='https://github.com/aharoJ/alacritty-config'
                    hashtags={['terminal emulator', 'yalm file', 'alacritty-config']} // <-- Added the hashtags prop here
                /> 
            </div>
            
        </div>


        
    </Layout>
</main>
    </>
  )
}

            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ORIGINAL        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
            {/* <AnimatedText text='Projects'  className='mb-16 text-8xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
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
            </div> */}
export default Projects




