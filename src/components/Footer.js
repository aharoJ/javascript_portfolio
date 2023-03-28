import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between '>
            <span> {new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
            <Link href='https://aharoj.io' className='rounded-full underline-offset-4'> build with ...(<span className='text-primary text-2xl px-1'>&hearts; p &#9825;</span>)...</Link>
            </div>
            
            <Link href='https://aharoj.io'className=''> aharoJ </Link>
        </Layout>
    </footer>
  )
}

export default Footer