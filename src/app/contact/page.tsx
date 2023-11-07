'use client'
import { useEffect } from "react";
import Image from 'next/image';
import hardAtWork from 'public/images/at-work.svg';
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
        
        {/* body */}
        <main>
            <div className="items-center justify-center p-3 md:p-12">
                <h1 className="text-center mx-auto font-bold text-[50px] text-veryDarkBlue">
                    Contact Us
                </h1>
                <p className="text-xs text-gray-400 text-center py-4">
                  The contact will be automated and the email will not be a real contact method but more of an automated email that will allow me to experiment with email services
                </p>
                <div className="mx-auto justify-center items center w-full px-3 md:px-6 py-4 md:py-12">
                  <p className="text-md font-semibold text-center">
                    This page is also under construction please be patient while the developer comes up with a pretend contact page for this pretend company website 
                    and implements an automated email contact section!
                  </p>
                  <a href="/"><Image alt="Hard at work" className="ficon w-64 items-center justify-center mx-auto p-4" src={hardAtWork}></Image></a>
                </div>
            </div>

        </main>
        
        {/* footer */}
        <Footer/>
        {/* end of footer tag :3 */}
    </>);
}

