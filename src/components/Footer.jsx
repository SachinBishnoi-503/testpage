import React from 'react'
import logofooter from '../assets/images/svg/footer-logo.svg'
import facebook from '../assets/images/svg/facebook.svg'
import twitter from '../assets/images/svg/twwiter.svg'
import instgram from '../assets/images/svg/instgram.svg'
import inicons from '../assets/images/svg/inVector.svg'
import loaction from '../assets/images/svg/2ndloaction.svg'
import calling from '../assets/images/svg/calling.svg'
import msg from '../assets/images/svg/msg.svg'

const Footer = () => {
    return (
        <div className='bg-dark-blue pt-[227px] mt-[-147px]'>
            <div className='container'>
                <div className='flex justify-between pb-[46px] max-md:flex-col'>
                    <div className='flex flex-col '>
                        <img src={logofooter} alt="footer-logo-not-found" className='max-w-[138px] min-h-[40px]' />
                        <p className='text-mist-gray font-Lato font-normal text-base leading-6 max-w-[364px] pt-[22px]'>Lorem ipsum dolor sit amet consectetur. Commodo facilisi augue pellentesque id vitae faucibus. Odio blandit non mi donec non ipsum sed volutpat. </p>
                        <div className='flex items-center gap-[22px] pt-[22px]'>
                            <a className='max-w-[24px] min-h-[22px] rounded-full bg-white w-full grid place-content-center' href="">
                                <img src={facebook} alt="footer-icons-not-found" />
                            </a>
                            <a className='max-w-[24px] min-h-[22px] rounded-full bg-white w-full grid place-content-center' href="">
                                <img src={twitter} alt="footer-icons-not-found" />
                            </a>
                            <a className='max-w-[24px] min-h-[22px] rounded-full bg-white w-full grid place-content-center' href="">
                                <img src={inicons} alt="footer-icons-not-found" />
                            </a>
                            <a className='max-w-[24px] min-h-[22px] rounded-full bg-white w-full grid place-content-center' href="">
                                <img src={instgram} alt="footer-icons-not-found" />
                            </a>

                        </div>
                    </div>
                    <div className='flex  gap-[98px] max-md:pt-3'>
                        <div className='flex-col flex items-start '>
                            <h2 className='font-semibold text-2xl leading-7 text-white font-Messiri'>Services</h2>
                            <p className='font-Lato font-normal text-base leading-6 opacity-80 text-white pt-[20px]'>Home</p>
                            <p className='font-Lato font-normal text-base leading-6 opacity-80 text-white pt-[20px]'>Why Webserv?</p>
                            <p className='font-Lato font-normal text-base leading-6 opacity-80 text-white pt-[20px]'>Services</p>
                            <p className='font-Lato font-normal text-base leading-6 opacity-80 text-white pt-[20px]'>Testimonial</p>
                            <p className='font-Lato font-normal text-base leading-6 opacity-80 text-white pt-[20px]'>Process</p>
                        </div>
                        <div className='flex-col flex items-start'>
                            <h2 className='font-semibold text-2xl leading-7 text-white font-Messiri'>Contact Info</h2>
                            <div className='flex items-center justify-center gap-[15px] pt-5'>
                                <img src={loaction} alt="" />
                                <p className='font-Lato font-normal text-base leading-6 opacity-80 text-white max-w-[186px]'>78 SW 7th Street Miami, FL 33130, USA</p>

                            </div>
                            <div className='flex items-center justify-center gap-[15px] pt-5'>
                                <img src={calling} alt="" />
                                <p className='font-Lato font-normal text-base leading-6 opacity-80 text-white'>+123 456 7890</p>

                            </div>
                            <div className='flex items-center justify-center gap-[15px] pt-5'>
                                <img src={msg} alt="" />
                                <p className='font-Lato font-normal text-base leading-6 opacity-80 text-white max-w-[186px]'>Support@Clear Path Treatment Solutions.com</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-white opacity-40 border w-full'></div>
                <div className='py-[25px] justify-center flex'>
                    <p className='font-Lato font-normal text-base leading-6 text-white opacity-80'>Copyright 2024. All Rights Received by Us.</p>

                </div>

            </div>
        </div>
    )
}

export default Footer