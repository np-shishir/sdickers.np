import React from 'react'

export default function Login() {
  const bgImage = "https://i.pinimg.com/736x/e1/a7/59/e1a75972cacc2164c03d8404522f95ea.jpg";
  return (
    <div className='w-screen h-screen flex bg-black'>
        {/* left */}
        <div className='h-full w-[50%] flex flex-col justify-center' style={{backgroundImage: `url(${bgImage})`}}>
            <span>SDICKERS</span>
            <span>THE COLLECTOR PORTAL</span>
            <span>Access your vault, track your orders, and get ready for the next drop.</span>
        </div>
        {/* right */}
        <div className='h-full w-[50%] bg-[#111111] flex flex-col'>
          <div className='flex flex-col'>
              <div className='flex flex-col'>
                <span className='text-[#8a8a8a]'>Email Address</span>
                <input type="email" className='border-1 border-[#8a8a8a]'/>
              </div>
              <div className='flex flex-col'>
                <span className='text-[#8a8a8a]'>Password</span>
                <input type="password" className='border-1 border-[#8a8a8a]'/>
              </div>
              <button className='bg-white'>
                SIGN IN TO VAULT
              </button>
          </div>
        </div>
    </div>
  )
}
