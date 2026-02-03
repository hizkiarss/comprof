import React from 'react'
import Hero from './components/hero'
import Navbar from '../components/navbar'
import Website from './components/website'
import Cta from '../components/cta'
import Socmed from "./components/socmed"
import Title from './components/title'
import NavbarMobile from "@/app/components/navbarMobile";
import VisualCreative from "@/app/works/components/visual_creative";

const page = () => {
    return (

        <div className="flex justify-center ">
            <div className="block xl:flex gap-10  xl:max-w-[1280px]  ">
                <Navbar />
                <NavbarMobile />
                <div className=" max-w-[1140px] ">
                    <Hero />
                    <Title/>
                    <Website />
                    <Socmed/>
                    <VisualCreative/>
                    <div className='mt-40'>
                        <Cta />
                    </div>


                </div>
            </div>
        </div>













    )
}

export default page