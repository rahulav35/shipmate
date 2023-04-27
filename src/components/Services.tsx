import { type } from 'os'
import React from 'react'
type props ={
  icon? : string,
  service? : string,
  desc? : string

}

function Services({icon,service,desc}:props) {
  return (
    <div className='h-[150px] w-[250px] bg-white rounded-xl flex flex-col justify-start items-center  drop-shadow-2xl filter: filter: drop-shadow(0 20px 33px rgb(0 0 0 / 0.09))'>
        <div className="h-[30%] w-[100%] flex items-center justify-start ">
        <img className='h-[22px] w-[22px] mx-4' src={icon} alt="" />
        <h1 className="text-[17px]">{service}</h1>
        
        </div>
        <div className="h-[1px] w-[90%] bg-[#9E9E9E]"></div>
        <h1 className="text-xs w-[90%] mt-3 text-[#535353]">{desc}</h1>
    </div>
  )
}

export default Services