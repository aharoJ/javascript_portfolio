import React from 'react';
import { GithubIcon } from '../icons/SvgIcons';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~        Framer Image        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
const FramerImage= motion(Image);
{/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~        Project         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
const NormalProject = ({ title, img, link, github, hashtags = [] }) => {  
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl p-2 relative
        border border-solid border-dark bg-light dark:bg-dark dark:border-light
        md:p-2
        '>
            
            <div className='absolute top-0 -right-2 -z-10 w-[101%] h-[101%] rounded-[2.5rem] bg-dark
            rounded-br-3xl  dark:bg-light 
            md:rounded-br-xl md:-right-0.8 md:w-[101%] md:h-[102%]'/>
            
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt='aharoJ' className='w-full h-auto'
                whileHover={{scale: 1.05}}
                transition={{duration:0.2}}
                />
            </Link>
            
            <div className='w-full flex flex-col items-start justify-between mt-4'>

                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl text-gray-400 dark:text-orange-200 font-semibold lg:text-lg'>{title}</h2>
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

                    <div className='flex flex-wrap justify-center ml-4 space-x-2 '>
                        {hashtags.map((tag, index) => (
                            <span key={index} className='dark:text-light/80 text-dark/80 font-light text-xl
                            md:text-sm md:font-light md:tracking-tighter 
                            '>
                                #{tag}
                            </span>
                        ))}
                    </div>

                </div>

            </div>
        </article>
    )
}

export default NormalProject;
