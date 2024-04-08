import AnimatedText from '@/components/animation/TextAnimation'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import Head from 'next/head'
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '@/components/animation/TransitionEffect'
const FramerImage= motion(Image);
import under_devlopment from 'public/images/articles/actively_dev.jpeg';
import more_development from 'public/images/articles/work-to-be-done.jpeg'
import brain from 'public/images/articles/brain.jpg'

const MovingImg=({title, img, link})=>
{
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef= useRef(null);

  function handleMouse(event)
  { 
    imgRef.current.style.display= 'inline-block';
    x.set(500)
    // x.set(event.pageX
    y.set(0);
  }

  function handleMouseLeave(event)
  { 
    imgRef.current.style.display= 'none';
    x.set(0);
    y.set(0);
  }


  return(
<Link href={link} target='_blank'
  onMouseEnter={handleMouse}
  onMouseLeave={handleMouseLeave}
>
  <h2 className='capitalize text-xl font-semibold hover:underline hover:underline-offset-4 hover:decoration-sky-400/80 '>
    {title}
  </h2>

  <FramerImage 
    style={{x:x, y:y}} 
    initial={{opacity:0}}
    whileInView={{opacity:1, transition:{duration:1}}}
    ref={imgRef}
    src={img} 
    alt={title} 
    className='z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'
    
  />
</Link>

  )
}

const Article=({img, title, date, link})=>
{
  return(
    <motion.li className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center
      justify-center bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-8 border-b-4 dark:border-light dark:text-light dark:bg-dark
      sm:flex-col
      '
      initial={{y:200}}
      whileInView={{y:0, transition:{duration:0.5, ease:'easeInOut'}}}
      viewport={{once:true}}
    >
      <MovingImg title={title} img={img} link={link}
      
      />
      <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'> {date} </span>
    </motion.li>

  )
}

const FeatureArticle= ({img, title, time, summary, link})=> 
{
  return(
    <li className='relative col-span-1 w-full bg-light border-2 border-solid border-dark p-4 rounded-2xl dark:border-light dark:text-light dark:bg-dark'>
<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark
        rounded-br-3xl  dark:bg-light xs:rounded-br-2xl xs:-right-1.5 '/>
      <Link 
          href={link} 
          target='_blank'
          className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
              <FramerImage src={img} alt={title} className='w-full h-auto'
              whileHover={{scale: 1.05}}
              transition={{duration:0.2}}
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
      </Link>
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline hover:decoration-sky-400/80 xs:text-lg '>{title}</h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
    </li>
  )
}

const articles = () => 
{
  return (
    <>
        <Head>
            <title> aharoJ | Articles </title>
            <meta name="description" content="Created by aharoJ" />
        </Head>
        <TransitionEffect/>



        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light '>
          <Layout className='pt-16'>
            <AnimatedText text='M y B l o g s | A r t i c l e s' 
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl normal-case tracking-tighter font-extralight
            '/>
            <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16 '>
              <FeatureArticle
              title='this section is actively under devoplment'
              summary='abcdefghijklmnopqrstuvwxyz'
              time='9 min read'
              link='/'
              img={under_devlopment}
              /> 
              
              
              <FeatureArticle
              title='this section is actively under devoplment'
              summary='abcdefghijklmnopqrstuvwxyz'
              time='9 min read'
              link='/'
              img={brain}
              /> 
            </ul>
            <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'> Actively in Development</h2>
            <ul>
              <Article
              title='abcdefghijklmnopqrstuvwxyz'
              date='June 30, 1990'
              link='/'
              img={more_development}
              />
              
              <Article
              title='abcdefghijklmnopqrstuvwxyz'
              date='Jan 00, 100 B.C.'
              link='/'
              img={more_development}
              />
              
              <Article
              title='abcdefghijklmnopqrstuvwxyz'
              date='December 44, 2048'
              link='/'
              img={more_development}
              />

            </ul>
            </Layout>
        </main>
    </>
  )
}

export default articles
