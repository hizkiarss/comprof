"use client"
import React from 'react'
import FadeInAnimation from "@/app/components/fadeInAnimation";


const title = () => {
    return (
        <div className='flex flex-col items my-32 '>

            <FadeInAnimation delay={0.5}>
                <h2 className='tracking-tighter text-[50px] text-center leading-[-10px]'> Your business
                    <span className={`font-Edwardian tracking-tight font-medium text-[60px] md:text-[90px] mx-3 relative inline-block transition-all duration-400 `}>
                        deserves more
                    </span>
                    <br />
                    <p className='-mt-12'>than a template and a Canva logo.
                    </p>
                </h2>
            </FadeInAnimation>

            <FadeInAnimation delay={0.8}>
                <p className='text-center font-Aeonik mt-1 '>We’re here to craft bold, scroll-stopping digital experiences that actually get people to stick around (and click).</p>
            </FadeInAnimation>


        </div>
    )
}

export default title
