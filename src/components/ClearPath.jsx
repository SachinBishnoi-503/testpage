import React from 'react'
import materical from '../assets/images/svg/clearpath-material.svg'
import contact from '../assets/images/svg/clearpath-contact.svg'
import dahboard from '../assets/images/svg/clearpath-dashboard.svg'

const ClearPath = () => {
  return (
      <div className='pb-[130px]'>
          <div className='container'>
              <div className='flex items-center flex-col'>
                  <h2 className='font-Messiri font-bold text-custom-xl leading-custom-2xl text-dark-blue'>ClearPath Treatment Solutions</h2>
                  <p className='font-Lato font-normal text-base leading-6 text-gray mt-5'>Elevated performance call center focussing on quality of service and transparency.</p>
              </div>
              <div className='flex flex-row flex-wrap -mx-3 mt-[40px]'>
                  <div className='w-1/3 px-3'>
                      <div className='p-[20px_32px_79px_32px] shadow-3xl border rounded-xl flex flex-col items-center border-mist-gray group hover:bg-dark-blue duration-300 ease-linear'>
                          <div className='w-[99px] min-h-[96px] flex justify-center bg-dark-blue mt-[-34px] rounded-[6px] border border-dark-blue'>
                              <img src={materical} alt=""  />
                          </div>
                          <h2 className='text-dark-blue font-semibold text-2xl leading-7 font-Messiri mt-[30px] pt-[12px] group-hover:text-white'>Purpose and Mission</h2>
                          <p className='font-Lato font-normal text-base leading-6 text-blue-gray mt-4 group-hover:text-white'>Our services are designed to streamline operations and increase admits without compromising on quality or patient care</p>
                      </div>
                  </div>
                  <div className='w-1/3 px-3'>
                      <div className='p-[20px_32px_26px_32px] shadow-3xl border rounded-xl flex flex-col items-center border-mist-gray group hover:bg-dark-blue duration-300 ease-linear'>
                          <div className='w-[99px] min-h-[96px] flex justify-center bg-dark-blue mt-[-34px] rounded-[6px] border border-dark-blue'>
                              <img src={dahboard} alt="" />
                          </div>
                          <h2 className='text-dark-blue font-semibold text-2xl leading-7 font-Messiri mt-[30px] group-hover:text-white max-w-[300px] pt-[12px] text-center'>Client-Owned CRM and Dashboard</h2>
                          <p className='font-Lato font-normal text-base leading-6 text-blue-gray mt-4 group-hover:text-white max-w-[300px] text-center'>We provide each center with a fully client-owned CRM and dashboard, offering full transparency and control over the entire process.</p>
                      </div>
                  </div>
                  <div className='w-1/3 px-3'>
                      <div className='p-[20px_32px_55px_32px] shadow-3xl border rounded-xl flex flex-col items-center border-mist-gray group hover:bg-dark-blue duration-300 ease-linear'>
                          <div className='w-[99px] min-h-[96px] flex justify-center bg-dark-blue mt-[-34px] rounded-[6px] border border-dark-blue'>
                              <img src={contact} alt="" />
                          </div>
                          <h2 className='text-dark-blue font-semibold text-2xl leading-7 font-Messiri mt-[30px] group-hover:text-white '>Specialized Team</h2>
                          <p className='font-Lato font-normal text-base leading-6 text-blue-gray mt-4 group-hover:text-white max-w-[300px] pt-[12px] text-center'>Our team specializes in out of network leads, ensuring expert handling of every patient inquiry from initial contact to admit.</p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default ClearPath