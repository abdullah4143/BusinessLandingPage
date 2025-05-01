import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import HeroImg from '../assets/hero-image.png'

const Hero = () => {
  return (
    <section id='home' className='pt-20 mx-auto px-10 container flex flex-col md:flex-row justify-between items-center pb-4'
    >
        <div className='w-full md:w-1/2 space-y-8'>
        
            <div className='flex items-center gap-2 bg-gray-100 w-fit px-4 py-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer group'>
                <span className='text-blue-600 group-hover:scale-110 transition-transform'>⭐</span>
                <span className='font-medium text-sm'>jump start your growth</span>
            </div>
        
            
            <h1 className='text-4xl lg:text-5xl font-bold relative leading-tight'>We boost the growth for
            <span className='relative inline-block'>
                <span className='relative z-10 text-blue-500'>Startup to Fortune 500</span>
                <span className='absolute bottom-0 left-0 h-0.5 w-full bg-blue-200/60 z-0'></span>
            </span>
                 Companies
            <span className='inline-block ml-1 animate-pulse'>⏰</span></h1>
            

            <p className='text-gray-600 text-lg md:text-xl max-w-2xl'>Get the most accurate leads, sales people training and conversations, tools and more - all within the same billing.</p>

            <div className='flex gap-2 w-90'>
                <input type="email" placeholder='Email address' className='flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all'  />
                <button className='px-8 py-4 text-white cursor-pointer  bg-blue-500 rounded-xl hover:bg-blue-600 hover:shadow-blue-400 hover:shadow-lg transition-all'><FaArrowRight /></button>
            </div>  

        </div>
        
        <div className='w-full mt-10 md:w-1/2 space-y-8 md:mt-0 pl-0 md:pl-12 '>
            <div className='relative'>

            <img src={HeroImg} className='relative rounded-lg hover:scale-[1.02] transition-transform duration-300' />
            </div>
        </div>

    </section>
  )
}

export default Hero