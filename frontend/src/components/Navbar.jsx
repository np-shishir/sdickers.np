import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

 export default function 
() {
  return (
    <div className='h-12.5 w-screen m-0 p-0 bg-black text-white flex justify-between text-[11px] sticky top-0'>
        <div id="menu" className='flex justify-between items-center'>
            <div id="logo" className='font-sans font-extrabold px-8 text-2xl'>
                SDICKERS
            </div>
            <ul className='flex gap-x-11 text-[11px]'>
                <li className='hover:text-[#00ff66] hover:cursor-pointer'>DROPS</li>
                <li className='hover:text-[#00ff66] hover:cursor-pointer'>COLLECTIONS</li>
                <li className='hover:text-[#00ff66] hover:cursor-pointer'>BEST SELLERS</li>
                <li className='hover:text-[#00ff66] hover:cursor-pointer'>COMMUNITY</li>
            </ul>
        </div>
        <div id="cart" className='flex items-center text-2xl text-white mx-10 gap-x-4'>
            <FaSearch/>
            <FaShoppingCart/>
        </div>
    </div>
  )
}
