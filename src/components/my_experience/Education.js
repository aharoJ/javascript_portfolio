import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import Experience from '../abstract/Experience';


const EducationExperience = ({ institution, degree, graduationDate, gpa, coursework }) => {
  return (
    <div className='my-8 w-[90%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
      <motion.div
          initial={{ y: 58, x: 0 }}
          whileInView={{ y: 0, x: 0 }}
          transition={{ duration: 1.5, type: 'spring' }}
      >
        <h3 className='font-bold text-4xl text-gray-400 dark:text-orange-200 md:text-2xl'>
          {institution}
        </h3>

        <span className='text-3xl font-semibold md:text-2xl text-dark/80 dark:text-light/80'>
            {degree}
        </span>

        <span className='block text-xl font-medium mt-[2px]
        md:text-[12px] text-dark/75 dark:text-light/75 md:mt-2'>
            Expected: {graduationDate} | GPA: {gpa}
        </span>

        <div className='mt-2'>
          <h4 className='text-lg font-bold'>Relevant Coursework:</h4>
          <p className='ml-4 text-xl font-medium dark:text-light text-dark/90'>{coursework}</p>
        </div>

      </motion.div>
    </div>
  );
};


const Education = () => 
{
    const ref= useRef(null);
    const {scrollYProgress}= useScroll (
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    )

    return (
    <div className='my-12'>
        <h2 className='font-bold text-8xl mb-8 w-full text-center md:text-2xl ' > 
        Education 
        </h2>
    
        <div ref={ref }className='w-full mx-auto relative md:w-full'>
    
            <motion.div 
            className='absolute left-9 top-0 w-[4px] h-full origin-top
            bg-dark dark:bg-light 
            md:w-[3px] md:left-[18px] ' 
            style={{scaleY: scrollYProgress}}   />

            <ul className='w-full flex flex-col items-start justify-between ml-4 md:ml-2'>
                
            <Experience
                position='Bachelor of Science, Computer Science'
                company='California State University, Dominguez Hills'
                companyLink='#'
                time='Graduation: December 2023'
                address='Carson, California'
                bullets={[
                  "Introduction to Computer Science and Programming I, Introduction to Computer Science and Programming II, IOS Programming, Software Development, Assembly and Introduction to Computer Organization, Discrete Structures, Applied Data Structures, Careers in Tech, Data Structures, Computer Organization, Machine Learning, Analysis of Algorithms, Programming Languages"
                    
                ]}
            />


            </ul>
        </div>
    </div>
    )
}
export default Education