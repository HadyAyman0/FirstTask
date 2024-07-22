import React from 'react'
import img1 from '../../assets/istockphoto-1415718330-612x612.jpg'

export default function Third() {
    return (
        <>
            <section className=' m-h-[65vh]  flex items-center p-5 '>
                <div className="container grid grid-cols-12 gap-5  ">
                    <div className='md:col-span-6 col-span-12 flex flex-col justify-center items-center gap-8 '>
                        <img src={img1} alt="" className='w-[100%]' />
                    </div>
                    <div className='md:col-span-6 col-span-12 flex flex-col justify-center '>
                        <h1 className='text-4xl text-center md:text-start mb-3 font-extrabold'>Always know Where can  to be and when</h1>
                        <p className='font-thin text-center md:text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente id laudantium aut eius numquam explicabo maxime illo iste minima voluptas. Aspernatur, nulla beatae! Magni, reprehenderit alias blanditiis, consectetur eaque, accusantium eum dicta minus iusto ea ad nihil nisi fugit id!</p>
                        <p className='text-[#3FA2F6] text-center mt-10'>Learn how it worsk <i class="fa-solid fa-arrow-right"></i> </p>
                    </div>
                </div>

            </section>

        </>
    )
}


