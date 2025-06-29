import React from 'react';
import Image from "next/image";
import Link from 'next/link';


const Cta = () => {

    const email = "hizkiarssihombing@gmail.com";
    const subject = "Hello!";
    const body = "I need to build a website.";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
        subject
    )}&body=${encodeURIComponent(body)}`;

    return (
        <div className="font-Aeonik  " id={"contact"}>

          
            

            <div className='relative flex flex-col justify-between items-center group h-[600px]'>
                <p className='text-[20px] z-20'>Big ideas need bold support.</p>
                <p className='text-[50px]  opacity-0 group-hover:opacity-100 transition-all duration-1000 tracking-tighter w-fit absolute top-48 px-4 left-16 z-20 '>call</p>
                <Image width={1000} height={500} src="/photos/logoBottom.png" className='object-cover absolute -bottom-32 left-1/2 transform -translate-x-1/2 z-10 group-hover:bottom-32 transition-all duration-1000' alt='' />
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
                        <Image  width={100} height={100} src="/logo/githubwhite.png" className={"h-8 md:h-12 w-fit invert"} alt="Github Logo" />
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
                        <Image src="/logo/gmailwhite.png" width={100} height={100} className={"h-6 md:h-10 w-fit invert z-0"} alt="Gmail Logo" />
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
                        <Image src="/logo/linkedinwhite.png" width={100} height={100} className={"h-8 md:h-10 w-fit invert z-0"} alt="Linkedin Logo" />
                    </button>
                </Link>


            </div>
            </div>

        </div>
    );
};

export default Cta;