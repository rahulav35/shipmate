import Filter from '@/components/Filter'
import FlightDetails from '@/components/FlightDetails'
import Logistics from '@/components/Logistics'
import NavBar from '@/components/NavBar'
import Status from '@/components/Status'
import React from 'react'

function Booking() {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-[#F8F9FD]'>
        <NavBar/>
        <div className=" h-[55px] w-[700px] bg-yellow-400 flex justify-center items-center mt-32">
        <div className='h-[55px] w-[500px] bg-slate-500 flex items-center justify-center'><Status/></div>
           
            </div>


            <Logistics Load='114.21KG - AIR'/>
            <div className="w-[100%] h-[1px] bg-[#b4b4b4c4] mt-5"></div>
            <div className="h-[55%] w-[100%] bg-gradient-to-b from-blue-100 via-white to-white flex items-center justify-start">
              <section className='h-[100%] w-[23%]  flex flex-col items-center justify-start bg-transparent p-5 box-border ml-5'>
                <span className="text-sm font-medium flex my-3"> 3 Top Quote <span className="font-normal"> (6 in Total)</span></span>
                <Filter SortItem='Filter'/>
                <Filter SortItem='Price'/>
                <Filter SortItem='Modes'/>
                <Filter SortItem='Seller'/>
              </section>
              <section className='h-[100%] w-[60%] flex flex-col justify-start items-center overflow-y-scroll scrollbar-hide'>
              <FlightDetails  type='Best value'/>
                <FlightDetails  type='Eco'/>
                <FlightDetails  type='Best value'/>
             
              </section>
              <div className="h-[45px] w-[45px] rounded-full bg-[#9747FF] flex justify-center items-center fixed bottom-[10%] right-[7%]">
        <img className='h-[20px] w-[20px] ' src="message2.svg" alt="" />
      </div>
            </div>
           
    </div>
  )
}

export default Booking