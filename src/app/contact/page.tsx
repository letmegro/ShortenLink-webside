'use client'
import { useEffect } from "react";
import Image from 'next/image';
import arrow from 'public/images/arrow.svg';
import cImg from 'public/images/contact-pages.png';
import eIcon from 'public/images/email-icon.svg';
import { createMobileNav } from "../toggleScript";
import Nav from "../nav";
import Footer from "../footer";

export default function About(){
    useEffect(() => {
      createMobileNav();
      
    }, []);
    return (<>
        {/* nav bar */}
        <Nav/>
        {/* end of nav bar */}
        
        {/* body*/}
        <main>
            <div className="h-fit max-w-full justify-center container flex flex-col md:flex-row items center mx-auto">
              <div className="pt-8  max-h-full lg:max-h-180 mx-auto md:w-2/3">
                  <Image className="cut h-full" alt="Connect" src={cImg}></Image>
                
              </div>
              <div className=" xl:mt-20 py-12 mx-4 pt-8 text-center md:w-1/3 md:items-center">
                <h1 className="text-center m-1 py-2 max-w-2xl text-4xl text-black font-semibold">Want to get in touch?</h1>
                <span className="line"></span>
                <p className="text-sm md:text-lg text-gray-500 md:text-left leading-5">
                  We{"'"}d be happy to hear from you regarding, personal requests, Business Inquires,
                  or any general questions/feedback you may have! {'\n'}
                  Contact us via email, Phone call, or our website form!
                </p>
              </div>
                
            </div>
            <div className="container my-4 hover:mt-0 hover:mb-0  mx-auto">
                  <div className="group cursor-pointer -space-y-8 transition-all duration-300 text-center justify-center items-center mx-auto">
                    <Image alt="continue down" className="group-hover:animate-arrow w-10 mx-auto duration-200 arrow transition-all" src={arrow}></Image>
                    <Image alt="continue down" className="hidden group-hover:animate-arrow1 duration-200 transition-all group-hover:block w-10 mx-auto arrow" src={arrow}></Image>
                    <Image alt="continue down" className="hidden delay-700 group-hover:animate-arrow2 duration-200 transition-all group-hover:block w-10 mx-auto arrow" src={arrow}></Image>
                    
                  </div>
            </div>
            
            {/* contact section */}
            <section id="contact">
              <div className="m-2 flex flex-col md:flex-row mt-20 justify-between">
                {/* map */}
                <div className="container mx-auto p-2 md:w-1/2">
                  <h1 className="select-none text-3xl md:text-4xl font-semibold text-center ">
                    Company Locations
                  </h1>
                  <span className="line"></span>
                  {/* map container */}
                  <div className="container mx-auto max-w-full p-4">
                    
                  </div>
                </div>
                <div className="xl:w-1/2 m-12">
                  {/* contact form */}
                  <form className="xl:w-1/2 space-y-4 md:mt-12 shadow-xl shadow-zinc-400 bg-gray-50 border-solid border-4 p-2 rounded-lg border-blue-900 container mx-auto">
                    <h1 className="select-none mb-2 text-3xl md:text-4xl font-semibold text-center">
                      Contact Us
                    </h1>
                    <div className="flex flex-row space-x-2">
                      {/* name inputs */}
                      <input placeholder="First Name" type="text" className=" input-decor w-1/2  text-center" required/>
                      <input placeholder="Last Name" type="text" className="input-decor w-1/2  text-center"  required/>
                    </div>
                    <input placeholder="Email" type="email" className="input-decor focus:scale-[1.02] w-full  text-center" required/>
                    <textarea id="textArea" placeholder="Message..." className="custom-scroll-tArea overflow-y-auto w-full resize-none focus:scale-[1.02] h-32 input-decor text-ellipsis" />
                    <div className="flex flex-row space-x-2">  
                      <input type="checkbox" className="ml-12 cursor-pointer" required/>
                      <p className="text-gray-400">By clicking the checkbox you agree to the terms and conditions</p>
                      
                    </div>
                    <button type="submit" className="hover:bg-green-700 hover:shadow-lg shadow-lg transition duration-200 scale-105 shadow-red hover:shadow-green-600 flex mx-auto border-2  bg-orange-800 text-white border-black py-2 px-10 rounded-2xl">
                      <p className="ml-7">Send</p>
                      <Image alt="" src={eIcon} className="mail stroke-white w-[1.5rem] ml-5"></Image>
                    </button>
                  </form>
                </div>
              </div>
            </section>

        </main>
        
        {/* footer */}
        <Footer/>
        {/* end of footer tag :3 */}
    </>);
}

