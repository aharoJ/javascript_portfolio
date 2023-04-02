import React from 'react'
import Logo from './Logo'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Navbar = () => 
{
    return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between
    dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8
    '>
        <DesktopNav/> 
        <MobileNav/>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo/>
        </div>
    </header>
  )
}

export default Navbar