"use client"
import React from 'react'
import FadeInAnimation from "@/app/components/fadeInAnimation";


const title = () => {
    return (
        <div className='flex flex-col items mt-20 lg:my-32 '>
            <FadeInAnimation delay={0.5}>
                <h2 className='tracking-tighter text-3xl lg:text-[50px] text-center '> Your business
                    <span className={`font-Edwardian tracking-tight font-medium text-[60px] md:text-[90px] mx-3 relative inline-block transition-all duration-400 `}>
                        deserves
                    </span>
                    <br />
                    <p className='-mt-1'>more than a template and a Canva logo.
                    </p>
                </h2>
            </FadeInAnimation>

            <FadeInAnimation delay={0.8}>
                <p className='text-center text-sm lg:text-base  font-Aeonik mt-4 '>We’re here to craft bold, scroll-stopping digital experiences that actually get people to stick around (and click).</p>
            </FadeInAnimation>

        </div>
    )
}

export default title
