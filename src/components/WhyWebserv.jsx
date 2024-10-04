import React from 'react'
import cardsvg1 from '../assets/images/svg/why-card-svg.svg'
import cardsvg2 from '../assets/images/svg/why-card-svg2.svg'
import cardsvg3 from '../assets/images/svg/why-card-svg3.svg'
const WhyWebserv = () => {
  return (
    <div className='pt-[130px] mb-[130px]'>
      <div className='container'>
        <div className='flex justify-center  flex-col items-center'>
          <a className='py-2 px-[15px] border rounded-lg border-sky-blue text-dark-blue text-[12px] font-normal font-Messiri leading-[18px] bg-soft-blue' href="">Performance Marketing Agency</a>
          <h2 className='font-Messiri font-bold text-custom-xl leading-custom-2xl mt-[10px] text-dark-blue'>Why Webserv?</h2>
          <p className='text-gray text-base leading-6 font-normal font-Lato max-w-[789px] text-center mt-4'>We use a data driven approach to deliver qualified leads at a fraction of the price of the competition. Our approach relies on first and third party data to target the right people at the right time.</p>
        </div>
        <div className='flex flex-row flex-wrap -mx-3 mt-[40px]'>
          <div className='w-1/3 px-3'>
            <div className='p-[20px_20px_49px_20px] shadow-3xl border rounded-xl border-mist-gray group hover:bg-dark-blue duration-300 ease-linear'>
              <div className='max-w-[60px] min-h-[60px] rounded-full bg-frosted-blue  grid place-content-center '>
                <img src={cardsvg1} alt="card-one-svg-not-found" />
              </div>
              <h2 className='text-dark-blue font-semibold text-2xl leading-7 font-Messiri mt-[30px] group-hover:text-white'>Advanced Analytics</h2>
              <p className='font-Lato font-normal text-base leading-6 text-blue-gray max-w-[324px] mt-4  group-hover:text-white'>We utilize a comprehensive suite of cutting-edge analytics tools to optimize your campaigns and drive continuous improvement.  </p>
            </div>
          </div>
          <div className='w-1/3 px-3'>
            <div className='p-[20px_20px_20px_20px] shadow-3xl border rounded-xl border-mist-gray group hover:bg-dark-blue duration-300 ease-linear'>
              <div className='max-w-[60px] min-h-[60px] rounded-full bg-frosted-blue  grid place-content-center '>
                <img src={cardsvg2} alt="card-one-svg-not-found" />
              </div>
              <h2 className='text-dark-blue font-semibold text-2xl leading-7 font-Messiri mt-[30px] max-w-[311px]  group-hover:text-white'>Tailored Ad Copy and Landing Pages</h2>
              <p className='font-Lato font-normal text-base leading-6 text-blue-gray max-w-[324px] mt-4 group-hover:text-white'>Our services include the development of high-quality Ad Creatives, Ad Copy, and Landing Pages, designed to maximize your campaign's performance.</p>
            </div>
          </div>
          <div className='w-1/3 px-3'>
            <div className='p-[20px_20px_49px_20px] shadow-3xl border rounded-xl border-mist-gray group hover:bg-dark-blue duration-300 ease-linear'>
              <div className='max-w-[60px] min-h-[60px] rounded-full bg-frosted-blue  grid place-content-center '>
                <img src={cardsvg3} alt="card-one-svg-not-found" />
              </div>
              <h2 className='text-dark-blue font-semibold text-2xl leading-7 font-Messiri mt-[30px] group-hover:text-white'>In-Depth KPI Reporting</h2>
              <p className='font-Lato font-normal text-base leading-6 text-blue-gray max-w-[324px] mt-4 group-hover:text-white'>At Webserv, transparency is fundamental to our approach, and we are committed to keeping you well-informed about your campaign's performance.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default WhyWebserv