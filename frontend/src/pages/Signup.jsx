import React from 'react'
import { MdWorkspacePremium } from "react-icons/md"
import { IoIosStar } from "react-icons/io"
import { PiStickerFill } from "react-icons/pi"

export default function Signup() {

    const bgImage = "https://i.pinimg.com/736x/e1/a7/59/e1a75972cacc2164c03d8404522f95ea.jpg";

  return (
    <div className='w-screen h-screen flex bg-black'>
        {/* left */}
        <div className='h-full w-[50%] flex flex-col justify-center p-28' style={{backgroundImage: `url(${bgImage})`}}>
            <span className='text-xl text-white font-bold mb-7'>SDICKERS</span>
            <span className='text-6xl text-white font-extrabold mb-2'>BECOME A<br />COLLECTOR</span>
            <span className='text-xs text-[#8a8a8a]'>Get access to Premium Drops, Exclusive Merch and Members-Only Pricing.</span>

            <div className='flex flex-col mt-10 gap-y-3'>
                <div className='flex text-xs font-semibold text-white items-center gap-x-2'>
                    <MdWorkspacePremium className='text-[#00ff66] text-2xl'/>
                    <span>PREMIUM DROPS</span>
                </div>
                <div className='flex text-xs font-semibold text-white items-center gap-x-2'>
                    <PiStickerFill className='text-[#00ff66] text-2xl'/>
                    <span>EXCLUSIVE MERCH</span>
                </div>
                <div className='flex text-xs font-semibold text-white items-center gap-x-2'>
                    <IoIosStar className='text-[#00ff66] text-2xl'/>
                    <span>MEMBER ONLY PRICING</span>
                </div>
            </div>
        </div>
        {/* right */}
        <div className='h-full w-[50%] bg-[#111111] flex flex-col items-center justify-center '>
          <div className='flex flex-col gap-y-10 w-[50%]'>

            {/* title */}
            <div className='flex flex-col'>
                <span className='text-3xl text-white font-semibold'>JOIN SDICKERS</span>
                <span className='text-xs text-[#8a8a8a] text-[10px]'>CREATE YOUR PROFILE TO START YOUR COLLECTION</span>
            </div>

            {/* input fields */}
            <div className='flex flex-col gap-y-2'>
                <span className='text-[10px] text-[#8a8a8a]'>FULL NAME</span>
                <input type="email" className='border-1 border-[#8a8a8a] h-10 rounded-[10px] h-12 bg-[#181818] placeholder-[#515151] text-[#515151] px-4 text-sm' placeholder='Hari Bahadur'/>
              </div>

              <div className='flex flex-col gap-y-2'>
                <span className='text-[#8a8a8a] text-[10px]'>EMAIL ADDRESS</span>
                <input type="email" className='border-1 border-[#8a8a8a] h-10 rounded-[10px] h-12 bg-[#181818] placeholder-[#515151] text-[#515151] px-4 text-sm' placeholder='example@email.com'/>
              </div>
              <div className='flex flex-col gap-y-2'>
                <span className='text-[#8a8a8a] text-[10px]'>PASSWORD</span>
                <input type="email" className='border-1 border-[#8a8a8a] h-10 rounded-[10px] h-12 bg-[#181818] placeholder-[#515151] text-[#515151] px-4 text-sm' placeholder='••••••••'/>
              </div>
              <div className='flex flex-col gap-y-2'>
                <span className='text-[#8a8a8a] text-[10px]'>CONFIRM PASSWORD</span>
                <input type="email" className='border-1 border-[#8a8a8a] h-10 rounded-[10px] h-12 bg-[#181818] placeholder-[#515151] text-[#515151] px-4 text-sm' placeholder='••••••••'/>
              </div>
              <button className='bg-white h-10 rounded-[10px] text-xs font-semibold hover:text-[#00ff66] duration-300 ease-in-out hover:bg-black hover:border-1 hover:border-[#00ff66] cursor-pointer'>
                CREATE MY ACCOUNT
              </button>
          </div>


        </div>
    </div>
  )
}
