import React from "react";
import { motion } from "framer-motion";

const ColorfulAharoJHover = () => {
  const handleScrollToBottom = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex items-center justify-center ">
      <motion.div
        onClick={handleScrollToBottom}
        className="flex items-center justify-center rounded-full text-6xl  mt-2 font-thin tracking-tighter order-1
                text-dark dark:text-light
                md:font-thin md:text-5xl md:mt-0
                cursor-pointer" // This gives the hover hand effect
        whileHover={{
          color: [
            "#6B7280",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        aharoJ
      </motion.div>
    </div>
  );
};

export default ColorfulAharoJHover;

// HYPER LINK INSTEAD OF GO DOWN
// const MotionLink = motion(Link);
// const ColorfulAharoJHover = () => {

//   return (
//     <div className='flex items-center justify-center '>
//         <MotionLink href='/'
//         className='flex items-center justify-center rounded-full text-5xl font-thin tracking-tighter order-1
//         text-dark dark:text-light
//         sm:font-thin sm:text-5xl
//         '
//         whileHover={{
//             color: ["#6B7280", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
//             transition: {duration: 1, repeat: Infinity}
//         }}
//         >
//             aharoJ
//         </MotionLink>
//     </div>
//   )
// }
