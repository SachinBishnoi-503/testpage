import React from 'react'
import transparency from '../assets/images/webp/tranperency-image.webp'

const Transparency = () => {
  return (
      <div className='pb-[158px]'> 
          <div className='container'>
              <div className='flex items-center justify-between max-lg:flex-col'>
                  <div className='max-w-[558px]'>
                      <a className='py-2 px-[15px] border rounded-lg border-sky-blue text-dark-blue text-[12px] font-normal font-Messiri leading-[18px] bg-soft-blue' href="">Why ClearPath?</a>
                      <h2 className='font-bold text-custom-xl leading-custom-2xl text-dark-blue font-Messiri pt-[10px]'>Transparency & Accountability</h2>
                      <p className='font-Lato font-normal text-base leading-6 text-gray max-w-[558px] mt-4'>Gain real-time access to all operational data through our dashboard, which allows for immediate insights and strategic decision making. We ensure full transparency in our processes and provide concrete evidence of our effectiveness and integrity.</p>

                  </div>
                  <div className='  max-lg:pt-3'>
                      <img src={transparency} alt="image-not-found-tranperency"  className='max-w-[524px] w-full min-h-[311px]'/>
                      
                  </div>
              </div>
              
          </div>
    </div>
  )
}

export default Transparency