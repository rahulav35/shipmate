import React from 'react'
import Location from './Location'
import { useRouter } from 'next/router'
type props ={
  Load : string,
}

function Logistics({Load}:props) {
  const router = useRouter()
  return (
    <div className='h-[55px] w-[80%] bg-white rounded-2xl flex items-center justify-evenly mt-10 drop-shadow-xl filter: filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))'>

        <Location img='location.svg' location='Origin, Port, City'/>
        <Location img='location.svg' location='Destination, Port, City' />
        <div className="h-[25px] w-[1px] bg-[#B9B9B9]"></div>
        <input className='h-[100%] w-[22%] bg-white flex items-center justify-start text-[#868686] text-xs ' type="date"  />
        <div className="h-[25px] w-[2px] bg-[#B9B9B9]"></div>
        <div className="h-[100%] w-[22%] bg-white flex items-center justify-start text-[#868686] text-xs  ">
        < img className='h-[15px] w-[15px] mr-3' src='Load.svg' alt=""/>
          {Load}</div>
          <div className="h-[25px] w-[1px] bg-[#B9B9B9]"></div>
        <div onClick={()=>router.push("/bookingSummery")} className="h-[30px] w-[30px] rounded-lg bg-[#9747FF] flex justify-center items-center mr-3"><img className='h-[15px] w-[15px]' src="/Vector.svg" alt="" /></div>

    </div>
  )
}

export default Logistics