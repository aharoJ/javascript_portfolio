import Link from 'next/link'
import React from 'react'
import { CircularText } from './Icons'

const aharoJ = () => {
  return (
    <div className="fixed left-4 bottom-4 
    flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute
    xs:right-0 xs:top-6 
    ">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className="text-black dark:text-white animate-spin-slow" />
            {/* <Link href='mailto:haro.j.angel@gmail.com'  */}
            <Link href='https://github.com/aharoJ' target={'_blank'}
            className='flex items-center justify-center 
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
            text-light shadow-md border border-solid border-dark w-16 h-16 rounded-full
            font-semibold hover:bg-light hover:text-dark
            dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
            md:w-14 md:h-14 md:text-[12px]
            '>
              aharoJ 
            </Link>
            {/* absolute  bg-black text-light shadow-md border border-solid border-dark w-16 h-16 rounded-full font-semibold
            dark:bg-light dark:text-dark dark:border-light hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light
            md:w-14 md:h-14 md:text-[12px] */}
        </div>
    </div>
  )
}

export default aharoJ
