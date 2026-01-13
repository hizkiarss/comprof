import React from 'react';
import Hero from "./components/hero";
import Navbar from "@/app/components/navbar";
import CursorFollower from '@/app/components/cursorFollower'
import FAQ from './components/faq'
import Values from './components/values'
import Cta from '../components/cta';
import NavbarMobile from "@/app/components/navbarMobile"
import ValuesDescriptionMobile from "@/app/about-us/components/valuesDescriptionMobile";


const Page = () => {
    return (
        <div className="flex justify-center ">
            <div className="block xl:flex gap-10  xl:max-w-[1280px] relative">
                <Navbar />
                <NavbarMobile />
                <div className={"xl:hidden h-[150px] w-screen z-20 bg-white absolute top-0"}></div>
                <div className=" xl:max-w-[1140px] overflow-hidden ">
                    <div className="relative z-20">
                        <CursorFollower />
                        <Hero />
                        <Values />
                        <ValuesDescriptionMobile/>
                    </div>

                   <div>
                       <div className="relative h-screen bg-transparent pt-10">

                       </div>

                       <video
                           src="/video/sosmed1.mp4"
                           className="fixed top-32 md:top-0 h-screen  object-cover  md:w-[1140px]  "
                           autoPlay
                           loop
                           muted
                       />
                   </div>

                    <div className="relative z-20 bg-white">
                        <FAQ />
                        <Cta />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Page;