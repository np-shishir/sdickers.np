import React from 'react'
import LeftImage from '../assets/images/login-left.jpeg'

export default function Login() {
  return (
    <div className='w-screen h-screen flex bg-black'>
        {/* left */}
        <div className='h-full w-[50%] flex flex-col justify-center p-28 bg-contain' style={{backgroundImage: `url(${LeftImage})`}}>
            <span className='text-xl text-white font-bold'>SDICKERS</span>
            <span className='text-6xl text-white font-extrabold'>THE COLLECTOR <br /> PORTAL</span>
            <span className='text-xs text-[#8a8a8a]'>Access your vault, track your orders, and get ready for the next drop.</span>
        </div>
        {/* right */}
        <div className='h-full w-[50%] bg-[#111111] flex flex-col items-center justify-around'>
          <div className='h-full w-[50%] flex flex-col justify-center gap-y-10'>
            {/* top */}
          <div className='flex flex-col'>
              <span className='text-2xl text-white font-bold'>WELCOME BACK</span>
              <span className='text-[10px] text-[#8a8a8a]'>ENTER YOUR CREDENTIALS TO ENTER THE VAULT</span>
          </div>
          <div className='flex flex-col gap-y-7'>
              <div className='flex flex-col'>
                <span className='text-[10px] text-[#8a8a8a]'>EMAIL ADDRESS</span>
                <input type="email" className='border-1 border-[#8a8a8a] h-10 rounded-[10px] h-12 bg-[#181818] placeholder-[#515151] text-[#515151] px-4 text-sm' placeholder='example@email.com'/>
              </div>
              <div className='flex flex-col'>
                <div className='flex w-full justify-between'>
                  <span className='text-[10px] text-[#8a8a8a]'>PASSWORD</span>
                  <span className='text-[10px] text-[#00ff66] font-semibold cursor-pointer'>FORGOT?</span>
                </div>
                <input type="password" className='border-1 border-[#8a8a8a] h-10 rounded-[10px] h-12 bg-[#181818] placeholder-[#515151] text-[#515151] px-4 text-sm' placeholder='••••••••'/>
              </div>
              <button className='bg-white h-10 rounded-[10px] text-xs font-semibold hover:text-[#00ff66] duration-300 ease-in-out hover:bg-black hover:border-1 hover:border-[#00ff66] cursor-pointer'>
                SIGN IN TO VAULT
              </button>

              {/* create account option */}
              <div className='flex w-full justify-center gap-x-5'>
                <span className='text-xs text-[#8a8a8a]'>Don't have an account?</span>
                <span className='text-xs font-semibold text-white cursor-pointer'>CREATE ACCOUNT</span>
              </div>
          </div>
          </div>
        </div>
    </div>
  )
}
