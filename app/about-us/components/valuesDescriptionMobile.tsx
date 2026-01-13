import React from 'react';
import Lottie1 from "./lottie1"
import Lottie2 from "./lottie2"
import Lottie3 from "./lottie3"
import Lottie4 from "./lottie4"
import Buttons from "@/components/buttons";

const ValuesDescriptionMobile = () => {
    return (
        <div className='flex md:grid grid-cols-2 md:gap-x-4 md:gap-y-20 xl:hidden flex-col justify-end items-end bg-white px-2 pb-10'>
            <div className={"relative w-[220px] md:w-full pr-4 mt-20 "}>
                <div className={"absolute -left-[150px] md:-left-8 -top-20 md:-top-40"}>
                    <Lottie1/>
                </div>
                <div className=' '>
                    <div className={"h-[1px] mb-4 bg-black bg-opacity-30"}></div>
                    <p className='leading-[30px] text-[25px] tracking-tighter'>fast
                        <span className='font-Edwardian tracking-wide text-[40px] mx-2 mr-3'>output</span>
                        & <span className='bg-white z-10'>dependable</span>
                        <span className='font-Edwardian tracking-wide text-[40px] ml-1'>service</span>
                    </p>

                    <p className='leading-[20px] font-[400] text-sm mt-4 '>
                        We respect your time and deadlines, and so do we with ours. You can count on us to deliver on time, giving the maximum results.
                    </p>
                    <Buttons className="!px-4 !py-2 text-sm mt-4" content='Explore more' />

                </div>


            </div>

            <div className={"relative w-[220px] md:w-full pr-4 mt-20 "}>
                <div className={"absolute -left-[200px] md:-left-20 -top-16 md:-top-32"}>
                    <Lottie2/>
                </div>
                <div className=' '>
                    <div className={"h-[1px] mb-4 bg-black bg-opacity-30"}></div>
                    <p className='leading-[30px] text-[25px] tracking-tighter'>all in one digital
                        <span className='font-Edwardian tracking-wide text-[40px] mx-2 mr-3'>support</span>

                    </p>

                    <p className='leading-[20px] font-[400] text-sm mt-4 '>
                        Our team combines design, development, and marketing expertise to give you a complete digital solution in one place.                    </p>
                    <Buttons className="!px-4 !py-2 text-sm mt-4" content='Explore more' />
                </div>
            </div>

            <div className={"relative w-[220px] md:w-full pr-4 mt-20 "}>
                <div className={"absolute -left-[240px] md:-left-32 -top-40 md:-top-56 "}>
                    <Lottie3/>
                </div>
                <div className=' '>
                    <div className={"h-[1px] mb-4 bg-black bg-opacity-30"}></div>
                    <p className='leading-[30px] text-[25px] tracking-tighter'>budget-friendly
                        <span className='font-Edwardian tracking-wide text-[40px] mx-2 mr-3'>solution</span>

                    </p>

                    <p className='leading-[20px] font-[400] text-sm mt-4 '>
                        We understand the constraints of small businesses. That’s why we offer efficient, high-value services balanced with a fair rate
                    </p>
                </div>
                <Buttons className="!px-4 !py-2 text-sm mt-4" content='Explore more' />
            </div>

            <div className={"relative w-[220px] md:w-full pr-4 mt-20 "}>
                <div className={"absolute -left-[160px] md:-left-10 -top-20 md:-top-36 "}>
                    <Lottie4/>
                </div>
                <div className=' '>
                    <div className={"h-[1px] mb-4 bg-black bg-opacity-30"}></div>
                    <p className='leading-[30px] text-[25px] tracking-tighter'>clear communication, <br className={"md:hidden xl:block"}/>
                        <span className='font-Edwardian tracking-wide text-[40px]  mr-3'>always</span>

                    </p>

                    <p className='leading-[20px] font-[400] text-sm mt-4 '>
                        We speak your language, no big terms, no stiff corporate stuff. Just honest, transparent conversations and reliable support.
                    </p>
                </div>
                <Buttons className="!px-4 !py-2 text-sm mt-4" content='Explore more' />

            </div>

        </div>
    );
};

export default ValuesDescriptionMobile;