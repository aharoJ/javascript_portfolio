import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Anon from 'public/images/profile/hacker-1.png';
import { LinkArrow } from '@/components/Icons';
import coder from 'public/images/profile/coding.png'
import TransitionEffect from '@/components/TransitionEffect';
import Circular_aharoJ from '@/components/aharoJ';

export default function Home() {
  return (
    <>


      <Head>
        <title>aharoJ | Home</title>
        <meta name="description" content="Created by aharoJ" />
      </Head>


      <TransitionEffect/> 




      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            

            
            {/* <div className='w-1/2 md:w-full'>
              <Image src={Anon} alt='aharoJ' className='w-full h-auto md:inline-block md:w-full'
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div> */}
            <div className='relative flex  w-[40%] md:w-full xs:w-[80%]  
            rounded-2xl border-2 border-solid border-dark hover:border-4 hover:border-pink-900 
            bg-light  dark:bg-gray-600 dark:hover:border-pink-900 mb-5
                '>
                    <div className=' absolute top-0 -right-3 -z-20 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-white'/>
                    <Image  src={Anon} alt='anon-pic' className='w-full h-auto rounded-2xl'
                    priority
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw"
                    />
            </div>
            



            <div className='w-1/2 flex flex-col items-center self-center lg:w-full'>
              <AnimatedText text='eager to make a lasting impact in the world.  ' className='!text-6xl !text-left 
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
              '/>
              
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              Passionate for software architecture, machine learning, pipelines, and hacking, I am committed to life long learning and embody Albert Einsteins words: Wisdom is not a product of schooling but of the lifelong attempt to acquire it.
              </p>
              
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href='/aharoJ_resume.pdf' target={'_blank'}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg
                hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light
                hover:dark:text-light md:p-2 md:mx-4
                text-base xs:text-xs xs:p-0.5
                '
                download={true}
                > Professional Resume
                {/* <LinkArrow className={'xl:hidden'} /> */}
                </Link> 

{/* lala                 */}

                <Link href='/aharoJ_handcrafted_resume.pdf' target={'_blank'}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg
                hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark
               dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light
                hover:dark:text-light md:p-2 md:mx-4
                ml-8 md:ml-1 mr-8 md:mr-1 
                text-base xs:text-xs xs:p-0.5
                '
                download={true}
                > Handcrafted Resume
                {/* <LinkArrow className={'xl:hidden'} /> */}
                </Link> 

{/* lala                 */}

                <Link href='mailto:haro.j.angel@gmail.com' target={'_blank'}
                className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >
                   Contact
                </Link>                
              
              </div>
            </div>
          </div>
        </Layout>
        
        {/* CIRCULAR AHAROJ ON LEFT BOTTOM CORNER */}
        <Circular_aharoJ/>


        <div className='absolute right-8 bottom-8 inline-block w-40 md:hidden'>
          <Image src={coder} alt='anon-coder' className='w-full h-auto'/>
        </div>

      </main>





    </>
  )
}
