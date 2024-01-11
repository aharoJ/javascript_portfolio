import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import Experience from '../abstract/Experience';


const NonTechnical = () => 
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
        Non-Technical 
        </h2>
    
        <div ref={ref }className='w-full mx-auto relative md:w-full'>
    
            <motion.div 
            className='absolute left-9 top-0 w-[4px] h-full origin-top
            bg-dark dark:bg-light 
            md:w-[3px] md:left-[18px] ' 
            style={{scaleY: scrollYProgress}}   />

            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                
            <Experience
            position='Lead Mobile Expert'
            company='T-Mobile'
            time='Feb 2019 - Jun 2021'
            address='Los Angeles, California, United States'
            bullets={[
              'Enhanced team performance and store revenue at T-Mobile by spearheading sales strategies and customer service improvements that led to a 139% increase in monthly targets and high customer satisfaction.',
              'Conducted daily staff training and managed communications via multiple channels to ensure excellent service and customer engagement.'
            ]}
          />

          <Experience
            position='Lead Server'
            company="Marisa's Mexican Restaurant"
            time='Jun 2012 - Jan 2018'
            address='Downey, California, United States'
            bullets={[
              'Excelled as a lead server by mastering detailed knowledge of the menu, including daily specials, seasonal offerings, and a variety of craft beers, which enhanced guest experience and maximized gratuity earnings.',
              'Demonstrated ability to deliver exceptional customer service with a friendly demeanor in a fast-paced setting, successfully managing multiple tasks simultaneously.'
            ]}
          />

            </ul>
        </div>
    </div>
    )
}
export default NonTechnical