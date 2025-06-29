import React from 'react'

const website = () => {
    return (
        <div className='flex justify-between  mt-20 gap-32 relative'>
            <div className='sticky top-6 self-start'>
                <p className="font-Edwardian tracking-tight font-medium text-[60px] md:text-[60px] mr-3 relative inline-block transition-all duration-400 -mt-10 ">
                    website
                </p>
                <p className='tracking-tighter text-[30px] -mt-8'>
                    development
                </p>
            </div>

            <div className='flex flex-col gap-10'>

                <div className='flex gap-10'>

                    <div className='flex flex-col justify-between'>
                        <h3 className='flex-1  tracking-tighter leading-7 text-3xl text-gray-500' >
                            <span className=' tracking-tighter  text-3xl text-black'>Nomad Archipelago:</span> <br />Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.
                        </h3>
                        <p className='text-sm tracking-tight'>Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec 

                             </p>

                    </div>

                    <video className='w-[500px] h-[500px] object-cover' autoPlay loop muted src="/video/websiteService.webm"></video>

                </div>

                <div className='flex gap-10'>

                    <div className='flex flex-col justify-between'>
                        <h3 className='flex-1  tracking-tighter leading-7 text-3xl text-gray-500' >
                            <span className=' tracking-tighter  text-3xl text-black'>Nomad Archipelago:</span> <br />Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus.
                        </h3>
                        <p className='text-sm tracking-tight'>Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec 

                             </p>

                    </div>

                    <video className='w-[500px] h-[500px] object-cover' autoPlay loop muted src="/video/websiteService.webm"></video>

                </div>

            </div>


        </div>
    )
}

export default website
