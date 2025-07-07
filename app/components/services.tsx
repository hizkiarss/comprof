"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";



gsap.registerPlugin(ScrollTrigger);

const HorizontalCarousel = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const slider = sliderRef.current;
        const panels = gsap.utils.toArray<HTMLElement>(".panel");
        const isDesktop = window.innerWidth >= 768;

        if (!container || !slider || panels.length === 0) return;
        if (!isDesktop) return;
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
        <div className="relative mt-10 ">

            <div
                ref={containerRef}
                className="relative w-full md:overflow-hidden  flex flex-col  justify-start mt-0 md:mt-20 mt:pl-10"
            >

                <p className="text-[32px] md:text-[50px] leading-9 md:leading-normal tracking-tighter ml-4 md:mx-0">See what we can <br className="block md:hidden" /> <span
                    className={"font-Edwardian tracking-tight font-medium md:-mb-3 text-[62px] md:text-[80px] mr-2 md:mr-0"}>bring</span> to the
                    <span
                        className={"font-Edwardian tracking-wide font-medium md:-mb-3 ml-3 text-[62px] md:text-[80px] "}>table.</span> </p>

                <div
                    ref={sliderRef}
                    className="flex flex-col  md:flex-row w-max justify-start md:items-center gap-0 md:gap-10 mt-6 md:mt-0"
                >

                    <div className="panel w-screen md:w-[1000px]  mx-2 px-2 md:px-6 py-6 rounded-xl">
                        <div className="text-4xl bg-[#F0F0F0] p-4 rounded-xl">
                            <div className="flex gap-4 h-[200px] md:h-[408px]">
                                <div className="overflow-hidden rounded-xl md:h-fit h-[200px] relative   group">
                                    <Image
                                        src="/photos/Social Media Creative Porto 1.png"
                                        alt="slide"
                                        width={800}
                                        height={800}
                                        className="w-[400px] h-[200px] md:w-[800px] md:h-full object-cover object-top rounded-xl transform transition duration-300 group-hover:scale-105 origin-center"
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
                                        <Image src="/photos/Social Media Creative Porto 2.png" width={400} height={200} alt="slide"
                                            className=" w-[400px] h-[98px] md:w-[400px] md:h-[200px] object-cover object-top rounded-xl transform transition duration-300 hover:scale-110 origin-center"
                                        />
                                        <div className="absolute bottom-4 right-4 bg-white rounded-full overflow-hidden flex items-center transition-all duration-300 w-12 h-12 group-hover:w-[120px] px-3">
                                            <ArrowUpRight className="size-6 shrink-0" />
                                            <p className="ml-2 transform translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-sm whitespace-nowrap">
                                                See More
                                            </p>
                                        </div>
                                    </div>

                                    <div className="overflow-hidden rounded-xl relative group">
                                        <Image src="/photos/Social Media Creative Porto 3.png" width={400} height={200} alt="slide"
                                            className="w-[400px] h-[98px] md:w-[400px] md:h-[200px] object-cover object-top rounded-xl transform transition duration-300 hover:scale-110 origin-center"
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

                            <div className="mt-4 flex flex-col md:flex-row md:gap-20 items-start md:items-center">
                                <div className="flex gap-2 items-center leading-[0.95]">
                                    <h3 className="tracking-tight mt-1 text-[50px] md:text-[60px]">01.</h3>
                                    <h3 className="tracking-tight mt-1 text-[25px] md:text-[30px]">Website <br /> Development</h3>
                                </div>
                                <div>
                                    <p className="text-sm md:text-base mt-4 md:mt-2">I help businesses grow online by building fast, responsive, and SEO-optimized websites using modern technologies like React, Next.js, and Laravel—designed to deliver seamless user experiences, improve performance, and convert visitors into customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel w-screen md:w-[1000px]  mx-2 px-2 md:px-6 py-6 rounded-xl">
                        <div className="text-4xl bg-[#F0F0F0] p-4 rounded-xl">
                            <div className="flex gap-4 h-[200px] md:h-[408px]">
                                <div className="overflow-hidden rounded-xl md:h-fit h-[200px] relative   group">
                                    <Image
                                        src="/photos/Social Media Creative Porto 1.png"
                                        alt="slide"
                                        width={800}
                                        height={800}
                                        className="w-[400px] h-[200px] md:w-[800px] md:h-full object-cover object-top rounded-xl transform transition duration-300 group-hover:scale-105 origin-center"
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
                                        <Image src="/photos/Social Media Creative Porto 2.png" width={400} height={200} alt="slide"
                                            className=" w-[400px] h-[98px] md:w-[400px] md:h-[200px] object-cover object-top rounded-xl transform transition duration-300 hover:scale-110 origin-center"
                                        />
                                        <div className="absolute bottom-4 right-4 bg-white rounded-full overflow-hidden flex items-center transition-all duration-300 w-12 h-12 group-hover:w-[120px] px-3">
                                            <ArrowUpRight className="size-6 shrink-0" />
                                            <p className="ml-2 transform translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-sm whitespace-nowrap">
                                                See More
                                            </p>
                                        </div>
                                    </div>

                                    <div className="overflow-hidden rounded-xl relative group">
                                        <Image src="/photos/Social Media Creative Porto 3.png" width={400} height={200} alt="slide"
                                            className="w-[400px] h-[98px] md:w-[400px] md:h-[200px] object-cover object-top rounded-xl transform transition duration-300 hover:scale-110 origin-center"
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

                            <div className="mt-4 flex flex-col md:flex-row md:gap-20 items-start md:items-center">
                                <div className="flex gap-2 items-center leading-[0.95]">
                                    <h3 className="tracking-tight mt-1 text-[50px] md:text-[60px]">01.</h3>
                                    <h3 className="tracking-tight mt-1 text-[25px] md:text-[30px]">Website <br /> Development</h3>
                                </div>
                                <div>
                                    <p className="text-sm md:text-base mt-4 md:mt-2">I help businesses grow online by building fast, responsive, and SEO-optimized websites using modern technologies like React, Next.js, and Laravel—designed to deliver seamless user experiences, improve performance, and convert visitors into customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel w-screen md:w-[1000px]  mx-2 px-2 md:px-6 py-6 rounded-xl">
                        <div className="text-4xl bg-[#F0F0F0] p-4 rounded-xl">
                            <div className="flex gap-4 h-[200px] md:h-[408px]">
                                <div className="overflow-hidden rounded-xl md:h-fit h-[200px] relative   group">
                                    <Image
                                        src="/photos/Social Media Creative Porto 1.png"
                                        alt="slide"
                                        width={800}
                                        height={800}
                                        className="w-[400px] h-[200px] md:w-[800px] md:h-full object-cover object-top rounded-xl transform transition duration-300 group-hover:scale-105 origin-center"
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
                                        <Image src="/photos/Social Media Creative Porto 2.png" width={400} height={200} alt="slide"
                                            className=" w-[400px] h-[98px] md:w-[400px] md:h-[200px] object-cover object-top rounded-xl transform transition duration-300 hover:scale-110 origin-center"
                                        />
                                        <div className="absolute bottom-4 right-4 bg-white rounded-full overflow-hidden flex items-center transition-all duration-300 w-12 h-12 group-hover:w-[120px] px-3">
                                            <ArrowUpRight className="size-6 shrink-0" />
                                            <p className="ml-2 transform translate-x-6 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-sm whitespace-nowrap">
                                                See More
                                            </p>
                                        </div>
                                    </div>

                                    <div className="overflow-hidden rounded-xl relative group">
                                        <Image src="/photos/Social Media Creative Porto 3.png" width={400} height={200} alt="slide"
                                            className="w-[400px] h-[98px] md:w-[400px] md:h-[200px] object-cover object-top rounded-xl transform transition duration-300 hover:scale-110 origin-center"
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

                            <div className="mt-4 flex flex-col md:flex-row md:gap-20 items-start md:items-center">
                                <div className="flex gap-2 items-center leading-[0.95]">
                                    <h3 className="tracking-tight mt-1 text-[50px] md:text-[60px]">01.</h3>
                                    <h3 className="tracking-tight mt-1 text-[25px] md:text-[30px]">Website <br /> Development</h3>
                                </div>
                                <div>
                                    <p className="text-sm md:text-base mt-4 md:mt-2">I help businesses grow online by building fast, responsive, and SEO-optimized websites using modern technologies like React, Next.js, and Laravel—designed to deliver seamless user experiences, improve performance, and convert visitors into customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                   



                </div>


                {/* <div className="flex justify-end">
                    <div className=" gap-2 mt-1 bg-black text-white rounded-full px-3 py-2 text-xs flex ">
                        <p> Scroll for more</p>
                        <Image width={16}
                                height={16} src="/photos/right-arrow.png" alt="arrow-right" className="w-4 invert" />
                    </div>
                </div> */}



                <div>
                </div>
            </div>

        </div>
    );
};

export default HorizontalCarousel;
