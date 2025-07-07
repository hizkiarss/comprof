"use client"
import React, { useState } from 'react'
import {
    Drawer,
    DrawerContent,
    
} from "@/components/ui/drawer"
import Image from 'next/image'
import DenpasarClock from '@/utils/denpasarClock';
import { ArrowRight } from 'lucide-react';


const NavbarMobile = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    return (
        <div className='
  md:hidden 
  mb-2
  flex justify-between items-center 
  w-screen pl-0 px-2 pt-6   
  sticky top-0 z-50 
  bg-gradient-to-t from-white/0 via-white/90 to-white/100 
'>
            <Image src="/logo/logo.svg" alt="logo" width={0} height={0} className="w-20" />

            {/* Burger button is OUTSIDE Drawer */}
            <button
                aria-label='burgermenu'
                onClick={() => setMenuOpen(true)}
                className='z-50  rounded-full  flex items-center justify-center h-fit'
            >
                <div className='size-10 space-y-1.5 relative flex flex-col justify-center items-center'>
                    <div
                        className={`w-6 h-[2px] bg-black transition duration-500 ease-in-out ${isMenuOpen && "-rotate-45 translate-y-1.5"}`}
                    ></div>
                    <div
                        className={`w-6 h-[2px] bg-black transition duration-500 ease-in-out ${isMenuOpen && "rotate-45 -translate-y-0.5"}`}
                    ></div>
                </div>
            </button>

            {/* Drawer */}
            <Drawer open={isMenuOpen} onOpenChange={setMenuOpen}>
                <DrawerContent className='pt-5 px-4 pb-3'>
                    {/* <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader> */}
                    {/* <DrawerFooter>
                        <Button onClick={() => setMenuOpen(false)}>Submit</Button>
                        <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter> */}

                    <div className="text-gray-500 mt-4 text-xs flex justify-between">
                        <p>Denpasar</p>
                        <DenpasarClock />
                    </div>




                    <div className=''>
                        <div className='gap-3 flex flex-col w-full items-start   mt-6'>
                            <button className='text-4xl tracking-tighter flex gap-2 items-center '>
                                Home
                                <ArrowRight className='-mb-1' />
                            </button>

                            <button className='text-4xl tracking-tighter flex gap-2 items-center '>
                                About Us
                                <ArrowRight className='-mb-1' />

                            </button>

                            <button className='text-4xl tracking-tighter flex gap-2 items-center '>
                                Our Work
                                <ArrowRight className='-mb-1' />

                            </button>

                        </div>


                        <div className='flex gap-2 justify-end mt-6'>
                            <Image src={"/logo/linkedinwhite.png"} alt='' width={20} height={20} className='invert w-7 h-fit' />
                            <Image src={"/logo/githubwhite.png"} alt='' width={20} height={20} className='invert w-7 h-fit' />
                            <Image src={"/logo/gmailwhite.png"} alt='' width={20} height={20} className='invert w-7 h-fit' />
                        </div>
                    </div>




                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default NavbarMobile
