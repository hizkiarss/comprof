import React from 'react'
import Lottie1 from "./lottie1"
import Lottie2 from "./lottie2"
import Lottie3 from "./lottie3"
import Lottie4 from "./lottie4"

import Buttons from '@/components/buttons'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"





const values = () => {
  return (

    <div className='bg-white z-40 pt-20 md:pt-10 pb-0 md:pb-40 px-2 md:px-0  '>
      <div>
        <div className='text-[32px] md:text-[50px] md:ml-16 xl:ml-32 tracking-tighter flex  md:items-center'>We provide <HoverCard>
          <HoverCardTrigger className='relative'>
            <span className='ml-4 mr-5 relative flex items-center  font-Edwardian text-[58px] md:text-[80px] -mt-6 md:mt-0' >
              <div className="w-2 h-2 hidden xl:block  bg-black rounded-full animate-pulseCircle  " />
              fast-output
            </span>
            <div className='tracking-tighter absolute md:top-8 top-7 -right-1 md:-right-3 font-Helvetica text-[10px] md:text-sm'>
              01

            </div>
          </HoverCardTrigger>
          <HoverCardContent className='text-base w-[550px] h-[240px] !pb-6 relative flex items-end'>
            <div className='absolute -left-4 -top-4 '>
              <Lottie1 />
            </div>

            <div className='absolute top-8 left-40 text-[40px]'>
              <p className='leading-10'>fast
                <span className='font-Edwardian tracking-wide text-[70px] mx-2 mr-3'>output</span>
                & <span className='bg-white z-10'>dependable</span>
                <span className='font-Edwardian tracking-wide text-[70px] ml-2'>service</span>
              </p>
            </div>


            <div className='flex items-center mt-6 gap-10 '>
              <p className='tracking-tight  w-[300px]'>We respect your time and deadlines, and so do we with ours. You can count on us to deliver on time, giving the maximum results.
              </p>
              <Buttons className="!px-4 !py-2" content='Explore more' />
            </div>


          </HoverCardContent>
        </HoverCard> <br />
        </div>

        <div className='text-[32px] md:text-[50px] flex -mt-8 md:-mt-10  w-full md:ml-[200px] xl:ml-[400px] items-center tracking-tighter'> with
          <HoverCard>
            <HoverCardTrigger className='relative'>
              <span className='ml-3 mr-5 relative flex items-center  font-Edwardian tracking-tighter text-[58px] md:text-[80px] -mt-2'>
                <div className="hidden xl:block w-2 h-2  bg-black rounded-full animate-pulseCircle" />
                all-in-one

              </span>
              <div className='tracking-tighter absolute bottom-3 md:top-7 right-1 md:-right-[200px] font-Helvetica text-[10px] md:text-sm'>
                02
              </div>
            </HoverCardTrigger>
            <HoverCardContent className='text-base w-[500px] h-[250px] !pb-6 relative flex items-end'>
              <div className='absolute -left-16 top-4'>
                <Lottie2 />
              </div>

              <div className='absolute top-12 left-32 text-[40px]'>
                <p className=' tracking-tight'>all-in-one
                </p>
                <p className='mt-3'>digital<span className='font-Edwardian tracking-wide text-[70px] ml-2'>support</span></p>
              </div>


              <div className='flex items-center mt-6 '>
                <p className='tracking-tight  w-[300px]'>Our team combines design, development, and marketing expertise to give you a complete digital solution in one place.
                </p>
                <Buttons className="!px-4 !py-2" content='Explore more' />
              </div>


            </HoverCardContent>
          </HoverCard> solutions</div>


        <div className='text-[32px] md:text-[50px] tracking-tighter -mt-8 md:-mt-10 flex items-center md:ml-[40px] xl:ml-[200px]'>that are
          <HoverCard>
            <HoverCardTrigger>
              <span className='ml-2 md:ml-4 -mt-2 md:mt-0 md:mr-6 relative font-Edwardian tracking-tight text-[58px] md:text-[80px] flex items-center'>
                <div className="hidden xl:block w-2 h-2  bg-black rounded-full animate-pulseCircle" />
                budget-friendly
                <div className='tracking-tighter absolute bottom-4 -right-4 md:-right-[20px] font-Helvetica text-[10px] md:text-sm'>
                  03
                </div>
                <div className="absolute bottom-7 left-0 h-[2px] w-full overflow-hidden">
                  {/* <div className="bg-black h-full animate-[underlineTravel_3s_linear_infinite]" /> */}
                </div>
              </span>
            </HoverCardTrigger>
            <HoverCardContent className='text-base w-[500px] h-[250px] !pb-6 relative flex items-end'>
              <div className='absolute -translate-x-1/3 left-4 -top-20'>
                <Lottie3 />
              </div>

              <div className='absolute top-8 left-32 text-[40px]'>
                <p className='mt-3 leading-9'>budget friendly
                  <br />
                  <span className='font-Edwardian tracking-wide text-[70px] -ml-1'>solutions</span></p>
              </div>


              <div className='flex items-center mt-6 '>
                <p className='tracking-tight  w-[300px]'>We understand the constraints of small businesses. That’s why we offer efficient, high-value services balanced with a fair rate.

                </p>
                <Buttons className="!px-4 !py-2" content='Explore more' />
              </div>


            </HoverCardContent>
          </HoverCard>    </div>


        <div className='-mt-4 md:-mt-8 md:flex items-center justify-center gap-4'>
          <h3 className='text-[32px] md:text-[50px] tracking-tighter xl:ml-[100px] '>and backed by clear  </h3>
          <HoverCard>
            <HoverCardTrigger>
              <span className='w-fit relative flex items-center font-Edwardian tracking-tight  text-[58px] md:text-[80px] -mt-6 md:mt-0'>
                <div className="w-2 h-2 hidden xl:block bg-black rounded-full animate-pulseCircle" />
                communication
                <div className='tracking-tighter absolute bottom-4 -right-5 md:-right-3 font-Helvetica text-[10px] md:text-sm'>
                  04
                </div>
              </span>
            </HoverCardTrigger>
            <HoverCardContent className='text-base w-[500px] h-[260px] !pb-6 relative flex items-end'>
              <div className='absolute -left-3 top-0 '>
                <Lottie4 />
              </div>

              <div className='absolute top-3 left-32 text-[40px] leading-9 '>
                <p className='mt-3 tracking-tighter'>clear <br /> communication, <br />
                  <span className='font-Edwardian tracking-wide text-[70px] -ml-1'>always</span></p>
              </div>


              <div className='flex items-center mt-6 '>
                <p className='tracking-tight  w-[300px]'>We speak your language, no big terms, no stiff corporate stuff. Just honest, transparent conversations and reliable support.

                </p>
                <Buttons className="!px-4 !py-2" content='Explore more' />
              </div>


            </HoverCardContent>
          </HoverCard>

        </div>

        <h3 className='text-[32px] md:text-[50px] -mt-6 tracking-tighter md:mr-52 md:text-end'>every step of the way.</h3>
      </div>





    </div>


  )
}
export default values
