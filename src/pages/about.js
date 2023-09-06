import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import profile_pic from 'public/images/aharoJ.jpg';
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Expirience from '@/components/Expirience'
import Education from '@/components/Education'
import Research from '@/components/Research'
import TransitionEffect from '@/components/TransitionEffect'


const AnimateNumbers= ({value})=>
{
    const ref= useRef(null);

    const motionValue= useMotionValue(0);
    const springValue= useSpring(motionValue, { duration:8000})
    const isInView= useInView(ref, {once: true})


    useEffect(() => 
    {
        if (isInView){
            motionValue.set(value)
        }
        
    }, [isInView, value, motionValue])


    useEffect(() => {
        springValue.on("change", (latest)=> {
            if (ref.current && latest.toFixed(0) <= value){
                ref.current.textContent= latest.toFixed()
                }
        })
    }, [springValue, value])
    
    

    return <span ref={ref}></span>
}


const About = () => {
  return (
    <>
        <Head>
            <title> aharoJ | About </title>
            <meta name="description" content="Created by aharoJ" />
        </Head>
        <TransitionEffect/>


        
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16 '>
            <AnimatedText text='aharoJ' className='mb-16 lg:!text-7xl sm:text-6xl xs:text-4xl sm:mb-8 !normal-case !tracking-tighter !font-light'/>
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 flex flex-col items-start justify-center xl:col-span-4 md:order-2 md:col-span-8 '>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'> Biography </h2>
                        <p className='font-normal '> <span className=' font-bold text-3xl m-2'> About </span> Open-source advocate and have contributed to numerous open-source projects like Alacritty, Starship, Vivaldi and undertaken real-world projects like a Home-value predictor and a Capstone project for Machine-Learning. Currently working on 2 backend projects such as Twitter.io and Apple.io </p>
                        <p className='font-normal'> <span className=' font-bold text-3xl m-2'> Non-Tech</span>I enjoy physical activities such as the gym, boxing, soccer. A fan of Anime, my picks Vinland - FMA - AOT. I also enjoy editing videos, images, and producing Youtube videos.</p>
                        <p className='font-normal '> <span className=' font-bold text-3xl m-2'> Aspiration </span> I plan to pursue a PhD in computer science and become a professor where I can share my knowledge and passion for technology with future generations. </p>
                </div>
                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark hover:border-4 hover:border-pink-900 
                bg-light p-8 dark:bg-dark dark:hover:border-pink-900 xl:col-span-4 md:order-1 md:col-span-8 
                '>
                    <div className=' absolute top-0 -right-3 -z-20 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light/60'/>
                    <Image  src={profile_pic} alt='aharoJ' className=' w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                    />
                </div>



                <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimateNumbers value={25}/>
                        </span>
                        <h2 className='text-lg font-light capitalize text-dark/75 tracking-wider dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                            Students | Mentees helped
                        </h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimateNumbers value={15}/>
                        </span>
                        <h2 className='text-lg font-light capitalize text-dark/75 tracking-wider dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                            Projects Completed
                        </h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimateNumbers value={3}/>
                        </span>
                        <h2 className='text-lg font-light capitalize text-dark/75 tracking-wider dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                            Years of Experience 
                        </h2>
                    </div>
                </div>



            </div>
            <Skills/>
            <Expirience/>
            {/* <Education/> */}
            <Research/>
            </Layout>
        </main>
    </>
  )
}

export default About