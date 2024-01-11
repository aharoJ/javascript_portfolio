import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useThemeSwitcher from '../hooks/useThemeSwitcher';
import SocialMediaLinks from '../icons/SocialMediaIcons';
import MoonSunIcon from '../icons/MoonSunIcon';

const CustomMobileLink= ({href, title, className='', toggle})=> {
    
    const router= useRouter();
    const handleClick= ()=> {
        toggle();
        router.push(href);

    }
    return(
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} 
        onClick={handleClick}> {title}
            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Hover          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
            <span className={`
                h-[1px] inline-block dark:bg-gray-400 bg-orange-200
                absolute left-0 -bottom-0
                group-hover:w-full transition-[width] ease duration-500
                ${router.asPath === href ? 'w-3/5' : 'w-0'}
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
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Hambuerger           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}     
        <button className=' flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
            <span className={` bg-dark dark:bg-light block transition-all duration-500 ease-out h-1 w-10 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : 'translate-y-0.5'}`}></span>
            <span className={` bg-dark dark:bg-light block transition-all duration-500 ease-out h-1 w-10 rounded-sm ${isOpen ? 'opacity-0' : '-translate-y-4'}`}></span>
            <span className={` bg-dark dark:bg-light block transition-all duration-500 ease-out h-1 w-10 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-2'}`}></span>
        </button>
   {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       CONTAINER [  ]          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}     
   { isOpen ?
        <motion.div 
        initial={{scale:0, opacity:0, x:'-50%', y:'-50%'}}
        animate={{scale:1, opacity:1}}
        
        
        className=' min-w-[70vw] flex flex-col justify-between items-center fixed top-96 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30
            bg-dark/70 backdrop-blur-sm
            dark:bg-darl/70 dark:backdrop-blur-sm
             rounded-3xl 
        '>


            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       container [ ]          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
           <div className='px-10 grid grid-cols-12 gap-x-7 gap-y-2'>                
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       Home About Project          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
                <div className='col-span-12 pb-0'>
                    <nav className='flex items-center flex-row justify-center'>
                        <CustomMobileLink href='/' title='Home' className='dark:text-light text-xl pr-10 tracking-tight font-extralight' toggle={handleClick} />
                        <CustomMobileLink href='/about' title='About' className='dark:text-light text-xl pr-10 tracking-tight font-extralight' toggle={handleClick} />
                        <CustomMobileLink href='/projects' title='Projects' className='dark:text-light text-xl pr-10 tracking-tight font-extralight' toggle={handleClick} />
                        
                        {/* Close Icon */}
                        <motion.button 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 4 }}
                            onClick={handleClick}
                            className=
                            "text-gray-400 pl-0 dark:text-orange-200  hover:bg-opacity-80 text-md font-extrabold tracking-tighter" >
                            EXIT
                        </motion.button>
                    </nav>
                </div>




            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~       ICONS          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */}
            <div className='col-span-12'>
                <nav className='flex items-row flex-row justify-between'>
                <SocialMediaLinks mobilesize={25} className='text-orange-200 dark:!text-gray-400' />      {/* Optional: classname, size, mobilesize */}
                <MoonSunIcon mobilesize={25} className='md:ml-2' suncolor='!text-orange-200' mooncolor='!text-gray-400'/>         {/* Optional classname, mooncolor, suncolor size, mobilesize */}
                
            </nav>

            </div>

            </div>
        </motion.div>   
      : null
      }
    </>
  )
}

export default MobileNav;