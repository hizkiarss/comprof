'use client'

import Buttons from '@/components/buttons';
import { Button } from '@/components/ui/button';
import React, { useRef, useEffect } from 'react';

const Hero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            videoRef.current?.play();
        }, 2000); // delay in ms (2 seconds)

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='h-screen w-full relative flex flex-col justify-between'>

            <div className='items-center justify-between z-10'>
                <h1 className="relative tracking-tighter leading-[0.9] text-[20px] md:text-[50px]">
                    Craft{" "}
                    <span className="relative inline-block h-[90px] overflow-hidden align-bottom">
                        <span className="pt-10">
                            {["online presence", "websites", "creatives", "brand"].map((w, i) => (
                                <span
                                    key={i}
                                    className="pt-5 w-[350px] block text-left overflow-hidden animate-roll font-Edwardian tracking-tight font-medium text-[60px] md:text-[90px]"
                                >
                                    {w}
                                </span>
                            ))}
                        </span>
                    </span>
                    <br />
                    people remember
                </h1>
                <p className='w-[250px] mt-6 tracking-tight'>
                    We provide end‑to‑end digital services that elevate brand perception and drive tangible results for small and growing businesses.
                </p>
                <Buttons content='Explore more' className='mt-10'></Buttons>
            </div>

            {/* Bottom spacing div to create the pb-10 effect without overflow */}
            <div className='h-10'></div>

            <video
                ref={videoRef}
                src='/video/serviceHero.webm'
                loop
                muted
                playsInline
                className='absolute bottom-0 right-0 w-[1000px] z-0 object-cover'
            />

        </div>
    );
};

export default Hero;