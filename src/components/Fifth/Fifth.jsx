import React from 'react'
import img1 from '../../assets/undraw_team_up_re_84ok.svg'

export default function Fifth() {
    return (
        <>
        <section className=' m-h-[65vh]  flex items-center p-5 ' id='Contactus'>
                <div className="container grid grid-cols-12 gap-5  ">
                    <div className='md:col-span-6 col-span-12 flex flex-col justify-center items-center gap-8 '>
                        <img src={img1} alt="" className='w-[80%]' />
                    </div>
                    <div className='md:col-span-6 col-span-12 flex flex-col justify-center '>
                        <h1 className='text-5xl text-center md:text-start mb-3 font-extrabold'>We Are Here For you , anytime</h1>
                        <h1 className='text-3xl text-center md:text-start' >24/7</h1>
                        <p className='font-thin text-center md:text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente id laudantium aut eius numquam explicabo maxime illo iste minima voluptas. Aspernatur, nulla beatae! Magni, reprehenderit alias blanditiis, consectetur eaque, accusantium eum dicta minus iusto ea ad nihil nisi fugit id!</p>
                        <p className='text-[#3FA2F6] text-center mt-10'>Learn how it worsk <i class="fa-solid fa-arrow-right"></i> </p>
                    </div>
                </div>

            </section>
        </>
    )
}

