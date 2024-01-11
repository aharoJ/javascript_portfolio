import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import ScrollListIcon from 'src/components/Animation/ScrollListIcon.js'


const Experience=({position, company, time, address, bullets})=>
{
  const listItemRef= useRef(null);
  return (
    <li ref={listItemRef} className='my-8 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <ScrollListIcon reference={listItemRef} />
        
        <motion.div
            initial={{ y: 58, x: 0 }}
            whileInView={{ y: 0, x: 0 }}
            transition={{ duration: 1.5, type: 'spring' }}
        >
          <h3 className='font-bold text-4xl text-gray-400 dark:text-orange-200 md:text-xl'>
            {position}&nbsp; 
            
            <span className='text-3xl font-semibold md:text-xl underline 
            underline-offset-[7px] decoration-dashed decoration-1 text-dark/80 dark:text-light/80'> @{company}</span>
          </h3>

          <span className='capitalize block text-xl font-medium mt-[2px]
          md:text-[12px] text-dark/75 dark:text-light/75 md:mt-2'>
              {time} | {address}
          </span>


          {bullets && (
              <ul className='list-disc mt-2'>
                  {bullets.map((bullet, index) => (
                      <li className='ml-4 mt-2 text-xl font-medium dark:text-light text-dark/90 md:text-base' key={index}>
                          {bullet}
                      </li>
                  ))}
              </ul>
          )}

        </motion.div>
    </li>
  );
}

export default Experience