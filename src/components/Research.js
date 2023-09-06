import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'


const Details=({position, company, companyLink, time, address, work, bullets})=>
{
    const ref= useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
            initial={{y:58, x:0}} //potential stuff here
            whileInView={{y:0, x:0}}
            transition={{duration:3, type:'spring'}}
            >
                <h3 className='capitalize font-bold text-2xl '>{position}&nbsp; <a href={companyLink} 
                target={'_blank'} className='text-primary capitalize dark:text-primaryDark underline underline-offset-4 cursor-pointer'
                >@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm '> {work} </p>
                {bullets && (
                    <ul className='list-disc pl-8 mt-2'>
                        {bullets.map((bullet) => (
                            <li className='ml-2' key={bullet}>
                                {bullet}
                            </li>
                        ))}
                    </ul>
                )}
            </motion.div>
        </li>
    )
}



const Research = () => 
{
    const ref= useRef(null);
    const {scrollYProgress}= useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }

    )
  return (
    <div className='my-64'>
    <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Research Projects
    </h2>
    <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        {/* ... rest of the motion div here ... */}
        <motion.div 
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
            md:w-[2px] md:left-[30px] xs:left-[20px]
            '
            style={{scaleY: scrollYProgress}}
        />

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
            {/* Google Research */}
            <Details
                position='exploreCSR'
                company='Google'
                companyLink='https://research.google/outreach/csrmp/'
                time='January, 2023 - Present'
                address='remote'
                bullets={[
                    'Engineered a custom light-dark theme switching mechanism.',
                    'Employed advanced CSS for dynamic text sizing across devices, ensuring a consistent UX for 95% of users regardless of device size.',
                    'Structured a Next js portfolio comprising of 30+ components, segregated assets, and files, ensuring an organized and maintainable codebase.',
                    'Maintained an in-depth research markdown, referencing 20+ vital resources; a commitment to staying abreast of industry standards and innovations.',
                    'Deployed prioritized object loading for 50+ page elements, improving page responsiveness by 30% and reducing bounce rates.'
                ]}
            />

            {/* LEU Research */}
            <Details
                position='Mutation Testing Researcher'
                company='University of Kean'
                companyLink='https://www.kean.edu/offices/research-and-sponsored-programs'
                time='February, 2023 - October, 2023'
                address='remote'
                bullets={[
                    'Integrated sophisticated Java benchmark and Maven projects to deliberately introduce small mutations in the code and verify their detection.',
                    'Leveraged Pitest and Little Darwin to instigate mutations across 500+ code lines, attaining a mutation coverage of 95%.',
                    'Crafted Python scripts that analyzed 10,000+ Lines of Code (LOC), deriving an average function length and aiding in the optimization of code quality by highlighting areas for refactoring.'
                ]}
            />

        </ul>
    </div>
</div>
  )
}

export default Research