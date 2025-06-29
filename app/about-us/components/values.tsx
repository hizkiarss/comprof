import React from 'react'
import Lottie1 from "./lottie1"
import Lottie2 from "./lottie2"
import Lottie3 from "./lottie3"

import Buttons from '@/components/buttons'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"





const values = () => {
  return (
  

    <div className='bg-white z-40 py-40 '>
      <div>
        <div className='text-[50px] ml-32 tracking-tighter flex items-center'>We provide <HoverCard>
          <HoverCardTrigger className='relative'>
            <span className='ml-4 mr-5 relative flex items-center  font-Edwardian text-[80px]'>
              <div className="w-2 h-2  bg-black rounded-full animate-pulseCircle " />
              fast-output
            
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
            
              </span>
              <div className='tracking-tighter absolute top-7 -right-[200px] font-Helvetica text-sm'>
                02
              </div>
            </HoverCardTrigger>
            <HoverCardContent className='text-base w-[300px] h-[440px] !pb-6 relative flex flex-col justify-end'>
              <div className='absolute -top-8 -left-4'>
                <Lottie2 />
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
                <Lottie3 />
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
