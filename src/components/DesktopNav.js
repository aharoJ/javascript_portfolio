import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { TwitterIcon, GithubIcon, LinkedInIcon, SunIcon, MoonIcon, LeetcodeIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'



const CustomLink= ({href, title, className=''})=> {
    const router= useRouter();
    return(
        <Link href={href} className={`${className} relative group `}>
            {title}

            <span className={`
                h-[1px] inline-block bg-dark
                absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-500
                ${router.asPath === href ? 'w-full' : 'w-0'}
                dark:bg-light
                `}
            >
                &nbsp;
            </span>
        </Link>
    )
}

const DesktopNav = () => {
    const [mode, setMode] = useThemeSwitcher();
  return (
    <div className='w-full flex justify-between items-center lg:hidden'>
    <nav>
            <CustomLink href='/' title='Home' className='mr-4'/>
            <CustomLink href='/about' title='About' className='mx-4' />
            <CustomLink href='/projects' title='Projects' className='mx-4' />
            <CustomLink href='/articles' title='Articles' className='ml-4' />
        </nav>
         

    <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href='https://twitter.com/aharoJ' target={'_blank'}
        whileHover={{y:-2}}
        whileTap={{scale:0.3}}
        className='w-6 mx-3'
        >
            <TwitterIcon/>
        </motion.a>

        <motion.a href='https://github.com/aharoJ' target={'_blank'}
        whileHover={{y:-2}}
        whileTap={{scale:0.3}}
        className='w-6 mx-3 dark:bg-dark bg-light rounded-full  sm:mx-1'
        >
            <GithubIcon/>
        </motion.a>
        
        <motion.a href='https://www.linkedin.com/in/aharoj/' target={'_blank'}
        whileHover={{y:-2}}
        whileTap={{scale:0.3}}
        className='w-6 mx-3'
        >
            <LinkedInIcon/>
        </motion.a>
        
        <motion.a href='https://leetcode.com/aharoJ/' target={'_blank'}
        whileHover={{y:-2}}
        whileTap={{scale:0.3}}
        className='w-6 ml-3 dark:bg-light bg-light rounded-full '
        >
            <LeetcodeIcon/>
            
        </motion.a>

        <button
        onClick={()=> setMode(mode =='light' ? 'dark' : 'light')}
        className={`ml-3 flex items-center justify-center rounded-full p-1
        ${mode === 'light' 
        ? 'bg-dark text-light'
        : 'bg-light text-dark'}
        ml-12 w-8 h-8
        `}
        // lg:w-8 lg:h-8 xl:w-8 xl:h-8
        >

            {
                mode==='dark' 
                ? <SunIcon className={'fill-dark'}/>
                : <MoonIcon className={'fill-dark'}/>

            }

        </button> 
    </nav>
    </div>   
  )
}

export default DesktopNav