import React from 'react';
import Hero from "@/app/components/hero";
import Navbar from "@/app/components/navbar";
import WhyHire from "@/app/components/whyHire";
import Cta from "@/app/components/cta";
import CursorFollower from './components/cursorFollower'
import Services from './components/services'
import Hero2 from './components/aboutUs'
import ImageCarousel from '@/app/components/imageCarousel'
import Trigger from './components/trigger';
import NavbarMobile from "./components/navbarMobile"


const Page = () => {
    return (
        <div className="flex justify-center ">
            <div className="block md:flex gap-10  max-w-[1280px] ">
                <Navbar />
                <NavbarMobile/>
                <div className="overflow-hidden max-w-[1140px]">
                    <CursorFollower />
                    <Hero />
                    <div className='mt-20 md:mt-32'>
                        <Hero2 />
                        <ImageCarousel />
                    </div>
                    <WhyHire />
                    <Services />
                    <Trigger />

                    <div className='mt-40'>
                        <Cta />
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Page;