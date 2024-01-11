import React from 'react';
import ColorfulAharoJHover from 'src/components/Animation/ColorfulAharoJHover.js';
import Desktop from './DesktopNav.js';
import Mobile from './MobileNav.js';

const Navbar = () => {
    return (
        <header className='sticky top-0 w-full px-0 py-0 font-medium flex items-center justify-between z-10 lg:px-16 md:px-6 md:py-5   
        dark:text-light backdrop-blur-sm  text-dark bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 '>
            
            <Desktop /> 
            <Mobile />
            <div className='absolute left-[50%] top-0 translate-x-[-50%]'>
                <ColorfulAharoJHover/>
            </div>
        </header>
    )
}






export default Navbar