'use client';
import React, { useState, useEffect, useRef } from 'react';
import Buttons from '@/components/buttons';
import { goToDiv } from '@/utils/goToContact';
import Image from 'next/image';



const triggers = [
    { id: 'msa', label: 'MSA Agency', subLabel: 'COMPANY PROFILE WEBSITE', image: '/Social Media Creative Porto 1.png' },
    { id: 'branding', label: 'Branding', subLabel: 'BRAND IDENTITY DESIGN', image: "/photos/Social Media Creative Porto 2.png" },
    { id: 'webdev', label: 'Web Development', subLabel: 'FULLSTACK SOLUTIONS', image: "/photos/Social Media Creative Porto 3.png" },
    { id: 'webdev', label: 'Web Development', subLabel: 'FULLSTACK SOLUTIONS', image: "/photos/Social Media Creative Porto 3.png" },
    { id: 'webdev', label: 'Web Development', subLabel: 'FULLSTACK SOLUTIONS', image: "/photos/Social Media Creative Porto 3.png" },
];

export default function Trigger() {
    const [hoveredTrigger, setHoveredTrigger] = useState<{ id: string, image: string } | null>(null);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [targetCoords, setTargetCoords] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const animationRef = useRef<number | null>(null);

    // Smooth following animation using requestAnimationFrame
    useEffect(() => {
        const animate = () => {
            setCoords(current => {
                const dx = targetCoords.x - current.x;
                const dy = targetCoords.y - current.y;

                // Adjust this value to control follow speed (0.1 = slow, 0.3 = fast)
                const followSpeed = 0.15;

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
        // Clear any existing timeout when hoveredTrigger changes
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        if (hoveredTrigger !== null) {
            // Small delay to ensure smooth appearance
            timeoutRef.current = setTimeout(() => setIsVisible(true), 10);
        } else {
            setIsVisible(false);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [hoveredTrigger]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        setTargetCoords({ x: clientX, y: clientY });
    };

    const handleMouseEnter = (trigger: typeof triggers[0]) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        const wasVisible = hoveredTrigger !== null;
        setHoveredTrigger({ id: trigger.id, image: trigger.image });

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

    return (
        <div className="relative mt-20">

            <div className={"md:flex justify-between items-center mb-10"}>
                <div className={"w-fit"}>
                    <h2 className={"text-3xl md:text-6xl tracking-tighter flex items-center md:block gap-3 "}>Featured <span
                        className={"-mt-2 md:mt-0 font-Edwardian font-medium text-6xl md:text-8xl "}>projects</span>
                    </h2>
                    {/* <div className={"bg-gradient-to-r from-[#4297AA] to-[#D67221] h-1 rounded-xl -mt-2  "}></div> */}
                    <div className={"bg-black h-1 rounded-xl -mt-2  "}></div>

                </div>

                <Buttons content={"Let's discuss"} onClick={() => goToDiv("contact")}
                    className={"text-sm md:text-base mt-4 md:mt-0 hidden md:flex"} />
            </div>



            {triggers.map((trigger, i) => (
                <div
                    key={trigger.id}
                    className="relative  border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 cursor-pointer group rounded-xl overflow-hidden px-4 py-10"
                    onMouseEnter={() => handleMouseEnter(trigger)}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                >
                    <span
                        className="absolute inset-0 bg-black group-hover:scale-100 origin-bottom transition-transform duration-1000 ease-in-out z-0
                            scale-y-0 group-data-[state=open]:scale-y-100"
                    />
                    <div className="flex justify-between items-center  relative overflow-hidden group text-black group-hover:text-white text-5xl  ">

                        <div className="flex items-center gap-4">
                            <div className="">
                                0{i + 1}.
                            </div>
                            <div className="tracking-tighter">
                                {trigger.label}
                            </div>
                        </div>
                        <div className="flex items-center gap-4">


                            <div className="text-[7px] md:text-base tracking-tighter font-Helvetica border-2 rounded-full px-2 py-1 md:px-6 md:py-3 z-20 
                        transition-all duration-1000 text-black group-hover:text-white group-hover:border-white
                    group-data-[state=open]:text-white group-data-[state=open]:border-white">
                                {trigger.subLabel}

                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Pop effect on cursor-follow image with smooth delayed movement */}
            {hoveredTrigger && (
                <div
                    className="fixed pointer-events-none z-50 transition-all duration-400 ease-out"
                    style={{
                        left: coords.x + 20,
                        top: coords.y - 100,
                        transform: `scale(${isVisible ? 1 : 0})`,
                        opacity: isVisible ? 1 : 0,
                    }}
                >
                    <div className="bg-white rounded-lg shadow-2xl overflow-hidden border">
                        <Image
                            width={100}
                            height={100}
                            src={hoveredTrigger.image}
                            alt="Preview"
                            className="w-64 h-40 object-cover"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}