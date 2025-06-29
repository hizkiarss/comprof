'use client';
import React, {useState, useEffect} from 'react';
import {goToDiv} from "@/utils/goToContact";
import Image from "next/image";
import {DateTime} from 'luxon';

const DenpasarClock = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateClock = () => {
            const now = DateTime.now().setZone('Asia/Makassar');
            setTime(now.toFormat('h:mm a'));
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    return <p className="text-gray-500">{time}</p>;
};

const Navbar = () => {
    return (
        <nav className="mt-0 md:py-10 text-xs md:text-base h-screen flex flex-col justify-between sticky top-0 !w-[80px] z-10 bg-white ">
            <div>
                <Image src="/logo/logo.svg" alt="logo" width={0} height={0} className="w-20"/>

                <div className="mt-4 flex flex-col gap-1 items-start">
                    <button className="text-gray-400 hover:text-black transition-all duration-300">
                        About Me
                    </button>
                    <button className="text-gray-400 hover:text-black transition-all duration-300">
                        My Works
                    </button>
                    <button onClick={() => goToDiv("contact")}
                            className="text-gray-400 hover:text-black transition-all duration-300">
                        Contact
                    </button>
                </div>
            </div>


            <div>
                <div className="group relative h-8 overflow-hidden">
                    <p className="transition-all absolute duration-300 group-hover:-translate-y-5">
                        @hizkias
                    </p>
                    <div
                        className="absolute bottom-0 flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:top-0">
                        <Image src="/logo/githubwhite.png" alt="github logo" width={28} height={28} className="w-7 invert"/>
                        <Image src="/logo/linkedinwhite.png" alt="linkedin logo" width={28} height={28} className="w-7 invert"/>
                    </div>
                </div>

                <div className="text-gray-500">
                    <p>Denpasar</p>
                    <DenpasarClock/>
                </div>
            </div>


        </nav>
    );
};

export default Navbar;
