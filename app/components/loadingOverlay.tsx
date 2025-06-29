'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';
import logo from "@/public/logo/logo.svg";
import Image from 'next/image';



const LoadingOverlay = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [animateOut, setAnimateOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateOut(true);

            setTimeout(() => setIsVisible(false), 1000);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={clsx(
                'fixed inset-0 z-50 bg-white text-white flex items-center justify-center transition-transform duration-1000',
                animateOut ? '-translate-y-full' : 'translate-y-0'
            )}
        >

                <Image src={logo} alt="logo" className="w-60" />

        </div>
    );
};

export default LoadingOverlay;
