import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DotFilesSection = ({ projects }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <section className="my-5 border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md">
      <motion.header 
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <h2 className="text-xl font-semibold text-gray-700">Dot Files {isOpen ? '[open]' : '[closed]'}</h2>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Icon can be placed here */}
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mt-4 overflow-x-auto"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex space-x-4">
              {projects.map((project, index) => (
                <motion.div key={index} className="min-w-max p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  {/* Additional project details here */}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DotFilesSection;
