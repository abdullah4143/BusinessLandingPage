import React from 'react'
import { useState } from 'react';
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {


    const navlinks = [
        {link:'#home',label:'Home'},
        {link:'#about',label:'About'},
        {link:'#service',label:'Our Service'},
        {link:'#testimonial',label:'Testimonials'},
      ];
    
      const [activeLink ,setActiveLink] = useState('Home');
      const [isMenuOpen ,setIsMenuOpen] = useState(false);
    
    return (
        <nav className='top-0 left-0 right-0 backdrop-blur-sm z-50 border-b shadow-sm bg-white'>

        <div className='w-full flex container mx-auto items-center justify-between px-4 sm:px-4 lg:px-8 md:h-20 h-16 '>

            <div className='flex align-center justify-center cursor-pointer'>
            <div className='h-4 w-4 bg-red-500 rounded-full opacity-75 hover:opacity-100 transition-opacity z-10'></div>
            <div className='h-4 w-4 bg-blue-500 rounded-full hover:bg-blue-600 -mx-2'></div>
            </div>

            <button className='md:hidden p-2 transition-all duration-500' onClick={()=>setIsMenuOpen(!isMenuOpen)}> 
              {isMenuOpen === true ? <FaXmark className='size-5' /> : <FaBars className='size-5'/>}
            </button>

            <div className='hidden md:flex items-center gap-10 cursor-pointer'>
            {navlinks.map((link,key)=>{
                return <a
                key={key}
                href={link.link}
                onClick={() => setActiveLink(link.label)}
                className={`text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 ${
                activeLink === link.label
                    ? 'text-blue-800 opacity-100 after:w-full'
                    : 'text-gray-500 opacity-75 after:w-0 hover:after:w-full'
                }`}
            >
                {link.label}
            </a>
            
            })}

            </div>

            
            <button className='hidden md:flex cursor-pointer px-4 py-3 bg-blue-500 rounded-lg text-white text-sm hover:bg-blue-600 hover:scale-105 transition-all duration-300'>
                Lets Connect
            </button>


            




        </div>

            {
            isMenuOpen && 
                <div className={`md:hidden block   cursor-pointer border-t border-gray-100 py-4 `}>
                    {navlinks.map((link,key)=>{
                        return <a key={key}
                             href={link.link}
                             onClick={()=>setActiveLink(link.label)}
                             className={` ${activeLink === link.label ? 'text-blue-500':'text-gray-500 hover:text-gray-800'} block px-4 my-3 text-center font-medium`}
                             >{link.label}</a>
                    })}
                    
                    <button className='flex cursor-pointer px-4 py-3 bg-blue-500 rounded-xl text-white text-sm hover:bg-blue-600 hover:scale-105 transition-all duration-300 w-100 justify-center mx-auto mt-5'>
                        Lets Connect
                    </button>

                </div>
            }

    </nav>
    )
}

export default Navbar