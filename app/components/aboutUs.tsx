"use client"
import React from 'react'
import FadeInAnimation from "@/app/components/fadeInAnimation";
import Buttons from "@/components/buttons";

const Hero = () => {
    return (
        <div className='mt-12'>
            <FadeInAnimation scroll={true}>
                <div>
                    <h1 className="tracking-tight leading-tight text-[20px] md:text-[50px]">
                        We make awesome interactive experiences with
                        <div className="-mt-8">
                            <span className="inline-block relative mr-4">
                                <span className="font-Edwardian tracking-wide font-medium text-[60px] md:text-[90px]">
                                    empathy
                                </span>
                                <div className="absolute bottom-7 right-0 h-[2px] w-full bg-black animate-underlineRightToLeft  " 
                                style={{ animationDelay: "2000ms" }}
                                />
                            </span>
                            and attention to
                            <span className="inline-block relative ml-2">
                                <span className="font-Edwardian tracking-wide font-medium text-[60px]  md:text-[90px]">
                                    detail
                                </span>
                                <div className="absolute bottom-7 right-0 h-[2px] w-full bg-black animate-underlineRightToLeft" 
                                style={{ animationDelay: "2000ms" }}
                                />
                            </span>
                        </div>
                    </h1>
                </div>
            </FadeInAnimation>
        </div>
    );
};

export default Hero;
