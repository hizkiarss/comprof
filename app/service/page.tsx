import React from 'react'
import Hero from './components/hero'
import Navbar from '../components/navbar'
import Website from './components/website'
import Cta from '../components/cta'
import Socmed from "./components/socmed"
import Title from './components/title'
const page = () => {
  return (
    <div className="flex justify-center ">
      <div className="flex gap-10  w-[1280px] ">
        <Navbar />
        <div className=" w-[1140px]">

          <Hero />
          

          <Title/>
          <Website />
          <Socmed/>
          <div className='mt-40'>
            <Cta />
          </div>        </div>
      </div>
    </div>
  )
}

export default page
