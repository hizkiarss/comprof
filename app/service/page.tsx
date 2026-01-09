import React from 'react'
import Hero from './components/hero'
import Navbar from '../components/navbar'
import Website from './components/website'
import Cta from '../components/cta'
import Socmed from "./components/socmed"
import Title from './components/title'
import NavbarMobile from "@/app/components/navbarMobile";
import CursorFollower from "@/app/components/cursorFollower";
import Values from "@/app/about-us/components/values";
import ValuesDescriptionMobile from "@/app/about-us/components/valuesDescriptionMobile";
import FAQ from "@/app/about-us/components/faq";
const page = () => {
    return (

        <div className="  md:flex justify-center relative  ">
            <div className="md:flex gap-10 max-w-[1280px] ">
                <Navbar />
                <NavbarMobile />
                <div className="overflow-hidden max-w-[1140px] ">
                    <Hero />
                    <Title/>
                    <Website />
                    <Socmed/>
                    <div className='mt-40'>
                        <Cta />
                    </div>


                </div>
            </div>
        </div>













    )
}

export default page