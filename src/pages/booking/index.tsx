import Filter from '@/components/Filter'
import FlightDetails from '@/components/FlightDetails'
import Location from '@/components/Location'
import Logistics from '@/components/Logistics'
import NavBar from '@/components/NavBar'
import Status from '@/components/Status'
import Value from '@/components/Value'
import React from 'react'

function Booking() {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-[#F8F9FD]'>
        <NavBar/>
        
        <div className=" h-[60px] w-[700px]  flex flex-col justify-center items-center mt-24 mb-5">
        <div className='h-[40px] w-[100%]  flex items-center justify-evenly'>


            <div className="h-[40px] w-[40px] rounded-full bg-[#D3B0FF] flex items-center justify-center text-sm text-white">1</div>
            <div className="h-[2px] w-[175px] bg-[#D3B0FF]"></div>
            <div className="h-[40px] w-[40px] rounded-full bg-[#D3B0FF] flex items-center justify-center text-sm text-white">2</div>
            <div className="h-[2px] w-[175px] bg-[#D3B0FF]"></div>
            <div className="h-[40px] w-[40px] rounded-full bg-[#D3B0FF] flex items-center justify-center text-sm text-white">3</div>
            <div className="h-[2px] w-[175px] bg-[#D3B0FF]"></div>
            <div className="h-[40px] w-[40px] rounded-full bg-[#D3B0FF] flex items-center justify-center text-sm text-white">4</div>


        </div>
        <div className='h-[20px] w-[100%]   flex items-center justify-between'>

            <h1 className="text-xs ">Search</h1>
            <h1 className="text-xs -ml-7 ">Recommended Services</h1>
            <h1 className="text-xs -ml-12">Results</h1>
            <h1 className="text-xs">Booking</h1>

        </div>
           
            </div>
            <div className='h-[55px] w-[80%] bg-white rounded-2xl flex items-center justify-evenly mt-10 drop-shadow-xl filter: filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03))'>

<Location img='location.svg' location='Origin, Port, City'/>
<Location img='location.svg' location='Destination, Port, City' />
<div className="h-[25px] w-[1px] bg-[#B9B9B9]"></div>
<input className='h-[100%] w-[22%] bg-white flex items-center justify-start text-[#868686] text-xs ' type="date"  />
<div className="h-[25px] w-[2px] bg-[#B9B9B9]"></div>
<div className="h-[100%] w-[22%] bg-white flex items-center justify-start text-[#868686] text-xs  ">
< img className='h-[15px] w-[15px] mr-3' src='Load.svg' alt=""/>
  Load</div>
  <div className="h-[25px] w-[1px] bg-[#B9B9B9]"></div>

  <img className='h-[15px] w-[15px]' src="/edit2.svg" alt="" />
  

</div>
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
                <div className='h-[40px] w-[600px] flex justify-center items-center mt-2 bg-[#dddce2] rounded-xl'>
                  <Value value='Best Value'/>
                  <div className='h-[44px] w-[200px] flex justify-center items-center '>
        <span className="text-xs text-[#868686] font-medium flex"> Quickest
        <span className='text-xs font-normal'>5-5 days. $3,121</span>


        </span>
        </div>

        <div className='h-[44px] w-[200px] flex justify-center items-center'>
        <span className="text-xs text-[#868686] font-medium flex"> Cheapest
        <span className='text-xs font-normal'>5-5 days. $3,121</span>


        </span>
        </div>

                </div>
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