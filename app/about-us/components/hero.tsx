"use client";
import React, { useState, useRef, useEffect } from "react";
import FadeInAnimation from "@/app/components/fadeInAnimation";
import Buttons from "@/components/buttons";
import Magnet from "@/app/components/animation/magnet"
import Image from "next/image";



type HoverVideoProps = {
    src: string;
    title: string;
    idx: number;
    hoveredIndex: number | null;
    poster: string;
    setHoveredIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

const HoverVideo: React.FC<HoverVideoProps> = ({ src, title, idx, hoveredIndex, poster, setHoveredIndex }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (hoveredIndex === idx) {
            video.play().catch((err) => {
                console.error("Video play failed:", err);
            });
        } else {
            video.pause();
            video.currentTime = 0;
            video.load(); // Force reload to show poster again
        }
    }, [hoveredIndex, idx]);

    return (
        <div
            key={idx}
            className={`
        transition-all duration-500 ease-out relative flex-shrink-0
        ${hoveredIndex === null ? "w-[220px]" :
                    hoveredIndex === idx
                        ? "w-[400px]"
                        : "w-[175px]"
                }
      `}
            style={{
                transformOrigin: 'bottom left',
                zIndex: hoveredIndex === idx ? 50 : 10
            }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
        >

            <div className="flex justify-between items-end">
                <p className='font-Aeonik text-lg'>0{idx + 1}. </p>
                <div className={`
        transition-all duration-300 ease-out relative flex-shrink-0 object-cover flex justify-end
        ${hoveredIndex === idx ? "opacity-100" : "opacity-0"}
      `}>

                    <Buttons content={title} className='bg-black text-white font-Aeonik' />
                </div>
            </div>

            <video
                ref={videoRef}
                src={src}
                muted
                loop
                poster={poster}
                playsInline
                className={`
          transition-all duration-500 ease-out relative flex-shrink-0 object-cover mt-2
          ${hoveredIndex === null ? "w-full h-[250px] mon:h-[400px]" :
                        hoveredIndex === idx
                            ? "h-[400px] mon:h-[450px]"
                            : "h-[200px]"
                    }
        `}
            />
        </div>
    );
};

const Hero = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const videos = [
        { src: "/video/sosmed1.mp4", title: "Instagram Post Design", poster: "photos/Social%20Media%20Creative%20Porto%201.png" },
        { src: "/video/sosmed2.mp4", title: "Campaign Visuals", poster: "photos/Social%20Media%20Creative%20Porto%202.png" },
        { src: "/video/sosmed3.mp4", title: "Story Highlight", poster: "photos/Social%20Media%20Creative%20Porto%203.png" },
        { src: "/video/website1.mp4", title: "Client Brand Pack", poster: "photos/Social%20Media%20Creative%20Porto%201.png" },
        { src: "/video/website2.mp4", title: "Minimal Layout Set", poster: "photos/Social%20Media%20Creative%20Porto%202.png" },
    ];

    return (
        <div className='h-screen pt-12 py-10 relative bg-white'>
            <div className='h-full w-[1140px] flex flex-col relative'>
                <FadeInAnimation delay={2.5}>
                    <div className='flex justify-center gap-12  z-0'>

                        <Magnet>
                            <div className="group relative">
                                <Image src="/photos/Galih.png" width={100} height={100} alt="" className={`relative z-20 border-black rounded-full w-44 mt-10 ${hoveredIndex != null ? "filter blur-sm" : "opacity-100"}`} />
                                <Image src="/photos/gus.png" width={100} height={100} alt="" className="w-24 absolute bottom-0 left-10 transition-all duration-500 opacity-0  z-0 group-hover:-bottom-10 group-hover:opacity-100 " />
                            </div>
                        </Magnet>
                        <div className={`z-0 transition-all duration-300 w-[500px]`}>
                            <h1 className={`relative text-center tracking-tight leading-[0.9] text-[20px] md:text-[50px] -mt-5 transition-all duration-400  ${hoveredIndex != null ? "filter blur-sm" : "opacity-100"}`}>
                                It&apos;s just
                                <span className={`font-Edwardian tracking-wide font-medium text-[60px] md:text-[90px] mx-3 relative inline-block transition-all duration-400 ${hoveredIndex != null ? "filter blur-sm" : "opacity-100"}`}>
                                    two
                                    <div className="absolute bottom-2 right-0 h-[2px] w-full bg-black animate-underlineRightToLeft" style={{ animationDelay: "2800ms" }} />
                                </span>
                                of us&mdash; <br />
                                yet somehow that&apos;s<br />
                                <div className='-mt-4'>
                                    all you ever
                                    <span className="font-Edwardian tracking-wide font-medium text-[60px] mx-3 md:text-[90px] relative inline-block">
                                        need
                                        <div className="absolute bottom-2 right-0 h-[2px] w-full bg-black animate-underlineRightToLeft" style={{ animationDelay: "2800ms" }} />
                                    </span>
                                    .
                                </div>
                            </h1>

                            <div className={`flex flex-col justify-center items-center gap-4`}>
                                <p className={`text-center transition-all duration-400 mt-3 ${hoveredIndex != null ? "filter blur-sm" : "opacity-100"}`}>
                                    We design and build websites that actually work, craft visuals that turn heads, and manage social media so you don&apos;t have to.
                                    <br /> <span className="font-semibold font-Aeonik">No big agency fluff, just two humans who get stuff done.</span>
                                </p>
                                <Buttons className={`${hoveredIndex != null ? "filter blur-sm" : "opacity-100"}`} content='Contact us' />
                            </div>
                        </div>
                        <Magnet >
                            <div className="group relative">
                                <Image src="/photos/Kia.webp" width={100} height={100} alt="" className={`relative z-20 border-black rounded-full w-44 mt-10 ${hoveredIndex != null ? "filter blur-sm" : "opacity-100"}`} />
                                <Image src="/photos/richard.png" width={100} height={100} alt="" className="w-24 absolute bottom-0 left-10 transition-all duration-500 opacity-0  z-0 group-hover:-bottom-10 group-hover:opacity-100 " />
                            </div>                        </Magnet>

                    </div>
                </FadeInAnimation>

                <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end z-30">
                    {videos.map((video, idx) => (
                        <HoverVideo
                            key={idx}
                            src={video.src}
                            title={video.title}
                            idx={idx}
                            hoveredIndex={hoveredIndex}
                            setHoveredIndex={setHoveredIndex}
                            poster={video.poster}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;