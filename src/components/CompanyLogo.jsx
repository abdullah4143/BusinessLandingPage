import React from 'react'
import slack from '../assets/slack.png'
import amazon from '../assets/amazon.png'
import woocommerce from '../assets/woocommerce.png'
import meundies from '../assets/meundies.png'
import sitepoint from '../assets/sitepoint.png'
const Companylogo = () => {

    const logos = [slack,woocommerce,amazon,meundies,sitepoint];
  return (
    <div className='w-full container  mx-auto py-20  overflow-hidden flex flex-col md:flex-row align-baseline md:items-start align-center gap-8'>

        <div className='w-[300px] shrink-0 px-5 tect-gray-600 border-l-4 border-blue-400 bg-white py-4 z-10 text-base md:text-xl font-semibold text-left shadow-md shadow-blue-300/50'>
            Proud Partner at <br />Hubspot & Segemnt
        </div>
        

        <div className='flex whitespace-nowrap animate-marquee mt-4'>
            {logos.map((logo,key)=>{
                return <img key={key} src={logo} className='mx-12  h-8 w-36 object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all '/>
            })}
            {logos.map((logo,key)=>{
                return <img key={key} src={logo} className='mx-12  h-8 w-36 object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all'/>
            })}
        </div>



    </div>
  )
}

export default Companylogo