"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NomadSS1 from "@/public/nomad-ss-1.png";
import Image from "next/image";
import socmedporto1 from "@/public/Social Media Creative Porto 1.png"
import socmedporto2 from "@/public/Social Media Creative Porto 2.png"
import socmedporto3 from "@/public/Social Media Creative Porto 3.png"
import { ArrowUpRight } from "lucide-react";
import ArrowRight from "@/public/right-arrow.png"



gsap.registerPlugin(ScrollTrigger);

const HorizontalCarousel = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const slider = sliderRef.current;
        const panels = gsap.utils.toArray<HTMLElement>(".panel");

        if (!container || !slider || panels.length === 0) return;

        gsap.to(panels, {
            xPercent: -100 * (panels.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                start: "top-=5 top",
                end: () => `+=${slider.scrollWidth + 300}`,
                onUpdate: () => {
                    panels.forEach(panel => {
                        const bounds = panel.getBoundingClientRect();
                        const panelCenter = bounds.left + bounds.width / 2;
                        const viewportCenter = window.innerWidth / 2;

                        if (Math.abs(panelCenter - viewportCenter) < bounds.width / 2) {
                            gsap.to(panel, {
                                y: 0,
                                // boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
                                backgroundColor: "#F0F0F0",
                                color: "#00000",
                                duration: 0.3,
                                ease: "power2.out",
                            });
                        } else {
                            // Panel is inactive
                            gsap.to(panel, {
                                y: 0,
                                boxShadow: "none",
                                backgroundColor: "#ffff",
                                color: "#000000",
                                duration: 0.3,
                                ease: "power2.out",
                            });
                        }
                    });
                }

            },
        });

        ScrollTrigger.refresh();
    }, []);


    return (
        <div className="relative">


            <div
                ref={containerRef}
                className="relative w-full overflow-hidden h-screen flex flex-col  justify-start mt-20 pl-10"
            >

                <p className="font-bold text-[40px]">SEE WHAT WE CAN <span
                    className={"font-Edwardian tracking-wide font-medium md:-mb-3 text-[80px]"}>bring</span> TO THE
                    <span
                        className={"font-Edwardian tracking-wide font-medium md:-mb-3 ml-3 text-[80px]"}>table.</span> </p>
                <div
                    ref={sliderRef}
                    className="flex w-max items-center gap-10 "
                >

                    <div className="panel w-[1000px] rounded-xl px-6 py-6 ">
                        <div className="text-4xl">
                            <div className="flex gap-4 h-[408px]">
                                <div className="overflow-hidden rounded-xl relative group">
                                    <Image
                                        src={socmedporto1}
                                        alt="slide"
                                        className="w-[800px] h-full object-cover object-top rounded-xl transform transition duration-300 group-hover:scale-105 origin-center"
                                    />
                                    <div className="absolute bottom-4 right-4 bg-white rounded-full overflow-hidden flex items-center transition-all duration-300 w-12 h-12 group-hover:w-[120px] px-3">
                                        <ArrowUpRight className="size-6 shrink-0" />
                                        <p className="ml-2 transform translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-sm whitespace-nowrap">
                                            See More
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 h-[408px]">
                                    <div className="overflow-hidden rounded-xl relative group">
                                        <Image src={socmedporto2} alt="slide"
                                            className="w-[400px] h-[200px] object-cover object-top rounded-xl transform transition duration-300 hover:scale-110 origin-center"
                                        />
                                        <div className="absolute bottom-4 right-4 bg-white rounded-full overflow-hidden flex items-center transition-all duration-300 w-12 h-12 group-hover:w-[120px] px-3">
                                            <ArrowUpRight className="size-6 shrink-0" />
                                            <p className="ml-2 transform translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-sm whitespace-nowrap">
                                                See More
                                            </p>
                                        </div>
                                    </div>

                                    <div className="overflow-hidden rounded-xl relative group">
                                        <Image src={socmedporto3} alt="slide"
                                            className="w-[400px] h-[200px] object-cover object-top rounded-xl transform transition duration-300 hover:scale-110 origin-center"
                                        />
                                        <div className="absolute bottom-4 right-4 bg-white rounded-full overflow-hidden flex items-center transition-all duration-300 w-12 h-12 group-hover:w-[120px] px-3">
                                            <ArrowUpRight className="size-6 shrink-0" />
                                            <p className="ml-2 transform translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-sm whitespace-nowrap">
                                                See More
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex gap-20 items-center">
                                <div className="flex gap-2 items-center leading-[0.95]">
                                    <h3 className="tracking-tight mt-1 text-[60px]">01.</h3>
                                    <h3 className="tracking-tight mt-1 text-[30px]">Website <br /> Development</h3>
                                </div>
                                <div>
                                    <p className="text-base mt-2">I help businesses grow online by building fast, responsive, and SEO-optimized websites using modern technologies like React, Next.js, and Laravel—designed to deliver seamless user experiences, improve performance, and convert visitors into customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel w-[1000px] rounded-xl px-6 py-6 mt-2">
                        <div className="text-4xl">
                            <div className="flex gap-4 h-[408px]">
                                <div className="overflow-hidden rounded-xl relative group">
                                    <Image
                                        src={socmedporto1}
                                        alt="slide"
                                        className="w-[800px] h-full object-cover object-top rounded-xl transform transition duration-300 group-hover:scale-105 origin-center"
                                    />
                                    <div className="absolute bottom-4 right-4 bg-white rounded-full overflow-hidden flex items-center transition-all duration-300 w-12 h-12 group-hover:w-[120px] px-3">
                                        <ArrowUpRight className="size-6 shrink-0" />
                                        <p className="ml-2 transform translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-sm whitespace-nowrap">
                                            See More
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 h-[408px]">
                                    <div className="overflow-hidden rounded-xl relative group">
                                        <Image src={socmedporto2} alt="slide"
                                            className="w-[400px] h-[200px] object-cover object-top rounded-xl transform transition duration-300 hover:scale-110 origin-center"
                                        />
                                        <div className="absolute bottom-4 right-4 bg-white rounded-full overflow-hidden flex items-center transition-all duration-300 w-12 h-12 group-hover:w-[120px] px-3">
                                            <ArrowUpRight className="size-6 shrink-0" />
                                            <p className="ml-2 transform translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-sm whitespace-nowrap">
                                                See More
                                            </p>
                                        </div>
                                    </div>

                                    <div className="overflow-hidden rounded-xl relative group">
                                        <Image src={socmedporto3} alt="slide"
                                            className="w-[400px] h-[200px] object-cover object-top rounded-xl transform transition duration-300 hover:scale-110 origin-center"
                                        />
                                        <div className="absolute bottom-4 right-4 bg-white rounded-full overflow-hidden flex items-center transition-all duration-300 w-12 h-12 group-hover:w-[120px] px-3">
                                            <ArrowUpRight className="size-6 shrink-0" />
                                            <p className="ml-2 transform translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-sm whitespace-nowrap">
                                                See More
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex gap-20 items-center">
                                <div className="flex gap-2 items-center leading-[0.95]">
                                    <h3 className="tracking-tight mt-1 text-[60px]">02.</h3>
                                    <h3 className="tracking-tight mt-1 text-[30px]">Social Media <br /> Management</h3>
                                </div>
                                <div>
                                    <p className="text-base mt-2">Creating engaging social media strategies that build brand awareness, foster community engagement, and drive meaningful connections with your target audience across all platforms.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel w-[1000px] rounded-xl px-6 py-6 mt-2">
                        <div className="text-4xl">
                            <div className="flex gap-4 h-[408px]">
                                <div className="overflow-hidden rounded-xl relative group">
                                    <Image
                                        src={socmedporto1}
                                        alt="slide"
                                        className="w-[800px] h-full object-cover object-top rounded-xl transform transition duration-300 group-hover:scale-105 origin-center"
                                    />
                                    <div className="absolute bottom-4 right-4 bg-white rounded-full overflow-hidden flex items-center transition-all duration-300 w-12 h-12 group-hover:w-[120px] px-3">
                                        <ArrowUpRight className="size-6 shrink-0" />
                                        <p className="ml-2 transform translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-sm whitespace-nowrap">
                                            See More
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 h-[408px]">
                                    <div className="overflow-hidden rounded-xl relative group">
                                        <Image src={socmedporto2} alt="slide"
                                            className="w-[400px] h-[200px] object-cover object-top rounded-xl transform transition duration-300 hover:scale-110 origin-center"
                                        />
                                        <div className="absolute bottom-4 right-4 bg-white rounded-full overflow-hidden flex items-center transition-all duration-300 w-12 h-12 group-hover:w-[120px] px-3">
                                            <ArrowUpRight className="size-6 shrink-0" />
                                            <p className="ml-2 transform translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-sm whitespace-nowrap">
                                                See More
                                            </p>
                                        </div>
                                    </div>

                                    <div className="overflow-hidden rounded-xl relative group">
                                        <Image src={socmedporto3} alt="slide"
                                            className="w-[400px] h-[200px] object-cover object-top rounded-xl transform transition duration-300 hover:scale-110 origin-center"
                                        />
                                        <div className="absolute bottom-4 right-4 bg-white rounded-full overflow-hidden flex items-center transition-all duration-300 w-12 h-12 group-hover:w-[120px] px-3">
                                            <ArrowUpRight className="size-6 shrink-0" />
                                            <p className="ml-2 transform translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-sm whitespace-nowrap">
                                                See More
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex gap-20 items-center">
                                <div className="flex gap-2 items-center leading-[0.95]">
                                    <h3 className="tracking-tight mt-1 text-[60px]">03.</h3>
                                    <h3 className="tracking-tight mt-1 text-[30px]">Brand <br /> Strategy</h3>
                                </div>
                                <div>
                                    <p className="text-base mt-2">Developing comprehensive brand strategies that define your unique value proposition, visual identity, and messaging to create lasting impressions and drive business growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex justify-end">
                    <div className=" gap-2 mt-1 bg-black text-white rounded-full px-3 py-2 text-xs flex ">
                        <p> Scroll for more</p>
                        <Image src={ArrowRight} alt="arrow-right" className="w-4 invert" />
                    </div>
                </div>



                <div>
                </div>
            </div>

        </div>
    );
};

export default HorizontalCarousel;
