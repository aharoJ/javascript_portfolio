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
                    position='exploreCSR' company='Google' companyLink='https://research.google/outreach/csrmp/' time='January, 2023 - Present'  address='remote'
                    bullets={[
                        'Engineered a custom light-dark theme switching mechanism.',
                        'Employed advanced CSS for dynamic text sizing across devices, ensuring a consistent UX for 95% of users regardless of device size.',
                        'Structured a Next js portfolio comprising of 30+ components, segregated assets, and files, ensuring an organized and maintainable codebase.',
                        'Maintained an in-depth research markdown, referencing 20+ vital resources; a commitment to staying abreast of industry standards and innovations.',
                        'Deployed prioritized object loading for 50+ page elements, improving page responsiveness by 30% and reducing bounce rates.'

                ]} />

                <Details
                    position='Lead Apple Teacher' company='Apple' companyLink='https://education.apple.com/en' time='August, 2021 - September, 2023' address='Los Angeles, CA'
                    bullets={[
                        'Directed a team of 10 Apple Teachers to introduce fundamental computer science concepts to 13 underprivileged middle schools and high schools, increasing STEM engagement.',
                        'Facilitated weekly training sessions for both team members and students, ensuring an 83% proficiency in the Apple Education curriculum with a focus on Swift, robotics integrations, and JavaScript.',
                        'Forged collaborations with LAUSD and Apple, successfully architecting the program\'s infrastructure to address key client requirements and expanding its institutions from 3 to 13, representing a 433% growth.'
                ]} />


                <Details
                    position='Reverse Engineering Intern' company='Turner-fairbank Highway Research Center' companyLink='#' time='May, 2023 - August, 2023' address='McLean, VA'
                    bullets={[
                        'Authored a comprehensive documentation repository on openpilot\'s integration, serving as a pivotal resource for federal agents resulting in an improvement in CDA testing accuracy and efficiency.',
                        'Resolved 9 configuration challenges, with a specific focus on poetry-shell, Carla, Openpilot and created Shell configurations, reducing integration-related errors by 22% guaranteeing consistency across federal vehicle tests.',
                        'Employed Netflix\'s VMAF machine learning algorithms to optimize video quality assessment, enhancing the quality metrics of FHWA public challenges\' content by 7%, and setting a gold standard for federal multimedia deliverables.'
                    ]}
                />
                <Details
                    position='Mutation Testing Researcher' company='University of Kean' companyLink='https://www.kean.edu/offices/research-and-sponsored-programs' time='February, 2023 - October, 2023' address='remote'
                    bullets={[
                        'Integrated sophisticated Java benchmark and Maven projects to deliberately introduce small mutations in the code and verify their detection.',
                        'Leveraged Pitest and Little Darwin to instigate mutations across 500+ code lines, attaining a mutation coverage of 95%.',
                        'Crafted Python scripts that analyzed 10,000+ Lines of Code (LOC), deriving an average function length and aiding in the optimization of code quality by highlighting areas for refactoring.'                
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