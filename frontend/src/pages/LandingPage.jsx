import React from 'react'
import sticker from '../assets/images/metro-boomin-sticker.jpeg'

export default function 
() {
  return (
    <div id='main' className=' w-screen h-[720px] bg-[#111111] flex justify-center items-center'>
        <div id="container" className='w-[50%] flex justify-between items-center'>
            <div id="left" className='flex flex-col w-[50%] gap-y-5'>
                <span className='text-[#8a8a8a] text-[11px]'>
                    SDICKERS DROP 003 - SECURE THE BATCH
                </span>
                <span className='font-sans text-white text-6xl font-bold'>
                    THE ART OF ADHESION
                </span>
                <span className='text-[#8a8a8a] text-[11px]'>
                    Limited-edition artist collabs printed on premium weatherproof vinyl. Each drop is finite — once it's gone, it's gone.
                </span>
            </div>
            <div id="right">
                <img src={sticker} alt="sticker" className='h-64'/>
            </div>
        </div>
    </div>
  )
}
