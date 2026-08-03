import React from 'react'

export default function TrendingCollections({bgImage, title}) {
  return (
                        <div className='w-60 h-80 bg-contain rounded-2xl flex flex-col justify-end items-start relative' style={{backgroundImage: `url(${bgImage})`}}>
                            <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent'></div>
                            <div className='text-white font-bold px-4 py-2 text-2xl z-10'>{title}</div>
                        </div>
  )
}
