import React from 'react'

export default function StickerCard({stickerImage, stickerName, collectionType, stickerPrice}) {
  return (
    <>
        <div className='flex flex-col rounded-2xl w-full border-2 border-[#2e2e2e] hover:shadow-[0_0_10px_rgba(0,255,102,1)] duration-500 ease-in-out hover:scale-105 hover:border-0'>
            <div className='flex justify-center items-center w-full p-5 bg-white rounded-t-2xl'>
                <img src={stickerImage} className='w-full aspect-square object-cover' alt="" />
            </div>
            {/* sticker details */}
            <div className=' w-full flex flex-col justify-center pb-3 gap-y-1 px-4 pt-3 bg-[#181818] rounded-b-2xl'>
                <div className='w-full flex justify-between items-center truncate'>
                    <span className='text-white font-semibold '>{stickerName}</span>
                    <span className='text-[#00ff66] font-semibold whitespace-nowrap'>Rs. {stickerPrice}</span>
                </div>
                <span className='text-xs text-[#8a8a8a]'>COLLECTION: {collectionType}</span>
            </div>
        </div>
    </>
  )
}
