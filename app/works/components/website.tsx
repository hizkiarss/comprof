'use client'

import React, {useRef, useEffect} from 'react'
import Image from 'next/image'

const Website = () => {
    const video1Ref = useRef<HTMLVideoElement | null>(null);
    const video1TabRef = useRef<HTMLVideoElement | null>(null);
    const video2Ref = useRef<HTMLVideoElement | null>(null);
    const video2TabRef = useRef<HTMLVideoElement | null>(null);
    const video3Ref = useRef<HTMLImageElement  | null>(null);
    const video3TabRef = useRef<HTMLImageElement  | null>(null);
    const video4Ref = useRef<HTMLImageElement  | null>(null);
    const video4TabRef = useRef<HTMLImageElement  | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const videos = [video1Ref.current, video2Ref.current, video3Ref.current, video4Ref.current, video1TabRef.current, video2TabRef.current, video3TabRef.current, video4TabRef.current];

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
                            A Travel & Cruise Company Website </h3>

                        <div className=' mt-4 hidden md:block xl:hidden overflow-hidden w-full xl:h-[500px]'>
                            <video
                                ref={video1TabRef}
                                className='w-full h-full object-cover transition-all duration-300 ease-out'
                                autoPlay
                                loop
                                muted
                                playsInline
                                src="/video/works-nomad.webm"
                            />
                        </div>
                        <p className='text-sm tracking-tight mt-6 mb-6 md:mb-0 xl:mt-0'>
                            We built the Nomad Archipelago website to present a premium, eco-focused travel experience,
                            showcasing liveaboard cruises and remote Indonesian destinations through clean layouts and
                            immersive visuals. Our focus was on clean layouts, responsive design, and intuitive content
                            flow—while keeping the site fast, scalable, and easy for the client to update and manage.
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
                            src="/video/works-nomad.webm"
                        />
                    </div>
                </div>


                <div className='mt-20 flex flex-col md:flex-row xl:gap-10'>
                    <div className='flex flex-col justify-start xl:justify-between px-2 w-full xl:w-3/5'>
                        <h3 className='flex-1 tracking-tighter leading-7 text-3xl text-gray-500'>
                            <span className='tracking-tighter text-3xl text-black'>Rooms:</span> <br/>
                            A Smarter Way to Find Short-Term Stays </h3>

                        <div className=' mt-4 hidden md:block xl:hidden overflow-hidden w-full xl:h-[500px]'>
                            <video
                                ref={video2TabRef}
                                className='w-full h-full object-cover transition-all duration-300 ease-out'
                                autoPlay
                                loop
                                muted
                                playsInline
                                src="/video/works_room.webm"
                            />
                        </div>
                        <p className='text-sm tracking-tight mt-6 mb-6 md:mb-0 xl:mt-0'>
                            Rooms is a modern accommodation platform that allows users to browse, compare,
                            and book short-term rentals with ease. The website focuses on clear property listings,
                            intuitive navigation, and a smooth booking flow, creating a familiar and user-friendly
                            experience similar to popular rental platforms.
                        </p>
                    </div>

                    <div
                        className='block md:hidden xl:block overflow-hidden w-full h-[500px] md:h-[800px] xl:h-[500px]'>
                        <video
                            ref={video2Ref}
                            className='w-full h-full object-cover transition-all duration-300 ease-out'
                            autoPlay
                            loop
                            muted
                            playsInline
                            src="/video/works_room.webm"
                        />
                    </div>
                </div>


                <div className='mt-20 flex flex-col md:flex-row xl:gap-10'>
                    <div className='flex flex-col justify-start xl:justify-between px-2 w-full xl:w-3/5'>
                        <h3 className='flex-1 tracking-tighter leading-7 text-3xl text-gray-500'>
                            <span className='tracking-tighter text-3xl text-black'>One-lifestyle:</span> <br/>
                            Exclusive Travel & Curated Experiences </h3>

                        <div className=' mt-4 hidden md:block xl:hidden overflow-hidden w-full md:h-[500px] xl:h-[500px]'>
                            <Image src={"/photos/works-onelifestyle.png"}
                                   className='w-full h-full object-cover transition-all duration-300 ease-out'
                                   alt={""} width={100} height={100}
                                   ref={video3TabRef}
                            />

                        </div>
                        <p className='text-sm tracking-tight mt-6 mb-6 md:mb-0 xl:mt-0'>
                            We built the One Lifestyle website to highlight bespoke travel experiences and carefully
                            selected destinations, emphasizing exclusivity, inspiration, and refined journeys. The site
                            is designed with clean layouts, rich visuals, and intuitive navigation to create an engaging
                            browsing experience while clearly communicating the brand’s lifestyle-driven approach to
                            travel.
                        </p>
                    </div>

                    <div
                        className='block md:hidden xl:block overflow-hidden w-full h-[500px] md:h-[800px] xl:h-[500px]'>
                        <Image src={"/photos/works-onelifestyle.svg"}
                               className='w-full h-full object-cover transition-all duration-300 ease-out'
                               alt={""} width={100} height={100}
                               ref={video3Ref}
                        />


                    </div>
                </div>


                <div className='mt-20 flex flex-col md:flex-row xl:gap-10'>
                    <div className='flex flex-col justify-start xl:justify-between px-2 w-full xl:w-3/5'>
                        <h3 className='flex-1 tracking-tighter leading-7 text-3xl text-gray-500'>
                            <span className='tracking-tighter text-3xl text-black'>TS Residence:</span> <br/>
                            Modern Residence & Short-Stay Accommodation </h3>

                        <div className=' mt-4 hidden md:block xl:hidden overflow-hidden w-full md:h-[500px] xl:h-[500px]'>
                            <Image src={"/photos/works-tsmockup.svg"}
                                   className='w-full h-full object-cover transition-all duration-300 ease-out'
                                   alt={""} width={100} height={100}
                                   ref={video4TabRef}
                            />

                        </div>
                        <p className='text-sm tracking-tight mt-6 mb-6 md:mb-0 xl:mt-0'>
                            The aim isto showcase a contemporary living and short-stay experience, presenting rooms, facilities,
                            and location details in a clear and approachable way. The site emphasizes simplicity and
                            visual clarity, making it easy for visitors to explore the property, understand its
                            offerings, and feel confident about their stay.
                        </p>
                    </div>

                    <div
                        className='block md:hidden xl:block overflow-hidden w-full h-[500px] md:h-[800px] xl:h-[500px]'>
                        <Image src={"/photos/works-tsmockup.svg"}
                               className='w-full h-full object-cover transition-all duration-300 ease-out'
                               alt={""} width={100} height={100}
                               ref={video4Ref}
                        />


                    </div>
                </div>


            </div>


        </div>
    )
}

export default Website