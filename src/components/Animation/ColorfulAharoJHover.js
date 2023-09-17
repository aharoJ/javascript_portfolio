import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const ColorfulAharoJHover = () => {
  return (
    <div className='flex items-center justify-center '>
        <MotionLink href='/'
        className='text-dark dark:text-light flex items-center justify-center rounded-full text-5xl font-thin tracking-tighter order-1
        sm:font-thin sm:text-5xl
        '
        whileHover={{
            color: ["#6B7280", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
            transition: {duration: 1, repeat: Infinity}
        }}
        >
            aharoJ
        </MotionLink>
    </div>
  )
}

export default ColorfulAharoJHover;
