import Image from "next/image";
import logo from 'public/images/logo.svg';

export default function Nav(){
    return (<>
        {/* nav */}
        <nav className='relative container mx-auto p-6'>
        {/* flex container */}
        <div className='flex items-center justify-between'>
            {/* logo container/menu */}
            <div className='flex items-center space-x-20'>
            <Image src={logo} alt=''/>
            <div className='hidden md:flex space-x-8 font-bold'>
                <a href='#' className='text-grayishViolet hover:text-veryDarkViolet'>Features</a>
                <a href='#' className='text-grayishViolet hover:text-veryDarkViolet'>Pricing</a>
                <a href='#' className='text-grayishViolet hover:text-veryDarkViolet'>Resources</a>
            </div>
            </div>
            {/* right buttons menu */}
            <div className='hidden md:flex items-center space-x-6 font-bold text-grayishViolet'>
            <div className='hover:text-veryDarkViolet cursor-pointer'>
                Login
            </div>
            <a href='#' className='px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70'>Sign up</a>
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
            <a href="#" className="w-full text-center hover:text-cyan">Features</a>
            <a href="#" className="w-full text-center hover:text-cyan">Pricing</a>
            <a href="#" className="w-full text-center hover:text-cyan">Resources</a>
            <a href="#" className="w-full pt-6 border-t border-gray-400 text-center hover:text-cyan">Login</a>
            <a href="#" className="w-full py-3 text-center rounded-full bg-cyan hover:opacity-70">Sign Up</a>
            </div>
        </div>
        </nav>
    </>
    );
}