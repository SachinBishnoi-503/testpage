import React from 'react'
import cardimage from '../assets/images/webp/card-image-many-apps.webp'
const WebservsCards = () => {
  return (
      <div>
          <div className='bg-blue-card max-w-[1210px] mx-auto mb-[130px]'>
              <div className='py-[39px] px-[35px] flex justify-between items-center max-lg:flex-col '>
                  <img src={cardimage} alt="card-image-not-found" className='' />
                  <div className='flex-col max-lg:pt-2'>
                      <h2 className='font-Messiri font-bold text-custom-xl leading-custom-2xl text-white max-w-[633px] max-lg:w-full max-lg:items-center'>Webserv’s efforts have increased mobile conversion rates and reduced ad spending by 61% and 20%, respectively.</h2>
                      <div>
                          <h2 className='opacity-70 font-Lato font-normal text-base leading-6 text-white pt-[40px]'>Sergei Vidov</h2>
                          <h2 className='opacity-70 font-Lato font-normal text-base leading-6 text-white pt-[10px]'>CEO - Summit Estate Recovery Center</h2>
                      </div></div>
              </div>
          </div>
    </div>
  )
}

export default WebservsCards