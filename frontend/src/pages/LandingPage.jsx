import React from 'react'
import sticker from '../assets/images/metro-boomin-sticker.jpeg'
import bgImage from '../assets/images/spiderverse.jpeg'
import TrendingCollections from '../cards/TrendingCollections'

const trending = [
    {
        id: 1,
        title: "SPIDER VERSE",
        bgImage: "https://i.pinimg.com/736x/b5/24/5f/b5245fa999ef0323bc0cbba3f5a9d60b.jpg"
    },
    {
        id: 2,
        title: "MOVIES",
        bgImage: "https://i.pinimg.com/1200x/2a/72/33/2a723335d74f6e96fb061909942ac19d.jpg"
    },
    {
        id: 3,
        title: "ROCK BANDS",
        bgImage: "https://i.pinimg.com/736x/40/66/14/406614169646c73356383fa37e9f87af.jpg"
    },
]

export default function 
() {
  return (
    <>
    <div id='main' className=' w-screen h-180 bg-[#111111] flex justify-center items-center'>
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
                <span className='text-[11px] text-white font-bold border border-[#8a8a8a] w-37.5 h-10 flex justify-center items-center'>
                    SHOP NEW DROP
                </span>
            </div>
            <div id="right">
                <img src={sticker} alt="sticker" className='h-64'/>
            </div>
        </div>
    </div>

    <div className='h-12.5 w-screen bg-[#181818] text-white flex justify-center text-xl items-center text-center font-bold gap-x-15'>
           <span>NEW DROP LIVE</span>
           <div className='h-[5px] w-[5px] bg-[#00ff66] rounded-full'></div>
           <span>NEW DROP LIVE</span>
           <div className='h-[5px] w-[5px] bg-[#00ff66] rounded-full'></div>
           <span>NEW DROP LIVE</span> 
    </div>

    <div id='main' className=' w-screen h-180 bg-[#111111] flex justify-center items-center'>
        <div className='flex flex-col items-center justify-center gap-y-5'>
            <h1 className='font-sans text-white text-3xl font-bold'>TRENDING COLLECTIONS</h1>
            <div>
                <div className='flex gap-x-4'>
                    {
                        trending.map((item) => (
                            <TrendingCollections 
                                key={item.id}
                                title={item.title}
                                bgImage={item.bgImage}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    </div>
    </>
  )
}
