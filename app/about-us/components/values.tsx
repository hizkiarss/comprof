import React from 'react'
import Lottie1 from "./lottie1"
import Lottie2 from "./lottie2"
import Lottie3 from "./lottie3"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import Buttons from '@/components/buttons'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"





// import AllInOne from '@/public/all in one.mp4'
const values = () => {
  return (
    // <div className='flex gap-10  '>
    //   <Carousel className='flex-1 '>
    //     <CarouselContent>
    //       <CarouselItem >
    //         <div className=' h-screen py-10 flex flex-col justify-center'>
    //           <div className='flex items-center  '>
    //             <Lottie1 />
    //             <div className='-ml-4 text-[50px] tracking-tighter'>
    //               <p className='gap-6'>all-in-one
    //               </p>
    //               <p className='-mt-14 '>digital<span className='font-Edwardian tracking-wide text-[90px] ml-2 '>support</span></p>
    //             </div>
    //           </div>
    //           <p className='tracking-tight -mt-4'>Our team combines design, development, and marketing expertise to give you a complete digital solution in one place.Our team combines design, development, and marketing expertise to give you a complete digital solution in one place.
    //           </p>
    //             <Buttons className="mt-10" content='Explore more' />
    //         </div>




    //       </CarouselItem>
    //       <CarouselItem>...</CarouselItem>
    //       <CarouselItem>...</CarouselItem>
    //     </CarouselContent>
    //     <CarouselPrevious className='!right-10 bottom-48   bg-black text-white ' />
    //     <CarouselNext className='!right-0 bottom-48  bg-black text-white' />
    //     <Badge
    //       className={`absolute top-40  rounded-2xl py-2 px-3 font-Aeonik text-lg font-normal transition-all duration-500`}
    //       variant="secondary"
    //     >
    //       OUR APPROACH
    //     </Badge>
    //   </Carousel>

    //   <div className='flex-1 bg-black rounded-3xl my-10'>

    //   </div>




    // </div>

    // <div className='h-screen'>
    //   <div className='text-[60px] tracking-tighter gap-2 relative'>
    //     <p>We deliver <span className='ml-36'>fast output </span> through   </p>
    //     <div className=" absolute left-[230px] top-10 -translate-y-1/2">
    //       <Lottie1 />
    //     </div>


    //     <div className='relative'>
    //       <p className='ml-36 -mt-16'>all-in-one digital<span className='font-Edwardian tracking-wide text-[80px] ml-2 '>service</span> that’s </p>
    //       <div className="absolute -left-6 top-24 -translate-y-1/2">
    //         <Lottie1 />
    //       </div></div>





    //     <div className='relative'>
    //       <p className='-mt-20'>that’s <span className='ml-[93px]'>budget-</span> </p>
    //       <div className="absolute left-[420px] top-24 -translate-y-1/2">
    //         <Lottie2 />
    //       </div>
    //     </div>

    //     <div className='relative'>
    //       <p className='-mt-20'>friendly and <span className='font-Edwardian tracking-wide text-[110px] ml-2 '>rooted</span> in <span className='ml-[93px]'>clear communication</span> </p>
    //       <div className="absolute left-[435px] top-24 -translate-y-1/2">
    //         <Lottie3 />
    //       </div>
    //     </div>

    //     {/* <div className='-mt-20 relative'>
    //       <p>
    //         rooted in <span className='font-Edwardian tracking-wide text-[110px] ml-2 '>clear</span> <span className='ml-[93px]'>communication</span>
    //       </p>
    //       <div className="absolute left-[270px] top-24 -translate-y-1/2">
    //         <Lottie3 />
    //       </div>
    //     </div> */}


    //     <div className='flex items-center  '>


    //       {/* <div className='-ml-4 '>
    //         <p className='gap-6'><span className='font-Edwardian tracking-wide text-[90px] ml-2 '>support</span>
    //         </p>
    //         <p className='-mt-14 '></p>
    //       </div> */}
    //     </div>
    //   </div>

    // </div>

    <div className='bg-white z-40 py-40 '>
      <div>
        <div className='text-[50px] ml-32 tracking-tighter flex items-center'>We provide <HoverCard>
          <HoverCardTrigger className='relative'>
            <span className='ml-4 mr-5 relative flex items-center  font-Edwardian text-[80px]'>
              <div className="w-2 h-2  bg-black rounded-full animate-pulseCircle " />
              fast-output
              {/* <div className="absolute bottom-7 left-0 h-[2px] w-full overflow-hidden">
                  <div className="bg-black h-full animate-[underlineTravel_2s_linear_infinite]" />
                </div> */}
            </span>
            <div className='tracking-tighter absolute top-8 -right-3 font-Helvetica text-sm'>
              01

            </div>
          </HoverCardTrigger>
          <HoverCardContent className='text-base w-[300px] h-[440px] !pb-6 relative flex flex-col justify-end'>
            <div className='absolute -top-8 -left-4'>
              <Lottie1 />
            </div>
            <div className='text-[40px]'>
              <p className=' tracking-tight'>all-in-one

              </p>
              <p className='mt-3'>digital<span className='font-Edwardian tracking-wide text-[70px] ml-2'>support</span></p>
            </div>
            <p className='tracking-tight mt-6'>Our team combines design, development, and marketing expertise to give you a complete digital solution in one place.
            </p>
            <Buttons className="mt-5" content='Explore more' />
          </HoverCardContent>
        </HoverCard> <br />
        </div>

        <div className='text-[50px] flex -mt-10  w-full ml-[400px] items-center tracking-tighter'> with
          <HoverCard>
            <HoverCardTrigger className='relative'>
              <span className='ml-3 mr-5 relative flex items-center  font-Edwardian tracking-tighter text-[80px] -mt-2'>
                <div className="w-2 h-2  bg-black rounded-full animate-pulseCircle" />
                all-in-one
                {/* <div className="absolute bottom-7 left-0 h-[2px] w-full overflow-hidden">
                  <div className="bg-black h-full animate-[underlineTravel_2s_linear_infinite]" />
                </div> */}
              </span>
              <div className='tracking-tighter absolute top-7 -right-[200px] font-Helvetica text-sm'>
                02
              </div>
            </HoverCardTrigger>
            <HoverCardContent className='text-base w-[300px] h-[440px] !pb-6 relative flex flex-col justify-end'>
              <div className='absolute -top-8 -left-4'>
                <Lottie1 />
              </div>
              <div className='text-[40px]'>
                <p className=' tracking-tight'>all-in-one

                </p>
                <p className='mt-3'>digital<span className='font-Edwardian tracking-wide text-[70px] ml-2'>support</span></p>
              </div>
              <p className='tracking-tight mt-6'>Our team combines design, development, and marketing expertise to give you a complete digital solution in one place.
              </p>
              <Buttons className="mt-5" content='Explore more' />
            </HoverCardContent>
          </HoverCard> solutions</div>


        <div className='text-[50px] tracking-tighter -mt-10 flex items-center ml-[200px]'>that are
          <HoverCard>
            <HoverCardTrigger>
              <span className='ml-4 mr-6 relative font-Edwardian tracking-tight text-[80px] flex items-center'>
                <div className="w-2 h-2  bg-black rounded-full animate-pulseCircle" />
                budget-friendly
                <div className='tracking-tighter absolute top-6 -right-[120px] font-Helvetica text-sm'>
                  03
                </div>
                <div className="absolute bottom-7 left-0 h-[2px] w-full overflow-hidden">
                  {/* <div className="bg-black h-full animate-[underlineTravel_3s_linear_infinite]" /> */}
                </div>
              </span>
            </HoverCardTrigger>
            <HoverCardContent className='text-base w-[300px] h-[440px] !pb-6 relative flex flex-col justify-end'>
              <div className='absolute -top-8 -left-4'>
                <Lottie1 />
              </div>
              <div className='text-[40px] tracking-tighter'>
                <p className=''>budget-friendly

                </p>
                <p className='mt-3'>digital<span className='font-Edwardian tracking-wide text-[70px] ml-2'>support</span></p>
              </div>
              <p className='tracking-tight mt-6'>Our team combines design, development, and marketing expertise to give you a complete digital solution in one place.
              </p>
              <Buttons className="mt-5" content='Explore more' />
            </HoverCardContent>
          </HoverCard> and   </div>





        <div className='-mt-8 flex items-center justify-center gap-4'>
          <h3 className='text-[50px] tracking-tighter ml-[100px] '>backed by clear  </h3>
          <HoverCard>
            <HoverCardTrigger>
              <span className=' relative flex items-center font-Edwardian tracking-tight text-[80px]'>
                <div className="w-2 h-2  bg-black rounded-full animate-pulseCircle" />
                communication
                <div className='tracking-tighter absolute top-9 -right-5 font-Helvetica text-sm'>
                  04
                </div>
              </span>
            </HoverCardTrigger>
            <HoverCardContent className='text-base w-[300px] h-[440px] !pb-6 relative flex flex-col justify-end'>
              <div className='absolute -top-8 -left-4'>
                <Lottie1 />
              </div>
              <div className='text-[40px] tracking-tighter'>
                <p className=''>budget-friendly

                </p>
                <p className='mt-3'>digital<span className='font-Edwardian tracking-wide text-[70px] ml-2'>support</span></p>
              </div>
              <p className='tracking-tight mt-6'>Our team combines design, development, and marketing expertise to give you a complete digital solution in one place.
              </p>
              <Buttons className="mt-5" content='Explore more' />
            </HoverCardContent>
          </HoverCard>

        </div>

        <h3 className='text-[50px] -mt-6 tracking-tighter mr-52 text-end'>every step of the way.</h3>


      </div>


      


    </div>


  )
}
export default values
