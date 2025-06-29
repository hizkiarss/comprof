"use client"

import React from 'react';
import Image from "next/image";
import Buttons from "@/components/buttons";
import { goToDiv } from "@/utils/goToContact";
import MetaBalls from "@/app/components/metaBalls";
import FadeInAnimation from "@/app/components/fadeInAnimation";


const Hero = () => {
    return (
        <div className=" pt-10 h-screen flex flex-col justify-between">
            <div className={"grid grid-cols-3 gap-2 md:gap-3"}>
                <div className="bg-black rounded-xl border-[#D9DBF1] h-[300px] relative overflow-hidden ">
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

                <div className="bg-black rounded-xl border-[#D9DBF1] h-[380px] relative overflow-hidden">
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

                <div className="bg-black rounded-xl border-0 h-[460px] relative overflow-hidden">
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
                <div className={"lg:grid grid-cols-6 md:-mt-8"}>
                    <div className={"col-span-4"}>
                        <p className={"text-[10px] md:text-lg font-Helvetica font-bold"}>HIZKIA SIHOMBING</p>
                        <div className="-mt-4 md:-mt-14 flex gap-8 ">
                        </div>
                        <h1 className={"font-Aeonik font-[700] tracking-tight text-[50px] lg:text-[130px] md:text-[120px] "}>
                            <div className={"flex gap-3 md:gap-8 items-center"}>
                                FULL
                                <span
                                    className={"font-Edwardian tracking-wide font-medium md:-mb-3 text-[60px] lg:text-[180px] md:text-[140px]"}>stack</span>
                            </div>
                            <p className={"md:-mt-28"}>DEVELOPER</p>
                        </h1>
                    </div>

                    <div
                        className={"col-span-2 text-xs md:text-[15px] flex flex-col md:pt-24 gap-8 font-Helvetica md:leading-6"}>
                        <p>I&apos;m Hizkia Sihombing, a full-stack software engineer specializing in building dynamic
                            web applications. Passionate about creating seamless user experiences across both front-end and
                            back-end development.</p>
                        <Buttons className={""} content={"Let's discuss"} onClick={() => goToDiv("contact")} />
                    </div>
                </div>
            </FadeInAnimation>

        </div>
    );
};

export default Hero;