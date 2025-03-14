"use client"
import Image from 'next/image';
import { useEffect } from 'react';
import illustration from "../../public/images/illustration-working.svg";
import iconBrandRec from "../../public/images/icon-brand-recognition.svg";
import iconDetaledRec from "../../public/images/icon-detailed-records.svg";
import iconFullyCus from "../../public/images/icon-fully-customizable.svg";

import Nav from './nav';
import Footer from './footer';
//@ts-ignore
import { setupListener } from './errMsg';
import { createMobileNav } from "./toggleScript";

export default function Home() {
  useEffect(() => {createMobileNav(); setupListener();},[]);
  return (
    <main>
      {/* nav bar */}
      <Nav/>
      {/* end of nav bar */}
      <section id='hero'>
        <div className='container flex flex-col-reverse mx-auto p-6 lg:flex-row'>
          {/* content */}
          <div className='flex flex-col space-y-10 mb-44 lg:mt-16 xl:mb-52 lg:w-1/2'>
            <h1 className='text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left'>
              More than just shorter links
            </h1>
            <p className='text-2xl text-center text-gray-400 lg:max-w-md lg:text-left'>
              Sometimes links can be a bit too long and you want to shorten it for readability or simply to hide a YouTube link in order to
               <a className='hover:text-green-700 transition duration-200 hover:font-bold' target='_blank' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'> Rick Roll </a> 
               a friend
            </p>
            <div className='mx-auto lg:mx-0'>
              <a className='cursor-pointer py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70'>
                Get Started
              </a>
            </div>
          </div>
          {/* image */}
          <div className='mb-24 mx-auto md:w-180 lg:w-1/2 lg:mb-0'>
            <Image src={illustration} alt=''/>
          </div>
        </div>
      </section>
      {/* sorten sec */}
      <section id='shorten' className='relative bg-gray-100'>
        {/* shorten container */}
        <div className='max-w-4xl mx-auto p-6 space-y-6'>
          <form id='link-form' className='relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3'>
            <input id='link-input' type='text' className='flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none' placeholder='Shorten URL'/>
            <button id='shorten-btn' className='px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2'>
              Shorten
            </button>
            {/* error message div */}
            <div id='err-msg' className='absolute left-7 bottom-3 text-red text-sm italic'></div>
          </form>
          {/* links */}
          {/* link 1 */}
          <div id='linkContainer' className='hidden flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row'>
            <p id='ogLink' className='font-bold text-center text-veryDarkViolet md:text-left'>
              {/* original link */}
            </p>
            <div className='flex-col flex items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0'>
              <div id='shortenedLink' className='font-bold text-cyan'>
                {/* shortened link */}
              </div>
              <button id='copyBtn' className='p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none'>
                Copy
              </button>
            </div>
          </div>
          <div id='loader' className='hidden mx-auto flex-col items-center justify-between w-full p-6 rounded-lg'>
            <span className='i1'></span>
            <span className='i2'></span>
            <span className='i3'></span>
            <span className='i4'></span>
            <span className='i5'></span>
            <span className='i6'></span>
            <span className='i7'></span>
            <span className='i8'></span>
          </div>
        </div>
      </section>
      {/* stats section */}
      <section id='stats' className='py-24 bg-gray-100'>
        <div className='container mx-auto px-3'>
          <h2 className='text-4xl mb-6 font-bold text-center'>
            Advanced Statistics
          </h2>
          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
        </div>
      </section>
      {/* feature box sections */}
      <section id="features" className='pb-32 bg-gray-100'>
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          {/* horizontal line */}
          <div className="hidden absolute top-24 left-16 h-3 bg-cyan md:block w-10/12"></div>
          {/* vertical */}
          <div className="absolute left-1/2 w-2 h-full -ml-1 bg-cyan md:hidden"></div>
          {/* box 1 */}
          <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            {/* container */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full ficon2 bg-veryDarkViolet">
                <Image src={iconBrandRec} className='ficon' alt=''/>
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Brand Recognition
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Boost your brand recognition with each click.
              Generic links don{`'`}t mean a thing. Branded links help install confidence in your content.
            </p>
          </div>
          {/* box 2 */}
          <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-8">
            {/* container */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center ficon2 justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <Image src={iconDetaledRec} className='ficon' alt=''/>
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Detailed Records
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Gain insights into who is clicking your links.
              Knowing when and where people engage with your content helps make better and informed decisions for you business.
            </p>
          </div>
           {/* box 3 */}
           <div className="relative duration-500 flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-16">
            {/* container */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              <div className="flex items-center ficon2 justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <Image src={iconFullyCus} className='ficon' alt=''/>
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Fully Customizable
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Improve brand awareness and content discoverability through customizable links, supercharging audiance engagment.
            </p>
          </div>
        </div>
      </section>
      <section id="cta" className="py-24 bg-darkViolet">
        <div className="flex flex-col p-2 space-y-6">
          <h5 className="mx-auto space-y-10 text-4xl font-bold text-white text-center">
            Shorten Link Now
          </h5>
          <a href='#link-form' className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLight md:text-base md:py-3 focus:outline-none">
            Go to shortener
          </a>
        </div>
      </section>
      
      {/* footer */}
      <Footer/>
      {/* end of footer */}

    </main>
  );
}
