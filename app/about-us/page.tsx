import React from 'react';
import Hero from "./components/hero";
import Navbar from "@/app/components/navbar";
import CursorFollower from '@/app/components/cursorFollower'
import FAQ from './components/faq'
import Values from './components/values'
import Cta from '../components/cta';

const Page = () => {
    return (
        <div className="flex justify-center relative  ">
            <div className="flex gap-10 max-w-[1280px] ">
                <Navbar />
                <div className="overflow-hidden max-w-[1140px] ">
                    <div className="relative z-20">
                        <CursorFollower />
                        <Hero />
                        <Values />
                    </div>

                    <div className="relative h-screen bg-transparent pt-10">

                    </div>
                    s
                    <video
                        src="video/Sosmed 1.mp4"
                        className="fixed top-0 h-screen  object-cover w-[1140px]  z-10"
                        autoPlay
                        loop
                        muted
                    />

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