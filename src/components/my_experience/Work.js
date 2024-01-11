import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import Experience from '../abstract/Experience';


const Work = () => 
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
        <h2 className='font-bold text-8xl mb-8 w-full text-center md:text-2xl' > 
        Experience 
        </h2>
    
        <div ref={ref }className='w-full mx-auto relative md:w-full'>
    
            <motion.div 
            className='absolute left-9 top-0 w-[4px] h-full origin-top
            bg-dark dark:bg-light 
            md:w-[3px] md:left-[18px] ' 
            style={{scaleY: scrollYProgress}}   />

            <ul className='w-full flex flex-col items-start justify-between ml-4 md:ml-2'>

                
            {/* Google exploreCSR */}
            <Experience
                position='Research Development Software Engineer'
                company='Google exploreCSR'
                time='Jan, 2023 - Present'
                address='Los Angeles, California'
                bullets={[
                    'Launched a responsive, interactive Nexts and Reacts chatGPT3 website, integrating TailwindCSS for a fluid user interface on various devices and featuring Framer-Motion for a 3D responsive environment along with over 30 custom components.',
                    'Directed a neural network from scratch to predict material surface reflectance, applying deep learning techniques in Python NumPy, and Pandas for computation and Matplotlib for error visualization using the MERL BRDF dataset.'
                ]}
            />
            
            {/* Local Research Experiences for Undergraduates */}
            <Experience
                position='Software Development Engineer in Test (SDET)'
                company='Local Research Experiences for Undergraduates'
                companyLink='#'
                time='Feb 2023 - Oct 2023'
                address='Union, New Jersey (remote)'
                bullets={[
                    'Secured a 95% mutation detection rate in the GMIS Competition, demonstrating expertise in mutation testing with Little Darwin and Pitest, significantly improving test suite effectiveness.',
                    'Led the use of diverse mutation operators and varying test suite sizes, analyzing over 10,000+ lines of Java and Python code; successfully integrated mutation testing into Maven for fault detection leading to groundbreaking insights in software test quality.'
                ]}
            />
            
            <Experience
                position='Software Engineer Intern'
                company='Turner Fairbank Highway Research Center'
                companyLink='#'
                time='May 2023 - Aug 2023'
                address='McLean, Virginia'
                bullets={[
                    'Played a key role in the R&D phase of openpilot (comma.ai), focusing on reverse engineering for a high-value project aligned with CARMA mission to advance Cooperative Driving Automation using Open Source Software and agile methodologies.',
                    'Advanced the CARLA simulator by resolving quality issues and integrating third-party plugins, improving vehicle compatibility and computational efficiency in autonomous driving systems using NVIDIA, CUDA, and Unreal Engine.',
                    'Optimized Python dependencies using Docker, streamlining workflows and automating processes with Pip, TOML, Poetry-Shell, and Bash scripts, leading to a reduction in deployment',


                ]}
            />

            <Experience
                position='Lead Computer Science Scholar'
                company='CSUDH Coding Club'
                companyLink='https://csudh.edu'
                time='Aug 2021 - Sept 2023'
                address='Los Angeles, California'
                bullets={[
                    'Improved student STEM engagement by 27% across underprivileged schools by training Apple Teachers.',
                    'Led weekly Swift and JavaScript training, achieving over 80% proficiency in Apple Education curriculum.',
                    'Scaled the program across LAUSD schools, expanding from 3 to 13 institutions, a 233% increase, through partnerships with Apple.',
                    
                ]}
            />

            </ul>
        </div>
    </div>
    )
}

export default Work