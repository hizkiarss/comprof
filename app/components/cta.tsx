"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

const Cta = () => {
    const [isVisible, setIsVisible] = useState(false);
    const parentRef = useRef<HTMLDivElement>(null);

    const email = "hizkiarssihombing@gmail.com";
    const subject = "Hello!";
    const body = "I need to build a website.";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 30% of the parent is visible
        );

        if (parentRef.current) {
            observer.observe(parentRef.current);
        }

        return () => {
            if (parentRef.current) {
                observer.unobserve(parentRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={parentRef}
            className="font-Aeonik overflow-hidden"
            id="contact"
        >
            <div className='relative flex flex-col justify-between items-center group h-[600px]'>
                <p className='text-[20px] z-20'>Big ideas need bold support.</p>
                
                <p className={`text-[50px] transition-all duration-1000 tracking-tighter w-fit absolute top-48 px-4 left-16 z-20 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    call
                </p>

                <div
                    className={`w-[1140px] bg-white absolute left-1/2 transform -translate-x-1/2 z-10 flex justify-center transition-all duration-1000 
                    ${isVisible ? "bottom-64" : "-bottom-32"}`}
                >
                    <Image
                        width={1000}
                        height={500}
                        src="/photos/logoBottom.png"
                        className='w-[500px] md:w-[1000px] md:h-[500px] object-cover'
                        alt=''
                    />
                </div>

                <p className={`text-[50px] transition-all duration-1000 tracking-tighter absolute top-48 px-4 right-20 z-20 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                    now.
                </p>

                <div
                    className={`flex md:flex-row flex-col justify-between gap-10 w-full my-10 transition-all duration-1000 
                    ${isVisible ? "opacity-100" : "opacity-0"}`}
                >
                    {/* Links */}
                    <Link
                        className="border-t-2 w-full items-center px-3 py-3 hover:bg-opacity-30 md:hover:rounded-xl hover:rounded-t-xl transition-all duration-300 ease-out"
                        href="https://github.com/hizkiarss"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="flex justify-between w-full">
                            <div className="text-start">
                                <p className="font-bold text-sm md:text-xl">Github</p>
                                <p className="text-xs md:text-base">github.com/hizkiarss</p>
                            </div>
                            <Image
                                width={100}
                                height={100}
                                src="/logo/githubwhite.png"
                                className="h-8 md:h-12 w-fit invert"
                                alt="Github Logo"
                            />
                        </button>
                    </Link>

                    <Link
                        className="border-t-2 w-full items-center px-3 py-3 hover:bg-opacity-30 md:hover:rounded-xl hover:rounded-t-xl transition-all duration-300 ease-out"
                        href={mailtoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="flex justify-between w-full items-center">
                            <div className="text-start">
                                <p className="font-bold text-sm md:text-xl">Gmail</p>
                                <p className="text-xs md:text-base">hizkiarssihombing@gmail.com</p>
                            </div>
                            <Image
                                src="/logo/gmailwhite.png"
                                width={100}
                                height={100}
                                className="h-6 md:h-10 w-fit invert z-0"
                                alt="Gmail Logo"
                            />
                        </button>
                    </Link>

                    <Link
                        className="border-t-2 w-full items-center px-3 py-3 hover:bg-opacity-30 md:hover:rounded-xl hover:rounded-t-xl transition-all duration-300 ease-out"
                        href="https://www.linkedin.com/in/hizkiasihombing/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="flex justify-between w-full items-center">
                            <div className="text-start">
                                <p className="font-bold text-sm md:text-xl">Linkedin</p>
                                <p className="text-xs md:text-base">linkedin.com/in/hizkiasihombing/</p>
                            </div>
                            <Image
                                src="/logo/linkedinwhite.png"
                                width={100}
                                height={100}
                                className="h-8 md:h-10 w-fit invert z-0"
                                alt="Linkedin Logo"
                            />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cta;
