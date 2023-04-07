import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.3,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const AnimatedText = ({ text, className = '' }) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0 '>
      <motion.h1
        className={`inline-block w-full text-black font-bold capitalize text-9xl dark:text-light ${className}`}
        variants={quote}
        initial='initial'
        animate='animate'
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className='inline-block'
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
