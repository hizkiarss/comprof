'use client'

import React, {useRef, useEffect} from 'react'

const Website = () => {
    const video1Ref = useRef<HTMLVideoElement | null>(null);
    const video1TabRef = useRef<HTMLVideoElement | null>(null);
    const video2Ref = useRef<HTMLVideoElement | null>(null);
    const video2TabRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const videos = [video1Ref.current, video2Ref.current, video1TabRef.current, video2TabRef.current];

            videos.forEach((video) => {
                if (!video) return;

                const rect = video.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                const progress = Math.max(0, Math.min(1,
                    (windowHeight - rect.top) / (windowHeight * 0.8)
                ));

                const clipValue = 100 - (progress * 100);

                video.style.clipPath = `inset(${clipValue}% 0 0 0)`;
                video.style.transform = `scale(${0.95 + progress * 0.05})`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='flex flex-col md:flex-row justify-between mt-20 gap-10 md:gap-20 xl:gap-32 relative'>
            <div className='md:sticky md:top-36 xl:top-24 self-start px-2 h-fit'>
                <p className="font-Edwardian tracking-tight font-medium text-[60px] md:text-[60px] mr-3 relative inline-block transition-all duration-400 -mt-10">
                    website
                </p>
                <p className='tracking-tighter text-[30px] -mt-8'>
                    development
                </p>
            </div>

            <div className='flex flex-col gap-10 flex-1'>
                <div className='flex flex-col md:flex-row xl:gap-10'>
                    <div className='flex flex-col justify-start xl:justify-between px-2 w-full xl:w-3/5'>
                        <h3 className='flex-1 tracking-tighter leading-7 text-3xl text-gray-500'>
                            <span className='tracking-tighter text-3xl text-black'>Nomad Archipelago:</span> <br/>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.
                        </h3>

                        <div className=' mt-4 hidden md:block xl:hidden overflow-hidden w-full xl:h-[500px]'>
                            <video
                                ref={video1TabRef}
                                className='w-full h-full object-cover transition-all duration-300 ease-out'
                                autoPlay
                                loop
                                muted
                                playsInline
                                src="/video/websiteService.webm"
                            />
                        </div>
                        <p className='text-sm tracking-tight mt-6 mb-6 md:mb-0 xl:mt-0'>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae
                            pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu
                            aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec
                        </p>
                    </div>

                    <div className='block md:hidden xl:block overflow-hidden w-full h-[500px]'>
                        <video
                            ref={video1Ref}
                            className='w-full h-full object-cover transition-all duration-300 ease-out'
                            autoPlay
                            loop
                            muted
                            playsInline
                            src="/video/websiteService.webm"
                        />
                    </div>
                </div>



                <div className='mt-20 flex flex-col md:flex-row xl:gap-10'>
                    <div className='flex flex-col justify-start xl:justify-between px-2 w-full xl:w-3/5'>
                        <h3 className='flex-1 tracking-tighter leading-7 text-3xl text-gray-500'>
                            <span className='tracking-tighter text-3xl text-black'>Nomad Archipelago:</span> <br/>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.
                        </h3>

                        <div className=' mt-4 hidden md:block xl:hidden overflow-hidden w-full xl:h-[500px]'>
                            <video
                                ref={video2TabRef}
                                className='w-full h-full object-cover transition-all duration-300 ease-out'
                                autoPlay
                                loop
                                muted
                                playsInline
                                src="/video/websiteService.webm"
                            />
                        </div>
                        <p className='text-sm tracking-tight mt-6 mb-6 md:mb-0 xl:mt-0'>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae
                            pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu
                            aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec
                        </p>
                    </div>

                    <div className='block md:hidden xl:block overflow-hidden w-full h-[500px] md:h-[800px] xl:h-[500px]'>
                        <video
                            ref={video2Ref}
                            className='w-full h-full object-cover transition-all duration-300 ease-out'
                            autoPlay
                            loop
                            muted
                            playsInline
                            src="/video/websiteService.webm"
                        />
                    </div>
                </div>

            </div>





        </div>
    )
}

export default Website