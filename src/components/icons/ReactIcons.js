import React, { useRef, useEffect } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';



const AnimateNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 8000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed();
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const LoadIcon = ({ icon: Icon, value, label, className }) => {
  return (
    <div className={`flex flex-col items-end justify-center ${className}`}>
      
      <div className="flex items-center">
        {Icon && <Icon size={50} className="mr-2" /> }
        <span className='inline-block text-5xl font-semibold md:text-3xl'>
          <AnimateNumbers value={value} />
        </span>
      </div>

      <h2 className='text-lg font-light capitalize text-dark/75 tracking-tight dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
        {label}
      </h2>
      
    </div>
  );
};

// Adjusting ReactIcons component to take props and pass them to Statistic
const ReactIcons = ({ icon, value, label, className }) => {
  return (
    <LoadIcon icon={icon} value={value} label={label} className={className} />
  );
};

export default ReactIcons;