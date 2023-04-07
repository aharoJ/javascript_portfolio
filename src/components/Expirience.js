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




const Expirience = () => 
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
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16' > 
        Experience 
        </h2>

        <div ref={ref }className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

    <motion.div 
    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
    md:w-[2px] md:left-[30px] xs:left-[20px]
    '
    style={{scaleY: scrollYProgress}}
    />
            
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>


                <Details
                    position='Undergraduate Researcher' company='Google' companyLink='https://research.google/outreach/csrmp/' time='2022 - 2023 [seasonal spring]'  address='Los Angeles, CA'
                    bullets={[
                        'As a participant in the Google ExploreCSR program, I am gaining expertise in a diverse range of computer science topics.',
                        'Including python, data manipulation and visualization using matplotlib, numpy, pandas, and seaborn.',
                        'Web development using javascript, html/css, and React, NextJs, Tailwindcss, Framer; efficient use of the command line intertace (cli) and more.'

                ]} />

                <Details
                    position='Swe Instructor (Apple-Teacher)' company='Apple' companyLink='https://education.apple.com/en' time='2022 - Present'  address='Carson, CA'
                    bullets={[
                        'Developed interactive Swift programming presentations with accompanying exercises, activities, projects, and initiatives for students at institutions w/out programming courses.',
                        'Maintained a trusting environment where students felt encouraged to participate, ask questions and receive individual attention to ellectively learn to program.',
                        'Engaged in public speaking to educate schools about different types of technologies, including algorithms and data structures, hacking, web dev, video game dev, machine learning engineering, backend engineering, and operating systems',
                ]} />

                <Details
                    position='Undergraduate Researcher' company='University of Kean' companyLink='https://www.kean.edu/offices/research-and-sponsored-programs' time='2023 - 2023 [seasonal spring]'  address='Union, NJ'
                    bullets={[
                        'Manage and monitored research progress, including conducting literature review and doing a final research presentation along with a poster.',
                        'Utilized Java benchmark and Maven projects in experiments; Pitest to generate mutations, write Python scripts to find LOC per function of the program.',
                        'Conduct research to investigate the correlation between mutant score and the size of functions and mutant operators, and measure the effectiveness or test suites by comparing the number of killed mutants to equivalent mutants.',
                ]} 
                
                />

                <Details
                    position='Regional Seller' company='T-mobile' companyLink='https://www.t-mobile.com' time='2019 - 2021'  address='Los Angeles, CA' 
                    bullets={[
                        'Coordinated and delegated team tasks and monitored completion to drive efficiency while generating 63% of the sales and leading by example.',
                        'Implemented 50% of daily training, job instructions and blueprints to verify completion of assigned tasks with outlined specifications.',
                        'Achieved 139% increase in store performance and monthly targets, surpassing high-volume stores with 8.7 customer satisfaction.'
                ]} />

                <Details
                    position='Lead Server' company='M-M Resturant' time='2012 - 2018'  address='Los Angeles, CA' 
                    bullets={[
                        'Developed my character, work ethic, and soft skills. Memorize details of daily specials, seasonal menu items and options, as well as rotating craft beer options.',
                 ]} />

            </ul>
        </div>

    </div>
  )
}

export default Expirience