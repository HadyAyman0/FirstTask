import React from 'react'

export default function Loading() {
  return (
  <section className='w-full h-[100vh] bg-black bg-opacity-60 flex justify-center items-center '>
    <div className='container flex justify-center  items-center gap-10 '>
    <h1 className="font-extrabold text-3xl"> <span className="text-red-600">H</span> Travel</h1>
    <span class="loader"></span>
    </div>
  </section>
  )
}
