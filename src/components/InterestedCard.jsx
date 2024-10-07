import React from 'react'
import image1 from '../assets/images/webp/intrested-card-image.webp'
import image2 from '../assets/images/webp/intrested-card-image2.webp'

const InterestedCard = () => {
    return (
        <div className='z-10 relative'>
            <div className='container'>
                <div className='w-full pb-[45px] rounded-[22px] shadow-4xl mx-auto bg-white'>
                    <div className='flex flex-col justify-center items-center pt-[45px]'>
                        <h2 className='text-dark-blue max-md:text-2xl md:text-custom-xl leading-custom-2xl font-bold font-Messiri'>Interested In learning More?</h2>
                        <p className='text-gray font-normal max-md:text-sm md:text-base leading-6 font-Lato max-w-[621px] text-center'>Contact us today to explore how our dual service solution can help your treatment center achieve its growth objectives.</p>
                    </div>
                    <div className='flex items-center justify-center gap-[62px] pt-[40px] max-lg:flex-col'>
                        <div className='p-[10px] border border-gray rounded-xl flex items-center gap-3'>
                            <img src={image1} alt="" />
                            <div className='flex-col'>
                                <h2 className='font-Lato font-normal text-base text-black leading-6'>Preston Powell</h2>
                                <h2 className='font-Lato font-normal text-base text-black leading-6 opacity-70'>preston@webserv.io</h2>
                            </div>
                        </div>
                        <div className='p-[10px] border border-gray rounded-xl flex items-center gap-3'>
                            <img src={image1} alt="" />
                            <div className='flex-col'>
                                <h2 className='font-Lato font-normal text-base text-black leading-6'>Kyle Ingram</h2>
                                <h2 className='font-Lato font-normal text-base text-black leading-6 opacity-70'>kyle@clearpath.com</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InterestedCard