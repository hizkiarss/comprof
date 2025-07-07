"use client"
import React from 'react';
import { Brush, GitCompareArrows, MonitorCheck, MonitorSmartphone } from "lucide-react";
import FadeInAnimation from "@/app/components/fadeInAnimation";
import BlurText from './blurText';


const WhyHire = () => {
    return (
        <div className="relative mt-12 h-[700px] md:h-screen flex items-center justify-center ">

            <div
                className="bg-[url('/photos/hirebackground.svg')] bg-contain bg-no-repeat bg-center text-5xl md:text-8xl h-3/5 w-full relative ">
                <BlurText  text='see' style='bg-opacity-70 tracking-tight font-bold rounded-full mt-5 absolute top-0 md:top-20 left-6 md:left-48' />
                <BlurText  text='all' style='bg-opacity-70 tracking-tight font-bold rounded-full absolute top-16 md:top-[180px] left-12 md:left-[255px]' />
                <BlurText  text='the' style='bg-opacity-70 tracking-tight font-bold rounded-full -mt-10 absolute bottom-10 md:bottom-40 right-14 md:right-60' />
                <BlurText  text='benefits' style='bg-opacity tracking-tight-70 font-bold rounded-full absolute bottom-0 md:bottom-20 right-[20px]' /> 
            </div>

            <div
                className={"absolute top-8 left-0 md:top-24 border border-white rounded-xl px-3 w-fit max-w-40 md:max-w-sm  bg-white text-black"}>
                <FadeInAnimation>
                    <div>
                        <div className="flex gap-2 items-center md:px-4 py-2">
                            <Brush className="size-4 md:size-7 md:mt-2" />
                            <h2 className="text-sm md:text-[xl] md:text-3xl tracking-tight">
                                Clean code
                            </h2>
                        </div>
                        <p className="border-t-2 border-black md:mx-4 py-2 text-[10px] md:text-base">
                            Code is readable, modular, and well-organized for easy maintenance and scalability.
                        </p>
                    </div>
                </FadeInAnimation>

            </div>

            <div
                className={"absolute  bottom-10 left-2 md:left-20  border border-white rounded-xl px-3  max-w-32 md:max-w-sm bg-white mr:0 md:-mr-[300px] text-black"}>
                <FadeInAnimation>
                    <div>
                        <div className={"flex gap-2 items-center md:px-4 py-2"}>
                            <MonitorSmartphone className={"size-6 md:size-7 md:mt-2"} />
                            <h2 className={"text-sm md:text-[xl] md:text-3xl tracking-tight"}>Responsive Design
                            </h2>
                        </div>

                        <p className={"border-t-2 border-black md:mx-4 py-2 text-[10px] md:text-base"}>The layout adapts
                            seamlessly to different screen
                            sizes, ensuring a great experience on all devices.
                        </p></div>
                </FadeInAnimation>


            </div>

            <div
                className={"absolute max-w-40 top-12 md:top-40 right-6 md:right-0  border border-white rounded-xl px-3 w-fit md:max-w-sm  bg-white text-black"}>
                <FadeInAnimation>
                    <div>
                        <div className={"flex gap-2 items-center md:px-4 py-2"}>
                            <MonitorCheck className={"size-4 md:size-7 md:mt-2"} />
                            <h2 className={"text-sm md:text-[xl] md:text-3xl tracking-tight "}>Maintainability
                            </h2>
                        </div>

                        <p className={"border-t-2 border-black md:mx-4 py-2 text-[10px] md:text-base"}>The codebase is
                            well-documented,
                            version-controlled, and easy to update or extend.
                        </p>
                    </div>
                </FadeInAnimation>


            </div>

            <div
                className={"absolute max-w-40 bottom-0 md:bottom-20 right-8 md:right-0  border border-white rounded-xl px-3 w-fit  md:max-w-sm  bg-white text-black"}>
                <FadeInAnimation>

                    <div>
                        <div className={"flex gap-2 items-center md:px-4 py-2"}>
                            <GitCompareArrows className={"size-4 md:size-7 md:mt-2"} />
                            <h2 className={"text-sm md:text-[xl] md:text-3xl tracking-tight"}>Flexibility
                            </h2>
                        </div>

                        <p className={"border-t-2 border-black md:mx-4 py-2 text-[10px] md:text-base"}>Flexibility to
                            handle
                            both front-end and back-end
                            development for seamless solutions.
                        </p>
                    </div>
                </FadeInAnimation>
            </div>


        </div>
    );
};

export default WhyHire;