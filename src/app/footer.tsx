import Image from "next/image";
import fb from "../../public/images/icon-facebook.svg";
import twitterX from "../../public/images/icon-twitter.svg";
import pinterest from "../../public/images/icon-pinterest.svg";
import instagram from "../../public/images/icon-instagram.svg";
import logo from '../../public/images/logo.svg';

export default function Footer(){
    return (<>
    <footer className="py-16 bg-veryDarkViolet">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
          <Image src={logo} alt=''/>

          {/* menus container */}
          <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
            {/* menu 1 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">Features</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="/#link-form" className="capitalize text-grayishViolet hover:text-cyan">Link Shortening</a>
              </div>
            </div>
            {/* menu 2 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">Resources</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="about-developer" className="capitalize text-grayishViolet hover:text-cyan">Developers</a>
              </div>
            </div>
            {/* menu 3 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white capitalize">Company</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="/" className="capitalize text-grayishViolet hover:text-cyan">Home</a>
                <a href='about' className="capitalize text-grayishViolet hover:text-cyan">About</a>
                <a href="careers" className="capitalize text-grayishViolet hover:text-cyan">Careers</a>
                <a href="contact" className="capitalize text-grayishViolet hover:text-cyan">Contact</a>
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