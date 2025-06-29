import React from 'react';
import { ArrowUpRight } from "lucide-react";
import linkedinlogo from "@/public/logo/linkedinwhite.png"
import githublogo from "@/public/logo/githubwhite.png"
import gmaillogo from "@/public/logo/gmailwhite.png"
import Image from "next/image";
import Link from 'next/link';
import Waves from './waves';
import logoBottom from '@/public/logoBottom.png'



const Cta = () => {

    const email = "hizkiarssihombing@gmail.com";
    const subject = "Hello!";
    const body = "I need to build a website.";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
        subject
    )}&body=${encodeURIComponent(body)}`;

    return (
        <div className="font-Aeonik  " id={"contact"}>

            {/* <div className="bg-[url('/ctabg.jpg')] bg-cover rounded-[100px] mx-2 ">
                <div className={"backdrop-blur-sm bg-black/30 rounded-[100px] h-full 4"}>

                    <div className={"flex flex-col items-center justify-center py-20 "}>
                        <Link href="https://wa.me/6281546746059" target="_blank" rel="noopener noreferrer" >
                            <div
                                className="bg-white z-50 text-black p-8 rounded-xl transition-colors duration-400 ease-out group h-[300px] w-[500px] "
                            >
                                <p className="text-sm md:text-xl transition-all duration-300 ">
                                    The world is waiting for your <span className="font-bold tracking-wide">website</span>.
                                </p>
                                <div className='flex items-end justify-between'>
                                    <h2 className="text-7xl md:text-8xl tracking-tight transition-all duration-300 ">
                                        Contact <br />
                                        <span className="flex items-center">
                                            Hizkia
                                        </span>

                                    </h2>
                                    <div className='flex justify-end'>
                                        <ArrowUpRight className="size-20 md:size-24 transition-all border-white duration-300 md:group-hover:size-28 rotate-45 
                                           md:group-hover:border md:group-hover:border-black md:group-hover:rounded-full md:group-hover:rotate-0  " />

                                    </div>
                                </div>

                            </div>
                        </Link>

                        <Waves className='rounded-[100px] -z-10'
                            lineColor="#fff"
                            backgroundColor="rgba(255, 255, 255, 0.2)"
                            waveSpeedX={0.02}
                            waveSpeedY={0.01}
                            waveAmpX={40}
                            waveAmpY={20}
                            friction={0.9}
                            tension={0.01}
                            maxCursorMove={120}
                            xGap={12}
                            yGap={36}
                        />

                    </div>


                </div>
            </div> */}
            

            <div className='relative flex flex-col justify-between items-center group h-[600px]'>
                <p className='text-[20px] z-20'>Big ideas need bold support.</p>
                {/* <p className='font-bold text-[35px] bg-black text-[#f0f0f0] rounded-full w-fit absolute top-48 px-4 left-12 -rotate-12 z-10'>CALL</p> */}
                <p className='text-[50px]  opacity-0 group-hover:opacity-100 transition-all duration-1000 tracking-tighter w-fit absolute top-48 px-4 left-16 z-20 '>call</p>
                <Image src={logoBottom} className='w-[1000px] object-cover absolute -bottom-32 left-1/2 transform -translate-x-1/2 z-10 group-hover:bottom-32 transition-all duration-1000' alt='' />
                <p className='text-[50px]  opacity-0 group-hover:opacity-100 transition-all duration-1000 tracking-tighter absolute top-48 px-4 right-20 z-20'>now.</p>
                <div className={"flex md:flex-row flex-col justify-between gap-10 w-full my-10 opacity-0 group-hover:opacity-100 transition-all duration-1000 "}>

                <Link
                    className={"border-t-2 w-full  items-center px-3 py-3  hover:bg-opacity-30 md:hover:rounded-xl hover:rounded-t-xl  transition-all  duration-300 ease-out "}
                    href="https://github.com/hizkiarss" target="_blank" rel="noopener noreferrer">
                    <button className={"flex justify-between w-full"}>
                        <div className={"text-start"}>
                            <p className={"font-bold text-sm md:text-xl"}>Github</p>
                            <p className={"text-xs md:text-base "}>github.com/hizkiarss</p>
                        </div>
                        <Image src={githublogo} className={"h-8 md:h-12 w-fit invert"} alt="Github Logo" />
                    </button>
                </Link>


                <Link
                    className={"border-t-2 w-full  items-center px-3 py-3  hover:bg-opacity-30 md:hover:rounded-xl hover:rounded-t-xl  transition-all  duration-300 ease-out "}
                    href={mailtoLink} target="_blank" rel="noopener noreferrer">
                    <button className={"flex justify-between w-full items-center"}>
                        <div className={"text-start"}>
                            <p className={"font-bold text-sm md:text-xl"}>Gmail</p>
                            <p className={"text-xs md:text-base "}>hizkiarssihombing@gmail.com</p>
                        </div>
                        <Image src={gmaillogo} className={"h-6 md:h-10 w-fit invert z-0"} alt="Gmail Logo" />
                    </button>
                </Link>


                <Link
                    className={"border-t-2 w-full  items-center px-3 py-3  hover:bg-opacity-30 md:hover:rounded-xl hover:rounded-t-xl  transition-all  duration-300 ease-out "}
                    href="https://www.linkedin.com/in/hizkiasihombing/" target="_blank" rel="noopener noreferrer">
                    <button className={"flex justify-between w-full items-center"}>
                        <div className={"text-start"}>
                            <p className={"font-bold text-sm md:text-xl"}>Linkedin</p>
                            <p className={"text-xs md:text-base"}>linkedin.com/in/hizkiasihombing/</p>
                        </div>
                        <Image src={linkedinlogo} className={"h-8 md:h-10 w-fit invert z-0"} alt="Linkedin Logo" />
                    </button>
                </Link>


            </div>
                {/* <p className='font-bold text-[35px] bg-black text-[#f0f0f0] rounded-full w-fit absolute top-60 px-4 right-12 rotate-6 z-10'>NOW</p> */}
            </div>

        </div>
    );
};

export default Cta;