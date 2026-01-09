'use client'

import Buttons from '@/components/buttons';
import React, {useRef, useEffect} from 'react';

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            videoRef.current?.play();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className=' lg:h-screen  relative flex flex-col  px-2 lg:px-0'>

            <div className='items-center justify-between z-10'>
                <h1 className="relative tracking-tighter text-[40px] md:text-[50px] mt-0 lg:mt-8">
    <span
        className="flex gap-4 items-center relative inline-block h-[60px] md:h-[70px] overflow-hidden align-bottom">
        Craft{" "}
        <span className="-mb-[100px] lg:-mb-[120px]">
            {["online presence", "websites", "creatives", "brand"].map((w, i) => (
                <span
                    key={i}
                    className="lg:pt-5 block text-left overflow-hidden animate-roll font-Edwardian tracking-tight font-medium text-[70px] md:text-[90px]"
                >
                    {w}
                </span>
            ))}
        </span>
    </span>
                    <span className="-mt-6 md:-mt-8 block">people remember</span>
                </h1>
                <p className='w-full lg:w-[250px] mt-4 lg:mt-6 tracking-tight'>
                    We provide end‑to‑end digital services that elevate brand perception and drive tangible results for
                    small and growing businesses.
                </p>
                <Buttons content='Explore more' className='mt-4 lg:mt-10'></Buttons>
            </div>

            <div className='h-10 hidden lg:block'></div>

            <video
                ref={videoRef}
                src='/video/serviceHero.webm'
                loop
                muted
                playsInline
                className='relative lg:absolute bottom-0 -right-[60px] lg:right-0 h-[300px] lg:h-fit w-[1000px] z-0 object-cover'
            />

        </div>
    );
};

export default Hero;