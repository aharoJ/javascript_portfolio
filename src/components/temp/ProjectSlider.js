import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const ProjectSlider = ({ title, projects }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4">
      <button
        className="flex justify-between items-center w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        {isOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <div className="flex overflow-x-scroll gap-4 mt-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-none w-60 h-40 bg-gray-200 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-medium p-4">{project}</h3>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectSlider;