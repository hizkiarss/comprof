"use client"

import React from 'react';
import Buttons from "@/components/buttons";
import {goToDiv} from "@/utils/goToContact";
import MetaBalls from "@/app/components/metaBalls";
import FadeInAnimation from "@/app/components/fadeInAnimation";


const Hero = () => {
    return (
        <div
            className="-mt-[160px]  md:mb-0 md:mt-10 h-screen md:h-[80vh] xl:h-screen flex flex-col justify-between  mx-4   ">
            <div className={"mt-[160px] md:mt-0 md:grid grid-cols-3 gap-2 md:gap-3 flex justify-center   "}>
                <div
                    className="bg-black rounded-xl border-[#D9DBF1] h-[40vh] xl:h-[300px] md:h-[30vh] w-full z-20 relative overflow-x-hidden ">
                    <MetaBalls
                        color="#ffffff"
                        cursorBallColor="#ffffff"
                        cursorBallSize={2}
                        ballCount={20}
                        animationSize={10}
                        enableMouseInteraction={true}
                        enableTransparency={true}
                        hoverSmoothness={0.05}
                        clumpFactor={1}
                        speed={0.1}
                    />
                </div>

                <div
                    className="hidden md:block bg-black rounded-xl border-[#D9DBF1] h-[380px] xl:h-[380px] md:h-[40vh] relative overflow-hidden">
                    <MetaBalls
                        color="#ffffff"
                        cursorBallColor="#ffffff"
                        cursorBallSize={2}
                        ballCount={20}
                        animationSize={10}
                        enableMouseInteraction={true}
                        enableTransparency={true}
                        hoverSmoothness={0.05}
                        clumpFactor={1}
                        speed={0.2}
                    />
                </div>

                <div
                    className="hidden md:block bg-black rounded-xl border-0 h-[460px] xl:h-[460px] md:h-[50vh] relative overflow-hidden">
                    <MetaBalls
                        color="#ffffff"
                        cursorBallColor="#ffffff"
                        cursorBallSize={2}
                        ballCount={20}
                        animationSize={8}
                        enableMouseInteraction={true}
                        enableTransparency={true}
                        hoverSmoothness={0.05}
                        clumpFactor={1}
                        speed={0.3}
                    />
                </div>


            </div>
            <FadeInAnimation scroll={false} delay={0.7}>
                <div className={"items-end lg:items-start lg:grid grid-cols-6 mt-4 xl:-mt-6"}>
                    <div className={"col-span-4"}>
                        <p className={"text-[14px] md:text-base font-Helvetica tracking-tighter mt-4 md:-mt-24  mb-5"}>WE
                            DO IT ALL .</p>

                        <h1 className={"tracking-tighter text-[80px] lg:text-[140px] md:text-[120px] -mt-24 font-Aeonik md:-ml-3 "}>
                            <div className={"flex items-center leading-[240px] tracking-tighter  "}>
                                every
                                <span
                                    className={"font-Edwardian font-medium -ml-2 md:-mb-3 text-[120px] lg:text-[215px] md:text-[185px]"}>thing</span>
                            </div>
                            <p className={"-mt-28 md:-mt-24s tracking-tighter "}>covered</p>
                        </h1>
                    </div>

                    <div
                        className={"col-span-2 mt-0 lg:-mt-1 text-xs md:text-[15px] flex flex-col md:flex-row md:gap-14 lg:gap-1 md:items-center lg:items-start lg:flex-col  gap-4 font-Helvetica md:leading-6"}>
                        <p>Supporting small brands across web development, social media, and creative production, with a
                            simple process, clear communication, and results that truly move the business forward.
                        </p>
                        <Buttons className={"  md:mt-4 w-fit"} content={"Let's discuss"}
                                 onClick={() => goToDiv("contact")}/>
                    </div>
                </div>
            </FadeInAnimation>

        </div>
    );
};

export default Hero;