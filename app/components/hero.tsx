"use client"

import React from 'react';
import Buttons from "@/components/buttons";
import { goToDiv } from "@/utils/goToContact";
import MetaBalls from "@/app/components/metaBalls";
import FadeInAnimation from "@/app/components/fadeInAnimation";


const Hero = () => {
    return (
        <div className=" h-screen flex flex-col justify-between mx-2 md:mt-10 ">
            <div className={"md:grid grid-cols-3 gap-2 md:gap-3 flex justify-center  "}>
                <div className="bg-black rounded-xl border-[#D9DBF1] h-[300px] w-full z-20 relative overflow-hidden ">
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

                <div className="hidden md:block bg-black rounded-xl border-[#D9DBF1] h-[380px] relative overflow-hidden">
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

                <div className="hidden md:block bg-black rounded-xl border-0 h-[460px] relative overflow-hidden">
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
            <FadeInAnimation scroll={false} delay={2.5} >
                <div className={"lg:grid grid-cols-6 md:-mt-20"}>
                    <div className={"col-span-4"}>
                        <p className={"text-[14px] md:text-lg font-Helvetica tracking-tighter mt-4 md:-mt-24  mb-5"}>HIZKIA SIHOMBING</p>
                        <div className="-mt-4 md:-mt-14 flex gap-8 ">
                        </div>
                        <h1 className={"tracking-tighter text-[80px] lg:text-[150px] md:text-[120px] -mt-20 md:mt-0 "}>
                            <div className={"flex gap-3 md:gap-8 items-center leading-[240px] tracking-tighter  "}>
                                full <span className='text-[60px] lg:text-[100px] -mx-3 md:-mx-8 '>&mdash;</span>
                                <span
                                    className={"font-Edwardian tracking-wide font-medium md:-mb-3 text-[120px] lg:text-[200px] md:text-[140px]"}>stack</span>
                            </div>
                            <p className={"-mt-28  tracking-tighter "}>developer</p>
                        </h1>
                    </div>

                    <div
                        className={"col-span-2 text-xs md:text-[15px] flex flex-col md:pt-8 gap-8 font-Helvetica md:leading-6"}>
                        <p>I&apos;m Hizkia Sihombing, a full-stack software engineer specializing in building dynamic
                            web applications. Passionate about creating seamless user experiences across both front-end and
                            back-end development.</p>
                        <Buttons className={"-mt-4 md:mt-0"} content={"Let's discuss"} onClick={() => goToDiv("contact")} />
                    </div>
                </div>
            </FadeInAnimation>

        </div>
    );
};

export default Hero;