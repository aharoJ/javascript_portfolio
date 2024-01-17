import React from 'react';
import { GithubIcon } from '../icons/SvgIcons';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';


{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~        Framer Image        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
const FramerImage= motion(Image);
{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~        FeaturedProject        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
const FeaturedProject = ({hashtags =[], title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between relative 
            rounded-3xl border border-solid border-dark bg-light p-2 dark:bg-dark dark:border-light
            lg:flex-col  md:rounded-2xl md:rounded-br-3xl md:p-1'>
        
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~        LEFT SIDE |        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
        <div className='w-1/2 flex p-1 md:w-full '>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[101%] rounded-[2.5rem] bg-dark dark:bg-light
                rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' 
            />

            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    priority whileHover={{scale: 1.05}} transition={{duration:0.2}}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw"
                />
            </Link>
        </div>
            
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~         | RIGHT SIDE        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
            <div className='w-1/2 flex flex-col p-5 md:w-full  '>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~         HashMap        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
                <div className='flex flex-row justify-end md:w-full'>
                    <div className='flex flex-wrap space-x-4 justify-end items-start md:hidden'>
                        {hashtags.map((tag, index) => (
                            <span key={index} 
                            className='dark:text-light/80 text-dark/80 font-light text-xl
                            md:text-sm md:font-light md:tracking-tighter'
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~         Title        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
                <div className='flex flex-col items-start md:w-full  '>
                    <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                        <h2 className='p-0 md:my-0 w-full text-left text-5xl text-gray-400 dark:text-orange-200 font-semibold
                            md:text-2xl md:font-light md:tracking-tight'
                            >
                            {title}
                        </h2>
                    </Link>


                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~         Summary        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
                    <p className='my-0 md:my-0 text-xl font-light text-dark dark:text-light sm:text-sm'> 
                        {summary}
                    </p>
                </div>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ...........         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}


                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~         GitIcon | Vist        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
                <div className='flex items-center justify-end'>
                    <Link href={github} target='_blank' 
                        className='w-10 mx-8' 
                    >
                        <GithubIcon/>
                    </Link>
                    <Link href={link} target='_blank'
                        className='rounded-lg py-1 px-3 text-lg tracking-widest 
                        dark:bg-light dark:text-dark bg-dark text-light sm:px-4 sm:text-base' 
                    >
                        Visit Project
                    </Link>
                </div>
                
            </div>

        </article>
    );
}
export default FeaturedProject