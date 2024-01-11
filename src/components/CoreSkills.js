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


const CoreSkills = () => {
  return (
    <>


      <h2 className='font-bold text-8xl mt-64 mb-12 w-full text-center md:text-6xl md:mt-16'> Core Skills </h2>
      <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] md:h-[40vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightSm sm:dark:bg-circularDarkSm
      
      '>
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
        p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light 
        lg:p-6 md:p-4
        xs:p-[0.1rem] xs:text-xs xs:font-medium
        '
        whileHover={{scale:1.05}}
        >Core

        </motion.div> 
        <Skill name="Java" x="0vw" y="-10vw" />
        <Skill name="Python" x="0vw" y="10vw" />
        <Skill name="Shell" x="13vw" y="0vw" />
        <Skill name="DSA" x="-13vw" y="0vw" />

        <Skill name="ML" x="10vw" y="-13vw" />
        <Skill name="DL" x="-10vw" y="13vw" />
        <Skill name="Js" x="10vw" y="13vw" />
        <Skill name="Ts" x="-10vw" y="-13vw" />
        
        <Skill name="Spring-Boot" x="0vw" y="-20vw"/>    
        <Skill name="Hacking" x= "-26vw" y="-14vw"/>
        <Skill name="Dot-configs" x= "30vw" y="-14vw"/>
        <Skill name="Django" x= "0vw" y="20vw"/>    

        <Skill name="Databases" x="-30vw" y="2vw"/>
        <Skill name="MySQL" x="-26vw" y="13vw" />
        <Skill name="NoSQL" x="-18vw" y="20vw"/>
        
        
        <Skill name="Architecture" x="30vw" y="2vw"/> 
        <Skill name="ReactJs" x="18vw" y="20vw"/>
        <Skill name="NextJs" x="28vw" y="13vw"/>        
        
        
        
        
        

      </div>
    </>
  )
}

export default CoreSkills