"use client"

import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import socmedporto1 from "@/public/Social Media Creative Porto 1.png"
import socmedporto2 from "@/public/Social Media Creative Porto 2.png"
import socmedporto3 from "@/public/Social Media Creative Porto 3.png"
import SeeMoreButton from '@/components/seeMoreButton'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import Autoplay from "embla-carousel-autoplay"

const ImageCarousel = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000 })
    )

    // Portfolio data array
    const portfolioItems = [
        {
            id: 1,
            image: socmedporto1,
            alt: 'Social Media Creative Portfolio 1',
            badges: ['Social Media Management', 'Website Development']
        },
        {
            id: 2,
            image: socmedporto2,
            alt: 'Social Media Creative Portfolio 2',
            badges: ['Social Media Management', 'Website Development']
        },
        {
            id: 3,
            image: socmedporto3,
            alt: 'Social Media Creative Portfolio 3',
            badges: ['Social Media Management', 'Website Development']
        }
    ]

    return (
        <div>
            <Carousel 
                className='relative'
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.play}
            >
                <CarouselContent>
                    {portfolioItems.map((item, index) => (
                        <CarouselItem 
                            key={item.id} 
                            className='relative group h-[550px] w-full overflow-hidden rounded-xl'
                        >
                            <Image 
                                src={item.image} 
                                alt={item.alt}
                                className="w-full h-full object-cover object-top transform transition duration-300 group-hover:scale-105 origin-center overflow-hidden"
                            />
                            
                            {/* Dynamic badges */}
                            {item.badges.map((badge, badgeIndex) => (
                                <Badge 
                                    key={badgeIndex}
                                    className={`absolute left-8 rounded-2xl py-2 px-3 font-Aeonik text-xs font-normal opacity-0 group-hover:opacity-100 transition-all duration-500`}
                                    style={{ top: `${16 + (badgeIndex * 40)}px` }}
                                    variant="secondary"
                                >
                                    {badge}
                                </Badge>
                            ))}

                            <SeeMoreButton />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                
                <CarouselPrevious className='!right-10 -top-10 -translate-y-1/2 bg-black text-white' />
                <CarouselNext className='!right-0 -top-10 -translate-y-1/2 bg-black text-white' />
            </Carousel>
        </div>
    )
}

export default ImageCarousel