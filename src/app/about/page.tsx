'use client'
import { useEffect } from "react";
import Image from 'next/image';
import logo from 'public/images/logo.svg';
import fb from "public/images/icon-facebook.svg";
import twitterX from "public/images/icon-twitter.svg";
import pinterest from "public/images/icon-pinterest.svg";
import instagram from "public/images/icon-instagram.svg";
import hardAtWork from 'public/images/at-work.svg';
import { createMobileNav } from "../toggleScript";
import Nav from "../nav";

export default function About(){
    useEffect(() => {
      createMobileNav();
    }, []);
    return (<>
        {/* nav bar */}
        <Nav/>
        {/* end of nav bar */}
        
        {/* body */}
        <main>
            <div className="items-center justify-center p-3 md:p-12">
                <h1 className="text-center mx-auto font-bold text-[50px] text-veryDarkBlue">
                    About Project
                </h1>
                <div className="mx-auto justify-center items center w-full px-3 md:px-6 py-4 md:py-12">
                  <p className="text-md font-semibold text-center">
                    This page is under construction please be patient while the developer comes up with a pretend about for this pretend company website.
                  </p>
                  <a href="/"><Image alt="Hard at work" className="ficon w-64 items-center justify-center mx-auto p-4" src={hardAtWork}></Image></a>
                </div>
            </div>

        </main>
        
        {/* footer */}
        <footer className="py-16 bg-veryDarkViolet">
        <div className="container md:px-2 flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
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

