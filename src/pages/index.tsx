import Logistics from '@/components/Logistics'
import NavBar from '@/components/NavBar'
import Services from '@/components/Services'
import React from 'react'



function Home() {
  
  return (
    <div  className='h-screen w-screen flex flex-col items-center justify-start bg-[#F8F9FD] bg-bgwave bg-bottom absolute'>
      <NavBar />
      <div className="h-[60px] w-[70%] flex flex-col items-center justify-between  mt-28">
        <h1 className="text-3xl font-sans tracking-wide font-medium ">Hassle-Free Shipping Solutions</h1>
        <h1 className="text-[17px]">Compare, book, and manage your freight across the world’s top logistics providers, all on one platform.</h1>
      </div>
      <Logistics Load='Load'/>
      <h1 className="text-2xl font-medium mt-10">Services</h1>
      <div className="h-[150px] w-[95%]  flex items-center justify-between mt-5">
<Services icon="/Freight.svg"  service="Freight Services" desc='Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door.'/>
<Services icon="/Buissiness.svg" service='Business Services' desc='We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.' />
<Services icon="/globalsearch.svg" service='Shipping & Logistics' desc='We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.'/>
<Services icon="/24support.svg" service='24/7 Support' desc='Receive support from our experts all over the world at every stage of the process, 24/7.'/>
      </div>
      <div className="h-[45px] w-[45px] rounded-full bg-[#9747FF] flex justify-center items-center fixed bottom-[19%] right-[4%]">
        <img className='h-[20px] w-[20px] ' src="message2.svg" alt="" />
      </div>
    </div>
  )
}

export default Home