import React from 'react'
import { motion } from 'framer-motion'


const Skill= ({name, x, y})=>
{
  
  return (
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
    py-3 px-6 shadow-dark cursor-pointer absolute  dark:text-dark dark:bg-light 
    lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 
    xs:bg-dark xs:text-light
    xs:dark:bg-light xs:dark:text-dark
     xs:p-[0.1rem]  xs:text-xs xs:font-medium xs:tracking-tight
    '
    whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x, y:y, transition:{duration:2.5}} }
    // transition={{duration:2.5,  }}
    viewport={{once:true}}
    >
      {name}
    </motion.div>
  )
}


const Skills = () => {
  return (
    <>


      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'> Core Skills </h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      
      '>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
        p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light 
        lg:p-6 md:p-4
        xs:p-[0.1rem] xs:text-xs xs:font-medium
        '
        whileHover={{scale:1.05}}
        >Core

        </motion.div> 
        <Skill name="Java" x="0vw" y="-12vw" />
        <Skill name="Python" x="0vw" y="12vw" />
        <Skill name="Shell" x="11vw" y="0vw" />
        <Skill name="DSA" x="-11vw" y="0vw" />

        <Skill name="ML" x="0vw" y="-26vw" />
        <Skill name="DL" x="0vw" y="26vw" />
        
        <Skill name="Databases" x= "-27vw" y="-14vw"/>
        <Skill name="MySQL" x="-29vw" y="2vw"/>
        <Skill name="NoSQL" x="-27vw" y="18vw"/>
        
        <Skill name="Typescript" x= "27vw" y="-14vw"/>
        <Skill name="ReactJs" x="27vw" y="18vw"/>
        <Skill name="NextJs" x="30vw" y="2vw"/> 
        
        <Skill name="Spring-Boot" x= "-14vw" y="-26vw"/>    
        <Skill name="Django" x= "14vw" y="26vw"/>    


        <Skill name="Hacking" x="16vw" y="-26vw"/>
        <Skill name="Architecture" x="-14vw" y="26vw" />
      </div>
    </>
  )
}

export default Skills