'use client';

import Link from 'next/link';
import ImageTrail from '@/app/components/animation/ImageTrail';
import React, {useState, useEffect} from "react";
import Image from "next/image";
import Buttons from "@/components/buttons";

export default function NotFound() {
    const [isVisible, setIsVisible] = useState(false);
    const email = "hizkiarssihombing@gmail.com";
    const subject = "Hello!";
    const body = "I need to build a website.";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
            <ImageTrail
                items={[
                    'https://picsum.photos/id/287/300/300',
                    'https://picsum.photos/id/1001/300/300',
                    'https://picsum.photos/id/1025/300/300',
                    'https://picsum.photos/id/1026/300/300',
                    'https://picsum.photos/id/1027/300/300',
                    'https://picsum.photos/id/1028/300/300',
                    'https://picsum.photos/id/1029/300/300',
                    'https://picsum.photos/id/1030/300/300',
                ]}
                variant={1}
            />

            <div
                className="font-Aeonik w-[1100px] mt-[4%] pointer-events-auto text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-transparent"
                id="contact"
            >
                <div className='relative flex flex-col items-center justify-end h-[600px]'>
                    <div
                        className={`w-[450px] md:w-[1140px] bg-transparent transform flex justify-center transition-all duration-1000 absolute right-3
                        ${isVisible ? "bottom-72 md:bottom-64 opacity-100" : "-bottom-32 opacity-0"}`}
                    >
                        <Image
                            src={"/photos/GalihClear.png"}
                            width={600}
                            height={500}
                            alt={""}
                            className={`rounded-full w-[200px] text-[50px] rotate-3 md:rotate-18 transition-all duration-1000 absolute top-16 md:top-48 px-4 left-16  ${isVisible ? "opacity-100" : "opacity-0"}`}
                        />
                        <Image
                            width={600}
                            height={500}
                            src="/photos/404c.png"
                            className='ml-10 md:w-[700px] object-cover'
                            alt=''
                        />
                        <Image
                            src={"/photos/KiaClear.png"}
                            width={600}
                            height={500}
                            alt={""}
                            className={`text-[50px] w-[180px] rounded-full -rotate-6 md:rotate-10 transition-all duration-1000 tracking-tighter absolute bottom-[260px] md:top-12 px-4 right-20 ${isVisible ? "opacity-100" : "opacity-0"}`}
                        />

                        <ImageTrail
                            z={"z-20"}
                            items={[
                                'https://picsum.photos/id/287/300/300',
                                'https://picsum.photos/id/1001/300/300',
                                'https://picsum.photos/id/1025/300/300',
                                'https://picsum.photos/id/1026/300/300',
                                'https://picsum.photos/id/1027/300/300',
                                'https://picsum.photos/id/1028/300/300',
                                'https://picsum.photos/id/1029/300/300',
                                'https://picsum.photos/id/1030/300/300',
                            ]}
                            variant={1}
                        />
                    </div>

                    <div
                        className={`text-[20px] flex flex-col items-center gap-4  transition-all mt-8 duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
                        <p>
                            We couldn&apos;t find the page you&apos;re looking for.
                        </p>
                        <Link className="" href="/">
                            <Buttons
                                content="Back to home"
                                className="text-sm md:text-base mt-4 md:mt-0 hidden md:flex"
                            />
                        </Link>
                    </div>

                    <div
                        className={`flex md:flex-row flex-col justify-between gap-2 md:gap-10 w-full md:mb-10 md:mt-6 transition-all duration-1000 
                        ${isVisible ? "opacity-100" : "opacity-0"}`}
                    >
                        <Link
                            className="border-t-2 w-full items-center px-3 py-3 hover:bg-opacity-30 md:hover:rounded-xl hover:rounded-t-xl transition-all duration-300 ease-out"
                            href="https://github.com/hizkiarss"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="flex justify-between w-full">
                                <div className="text-start">
                                    <p className="font-bold text-lg md:text-xl">Github</p>
                                    <p className="text-xs md:text-base">github.com/hizkiarss</p>
                                </div>
                                <Image
                                    width={100}
                                    height={100}
                                    src="/logo/githubwhite.png"
                                    className="h-10 md:h-12 w-fit invert"
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
                                    <p className="font-bold text-lg md:text-xl">Gmail</p>
                                    <p className="text-xs md:text-base">hizkiarssihombing@gmail.com</p>
                                </div>
                                <Image
                                    src="/logo/gmailwhite.png"
                                    width={100}
                                    height={100}
                                    className="h-8 md:h-10 w-fit invert"
                                    alt="Gmail Logo"
                                />
                            </button>
                        </Link>

                        <Link
                            className="border-t-2 w-full items-center px-3 py-3 pb-5 hover:bg-opacity-30 md:hover:rounded-xl hover:rounded-t-xl transition-all duration-300 ease-out"
                            href="https://www.linkedin.com/in/hizkiasihombing/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="flex justify-between w-full items-center">
                                <div className="text-start">
                                    <p className="font-bold text-lg md:text-xl">Linkedin</p>
                                    <p className="text-xs md:text-base">linkedin.com/in/hizkiasihombing/</p>
                                </div>
                                <Image
                                    src="/logo/linkedinwhite.png"
                                    width={100}
                                    height={100}
                                    className="h-10 md:h-10 w-fit invert"
                                    alt="Linkedin Logo"
                                />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}