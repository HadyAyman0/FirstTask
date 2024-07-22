import React from 'react'
import img1 from '../../assets/get-apple-store.png'
import img2 from '../../assets/get-google-play.png'
import img3 from '../../assets/undraw_traveling_yhxq.svg'

export default function Header() {
    return (
        <>
            <section className=' m-h-[65vh]  flex items-center p-5 mt-[80px]'>
                <div className="container grid grid-cols-12 gap-5  ">
                    <div className='md:col-span-5 col-span-12 flex flex-col justify-center gap-8 '>
                      <div>
                      <h1 className='text-4xl text-center md:text-start mb-3 font-extrabold'>Easiest-Way tp plan Your travel internerary</h1>
                      <p className='font-thin text-center md:text-start'>Traveling can provide you with the best life. it teaches you things that you can never learn in a classroom or a textbook</p>
                      </div>
                        <div className='flex flex-col items-center gap-3'>
                            <p>Avalibel now</p>
                            <div className='flex items-center justify-center gap-3'>
                                <img src={img1} className='w-[120px]' alt="" />
                                <img src={img2} className='w-[120px]' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-7 col-span-12 '>
                        <img src={img3} alt="" />
                    </div>
                </div>

            </section>
        </>
    )
}
