import React from 'react'
import payingimage from '../assets/images/webp/stoppaying-image.webp'
import cardimage1 from '../assets/images/webp/stoppaying-card-image.webp'
import cardimage2 from '../assets/images/webp/paying-card-image2.webp'
const StopPaying = () => {
  return (
      <div>
          <div className='container'>
              <div className='flex flex-col justify-center items-center pt-[97px]'>
                  <h1 className='font-bold text-custom-xl font-Messiri leading-custom-2xl text-dark-blue'>Stop Paying Top Dollar For Poor Leads</h1>
                  <p className='max-w-[836px] text-center text-gray font-Lato font-normal leading-6 text-base pt-4'>Leverage seasoned industry marketers to position your center as the go-to for treatment seekers and seamlessly transition them to admissions experts for maximum facility growth.</p>
              </div>
              <div className='w-full flex items-center justify-between pt-[40px]'>
                  <div className='max-w-[348px]'>
                      <img className='w-full' src={payingimage} alt="stop-paying-image-not-found" />
                  </div>
                  <div className='flex-col '>
                      <div className='py-5 px-5 shadow-3xl rounded-[12px]'>
                          <div className='flex items-center gap-[10px]'>
                              <img src={cardimage1} alt="card-1-image-mot-found" className='max-w-[30px] min-h-[30px]' />
                              <h2 className='text-dark-blue font-Messiri font-semibold text-2xl leading-7'>Pay-Per-Click Advertising</h2>
                          </div>
                          <p className='font-Lato font-normal text-base leading-6 text-blue-gray max-w-[478px] pt-4'>Their targeted ad campaigns, precise keyword selection, and conversion rate optimization ensures that your center captures high-intent leads.</p>
                      </div>
                      <div className='py-5 px-5 shadow-3xl rounded-[12px] mt-5'>
                          <div className='flex items-center gap-[10px]'>
                              <img src={cardimage2} alt="card-1-image-mot-found" className='max-w-[30px] min-h-[30px]' />
                              <h2 className='text-dark-blue font-Messiri font-semibold text-2xl leading-7'>Outsourced Admissions Team</h2>
                          </div>
                          <p className='font-Lato font-normal text-base leading-6 text-blue-gray max-w-[478px] pt-4'>Their team specializes in navigating out-of-network policies and provides a dashboard to track metrics such as daily leads and pending VOBs.</p>
                      </div>
                      
                  </div>
              </div>
          </div>
    </div>
  )
}

export default StopPaying