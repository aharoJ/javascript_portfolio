import React from 'react'
import { useScroll, motion } from 'framer-motion'
const LiIcon = ({reference}) => {


    const {scrollYProgress}= useScroll(
        {
            target: reference,
            offset: ['center end', 'center center']
        }

    )

  return (
    <figure className='absolute left-0 stroke-black dark:stroke-light/70'>
        <svg className='-rotate-90 md:w-[60px] xs:h-[40px] xs:w-[40px] md:h-[60px]' width='75' height='75' viewBox='0 0 100 100'>
            <circle cx='75' cy='50' r='20' className='stroke-primary dark:stroke-primaryDark stroke-1 fill-none'/>
            <motion.circle cx='75' cy='50' r='20' className='stroke-[5px] fill-light dark:fill-slate-500/40'
            style={{
                pathLength: scrollYProgress
            }}
            
            />
            <circle cx='75' cy='50' r='10' className='fill-primary dark:fill-primaryDark stroke-1 animate-pulse'/>

        </svg>
    </figure>
  )
}

export default LiIcon