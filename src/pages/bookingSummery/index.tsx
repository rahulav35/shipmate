import NavBar from '@/components/NavBar'
import Status from '@/components/Status'
import React from 'react'

function BookingSummery() {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-[#F8F9FD]'>
        <NavBar/>
        <div className=" h-[55px] w-[700px] bg-yellow-400 flex justify-center items-center mt-32 mb-10">
        <div className='h-[55px] w-[500px] bg-slate-500 flex items-center justify-center'><Status/></div>
           
            </div>
            <section className='h-[60%] w-[60%] bg-slate-500 flex  flex-col items-center justify-evenly'></section>
    </div>
  )
}

export default BookingSummery