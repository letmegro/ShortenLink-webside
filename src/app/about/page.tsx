'use client'
import { useEffect } from "react";
import Image from 'next/image';
import logo from 'public/images/logo.svg';
import fb from "public/images/icon-facebook.svg";
import twitterX from "public/images/icon-twitter.svg";
import pinterest from "public/images/icon-pinterest.svg";
import instagram from "public/images/icon-instagram.svg";
//@ts-ignore
// import navToggle from '../toggleScript.tsx';

export default function About(){
    useEffect(() => {
      // navToggle
    }, []);
    return (<>
        {/* nav */}
        <nav className='relative container mx-auto p-6'>
            {/* flex container */}
            <div className='flex items-center justify-between'>
            {/* logo container/menu */}
            <div className='flex items-center space-x-20'>
                <Image src={logo} alt=''/>
                <div className='hidden md:flex space-x-8 font-bold'>
                </div>
            </div>
            {/* right buttons menu */}
            <div className='hidden md:flex items-center space-x-6 font-bold text-grayishViolet'>
                
            </div>
            <div className='md:hidden'>
                <button id='menu-btn' type='button' className='z-40 block hamburger md:hidden focus:outline-none'>
                    <span className='hamTop'></span>
                    <span className='hamMiddle'></span>
                    <span className='hamBottom'></span>
                </button>
                </div>
            </div>
            {/* add drop menu */}
            <div id="menu" className="absolute hidden md:hidden p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100">
                <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
                    
                </div>
            </div>
        </nav>
        
        {/* body */}
        <main>
            <div className="items-center justify-center p-3 md:p-12">
                <h1 className="text-center mx-auto font-bold text-[50px] text-veryDarkBlue">
                    About Project
                </h1>
            </div>

        </main>
        
        {/* footer */}
        <footer className="py-16 bg-veryDarkViolet">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
          <Image src={logo} alt=''/>

          {/* menus container */}
          <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
            {/* menu 1 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">Features</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Link Shortening</a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Branded Links</a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Analytics</a>
              </div>
            </div>
            {/* menu 2 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">Resources</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Blog</a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Developers</a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Support</a>
              </div>
            </div>
            {/* menu 3 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">Company</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="/" className="capitalize text-grayishViolet hover:text-cyan">Home</a>
                <a href='about' className="capitalize text-grayishViolet hover:text-cyan">About</a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Careers</a>
                <a href="#" className="capitalize text-grayishViolet hover:text-cyan">Contact</a>
              </div>
            </div>
          </div>
          {/* socials */}
          <div className="flex space-x-6">
          
                {/* icon 1 */}
                <div className='h-8 group'>
                  <a href='#'>
                    <Image className='h-6 ficon' src={fb} alt=''></Image>
                  </a>
                </div>
                {/* icon 2 */}
                <div className='h-8 group'>
                  <a href='#'>
                    <Image className='h-6 ficon' src={instagram} alt=''></Image>
                  </a>
                </div>
                {/* icon 3 */}
                <div className='h-8 group'>
                  <a href='#'>
                    <Image className='h-6 ficon' src={pinterest} alt=''></Image>
                  </a>
                </div>
                {/* icon 4 */}
                <div className='h-7 ficon group bg-white'>
                  <a href='#'>
                    <Image className='h-8 ficon' src={twitterX} alt=''></Image>
                  </a>
                </div>
          </div>
        </div>
      </footer>
    </>);
}