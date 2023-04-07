import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { TwitterIcon, GithubIcon, LinkedInIcon, SunIcon, MoonIcon, LeetcodeIcon, LeetcodeIcon_v3, LeetcodeIcon_v2 } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'


const CustomMobileLink= ({href, title, className='', toggle})=> {
    const router= useRouter();
    

    const handleClick= ()=> {
        toggle();
        router.push(href);

    }
    return(
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}

            <span className={`
                h-[1px] inline-block bg-light
                absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-500
                ${router.asPath === href ? 'w-full' : 'w-0'}
                dark:bg-dark
                `}
            >
                &nbsp;
            </span>
        </button>
    )
}


const MobileNav = () => 
{
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen]=  useState(false);
    const handleClick=()=>
    {
        setIsOpen(!isOpen)

    }
    return (
    <>
        <button className=' flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
        <span className={` bg-dark dark:bg-light block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={` bg-dark dark:bg-light block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={` bg-dark dark:bg-light block transition-all duration-500 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
   { isOpen ?
        <motion.div 
        initial={{scale:0, opacity:0, x:'-50%', y:'-50%'}}
        animate={{scale:1, opacity:1}}
        className=' min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
            bg-dark/50
            dark:bg-light/60
             rounded-xl backdrop-blur-sm py-4 dark:backdrop-blur-sm
             shadow-2xl shadow-cyan-700 dark:shadow-white backdrop-contrast-125 
        '>
            <nav className='flex items-center flex-col justify-center'>
                <CustomMobileLink href='/' title='Home' className='  text-xl p-1 tracking-tighter   font-semibold' toggle={handleClick} />
                <CustomMobileLink  href='/about' title='About' className='  text-xl p-1 tracking-tighter   font-semibold' toggle={handleClick} />
                <CustomMobileLink href='/projects' title='Projects' className='  text-xl p-1 tracking-tighter   font-semibold' toggle={handleClick} />
                <CustomMobileLink href='/articles' title='Articles' className='  text-xl p-1 tracking-tighter   font-semibold'  toggle={handleClick} />
            </nav>
             

        <nav className='flex items-center justify-center flex-wrap mt-2'>
            <motion.a href='https://twitter.com/aharoJ' target={'_blank'}
            whileHover={{y:-2}}
            whileTap={{scale:0.3}}
            className='w-8 mx-4 '
            >
                <TwitterIcon/>
            </motion.a>

            <motion.a href='https://github.com/aharoJ' target={'_blank'}
            whileHover={{y:-2}}
            whileTap={{scale:0.3}}
            className='w-8 mx-4 dark:bg-dark bg-light rounded-full  '
            >
                <GithubIcon/>
            </motion.a>
            
            <motion.a href='https://www.linkedin.com/in/aharoj/' target={'_blank'}
            whileHover={{y:-2}}
            whileTap={{scale:0.3}}
            className='w-8 mx-4 '
            >
                <LinkedInIcon/>
            </motion.a>

            
            <motion.a href='https://leetcode.com/aharoJ/' target={'_blank'}
            whileHover={{y:-2}}
            whileTap={{scale:0.3}}
            className='w-8 mx-4 '
            >
                <LeetcodeIcon_v2/>
            </motion.a>
            


            <button
            onClick={()=> setMode(mode =='light' ? 'dark' : 'light')}
            className={`ml-3 flex items-center justify-center rounded-full p-1
            ${mode === 'light' 
            ? 'bg-dark text-light'
            : 'bg-light text-dark'}
            w-9 xs:mt-3
            `}

            >

                {
                    mode==='dark' 
                    ? <SunIcon className={'fill-dark'}/>
                    : <MoonIcon className={'fill-dark'}/>

                }

            </button> 
        </nav>
        </motion.div>   
    : null
    }
</>
  )
}

export default MobileNav