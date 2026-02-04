'use client';
import React, {useState, useEffect, useRef} from 'react';
import {ArrowUpRight} from 'lucide-react';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import Link from "next/link";
import Buttons from "@/components/buttons";

const triggers = [
    {
        id: 'msa',
        label: 'Nomad Archipelago',
        subLabel: 'WEBSITE SERVICE',
        image: '/photos/Social Media Creative Porto 1.png',
        desc: 'A website presents a premium, eco-focused travel experience through clean design and immersive visuals. Built to highlight liveaboard cruises and remote Indonesian destinations.'
    },
    {
        id: 'branding',
        label: 'Rooms',
        subLabel: 'WEBSITE SERVICE',
        image: "/photos/Social Media Creative Porto 2.png",
        desc: 'Rooms is a modern accommodation platform designed for effortless browsing and booking. With clear listings, intuitive navigation, and a smooth booking flow, it delivers a familiar, user-friendly rental experience.'
    },
    {
        id: 'webdev',
        label: 'One-lifestyle',
        subLabel: 'WEBSITE SERVICE',
        image: "/photos/Social Media Creative Porto 3.png",
        desc: "We carefully curated this website to showcase luxury travel experience, featuring handpicked destinations and journeys. Designed with elegant layouts and immersive visuals, the site delivers an experience that captures a travel lifestyle."
    },

];

export default function Trigger() {
    const router = useRouter();
    const [hoveredTrigger, setHoveredTrigger] = useState<{
        id: string,
        image: string,
        label: string,
        desc: string
    } | null>(null);
    const [coords, setCoords] = useState({x: 0, y: 0});
    const [targetCoords, setTargetCoords] = useState({x: 0, y: 0});
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const animationRef = useRef<number | null>(null);
    const prevTriggerIdRef = useRef<string | null>(null);

    useEffect(() => {
        const animate = () => {
            setCoords(current => {
                const dx = targetCoords.x - current.x;
                const dy = targetCoords.y - current.y;

                const followSpeed = 0;

                return {
                    x: current.x + dx * followSpeed,
                    y: current.y + dy * followSpeed
                };
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        if (hoveredTrigger) {
            animationRef.current = requestAnimationFrame(animate);
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [hoveredTrigger, targetCoords]);

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        if (hoveredTrigger !== null) {
            if (prevTriggerIdRef.current !== null && prevTriggerIdRef.current !== hoveredTrigger.id) {
                setCoords(targetCoords);
            }

            prevTriggerIdRef.current = hoveredTrigger.id;
            timeoutRef.current = setTimeout(() => setIsVisible(true), 10);
        } else {
            setIsVisible(false);
            prevTriggerIdRef.current = null;
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [hoveredTrigger, targetCoords]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (window.innerWidth >= 768) {
            const {clientX, clientY} = e;
            setTargetCoords({x: clientX, y: clientY});
        }
    };

    const handleMouseEnter = (trigger: typeof triggers[0], e: React.MouseEvent) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        const wasVisible = hoveredTrigger !== null;
        setHoveredTrigger({id: trigger.id, image: trigger.image, desc: trigger.desc, label: trigger.label});

        if (window.innerWidth < 768) {
            const target = e.currentTarget as HTMLElement;
            const rect = target.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            setCoords({x: centerX, y: centerY});
            setTargetCoords({x: centerX, y: centerY});
        }

        if (wasVisible) {
            setIsVisible(true);
        }
    };

    const handleMouseLeave = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        setIsVisible(false);
        timeoutRef.current = setTimeout(() => setHoveredTrigger(null), 200);
    };


    const handleClick = () => {
        if (window.innerWidth >= 1025) {
            router.push(`/works`);
        }
    };

    return (
        <div className="relative mt-20">
            <div className="md:flex justify-between items-end mb-5 md:mb-10 md:px-2 md:mx-2 xl:px-0">
                <div className="w-fit">
                    <h2 className="text-[32px] md:text-6xl tracking-tighter flex items-center ml-4 md:ml-0 md:block gap-3">
                        Featured <span
                        className="-mt-2 md:mt-0 font-Edwardian font-medium text-6xl md:text-8xl">projects</span>
                    </h2>
                    <div className="bg-black h-1 rounded-xl ml-4 md:ml-0 -mt-2 w-full"></div>
                </div>

                <button
                    className="text-sm md:text-base mt-4 md:mt-0 hidden md:flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                    Let&apos;s discuss
                    <ArrowUpRight className="size-4"/>
                </button>
            </div>

            {triggers.map((trigger, i) => (
                <div
                    key={trigger.id}
                    className="relative border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 cursor-pointer group overflow-hidden px-4 py-5 md:py-10"
                    onMouseEnter={(e) => handleMouseEnter(trigger, e)}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    onClick={handleClick}
                >
                    <span
                        className="absolute inset-0 bg-black scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-in-out z-0"/>

                    <div
                        className="md:flex justify-between items-center relative overflow-hidden group text-black group-hover:text-white text-3xl md:text-5xl">
                        <div className="flex items-center gap-4">
                            <div>0{i + 1}.</div>
                            <div className="tracking-tighter">{trigger.label}</div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div
                                className="hidden md:block mt-4 md:mt-0 text-sm md:text-base tracking-tight border-2 rounded-full px-2 py-1 md:px-6 md:py-3 z-20 transition-all duration-500 text-black group-hover:text-white group-hover:border-white">
                                {trigger.subLabel}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {hoveredTrigger && (
                <div
                    className="fixed xl:pointer-events-none z-50 transition-all duration-200 ease-out"
                    style={{
                        left: coords.x + (window.innerWidth >= 768 ? 20 : 0),
                        top: coords.y - 100,
                        transform: `translate(-50%, -65%) scale(${isVisible ? 1 : 0})`,
                        opacity: isVisible ? 1 : 0,
                    }}
                >
                    <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-64 pb-3 ">
                        <Image
                            width={256}
                            height={160}
                            src={hoveredTrigger.image}
                            alt="Preview"
                            className="h-32 lg:h-40 object-cover"
                        />
                        <p className={"px-2 my-3 tracking-tighter font-Aeonik"}>
                            {hoveredTrigger.label}
                        </p>
                        <p className={"text-xs md:text-sm px-2 tracking-tight"}>
                            {hoveredTrigger.desc}
                        </p>

                        <Link href="/works" className="flex xl:hidden justify-end mt-3 ">
                            <Buttons
                                content="Let's discuss"
                                className="text-xs md:text-sm mt-1 md:mt-0 mr-2"
                                arrowSmall={true}
                            />
                        </Link>

                    </div>
                </div>
            )}
        </div>
    );
}