import React from 'react'
import Hero from './components/hero'
import Navbar from '../components/navbar'
import Website from './components/website'
import Cta from '../components/cta'
const page = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex gap-10  w-[1280px] ">
        <Navbar />
        <div className=" w-[1140px]">



          <Hero />

          <div className='flex flex-col items mt-32'>
            <h2 className='tracking-tighter text-[50px] text-center leading-[-10px]'> Your business
              <span className={`font-Edwardian tracking-tight font-medium text-[60px] md:text-[90px] mx-3 relative inline-block transition-all duration-400 `}>
                deserves more
              </span>
              <br />
              <p className='-mt-12'>than a template and a Canva logo.
              </p>
            </h2>
            <p className='text-center font-Aeonik mt-1 '>We’re here to craft bold, scroll-stopping digital experiences that actually get people to stick around (and click).</p>
          </div>
          <Website />


          <div className='mt-40'>
            <Cta />
          </div>        </div>
      </div>
    </div>
  )
}

export default page
