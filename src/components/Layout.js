import React from 'react'

const Layout = ({children, className=''}) => {
  return (
    // ORIGINAL 
    // <div className={`w-full h-full inline-block z-0 bg-light p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8  dark:bg-black ${className}`}>
    <div className={`w-full h-full inline-block z-0 bg-light p-12 lg:p-4 md:p-6  dark:bg-black ${className}`}>
        {children}
    </div>
  )
}

export default Layout
