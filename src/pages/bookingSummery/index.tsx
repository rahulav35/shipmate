import NavBar from '@/components/NavBar'
import PriceDetails from '@/components/PriceDetails'
import Status from '@/components/Status'
import React from 'react'

function BookingSummery() {
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
            <div className="h-[40px] w-[40px] rounded-full bg-[#868686] flex items-center justify-center text-sm text-white"></div>


        </div>
        <div className='h-[20px] w-[100%]   flex items-center justify-between'>

            <h1 className="text-xs ">Search</h1>
            <h1 className="text-xs -ml-7 ">Recommended Services</h1>
            <h1 className="text-xs -ml-12">Results</h1>
            <h1 className="text-xs text-[#868686]">Booking</h1>

        </div>
           
            </div>

<div className="h-[65%] w-[100%] flex items-start justify-around">

            <section className='h-[100%] w-[60%]  flex  flex-col items-center justify-evenly'>
                <div className="h-[39%] w-[95%] rounded-lg bg-white flex flex-col items-start justify-evenly  drop-shadow-2xl filter: filter: drop-shadow(0 20px 33px rgb(0 0 0 / 0.09))">
                    <h1 className="text-sm font-medium ml-8">Booking Summery</h1>
                    <div className=" h-[70%] w-[100%] flex justify-center items-center mt-1">
                        <div className="h-[100%] w-[13%] flex flex-col justify-center items-center ">
                            <img className='h-[25px] w-[25px] mb-1 ' src="/icon.svg" alt="" />
                            <h1 className="text-xs align-middle">Delhi, </h1>
                            <h1 className="text-xs align-middle">110003 India </h1>
                        </div>

                        <div className="h-[100%] w-[70%] flex flex-col justify-start items-center ">
                            <h1 className="text-xs font-medium">Express</h1>
                            <img  className='h-[20px] w-[20px] ' src="/Plane icon.svg" alt="" />
                            <div className="h-[1.5px] w-[100%] bg-[#000000]"></div>
                        </div>



                        <div className="h-[100%] w-[13%]  flex flex-col justify-center items-center ">
                            <img className='h-[25px] w-[25px] mb-1 ' src="icon.svg" alt="" />
                            <h1 className="text-xs align-middle">Shanghai,</h1>
                            <h1 className="text-xs align-middle">200080 China</h1>
                        </div>

                    </div>
                </div>

                <div className="h-[24%] w-[95%]  flex items-center justify-between">
                    <div className="h-[100%] w-[23%] flex flex-col items-center justify-evenly bg-white rounded-lg  drop-shadow-2xl filter: filter: drop-shadow(0 20px 33px rgb(0 0 0 / 0.09))">
                        <h1 className="text-xs text-[#5C5C5C]">Total Weight/Volume</h1>
                        <img className='h-[35px] w-[35px]' src="/weightmeter.svg" alt="" />
                        <h1 className="text-xs font-medium">114.21KG</h1>
                    </div>

                    <div className="h-[100%] w-[75%] flex justify-start items-center bg-white rounded-lg  drop-shadow-2xl filter: filter: drop-shadow(0 20px 33px rgb(0 0 0 / 0.09))">
                        <h1 className="text-xs text-[#5C5C5C] mb-12 ml-3">Load</h1>
                        <h1 className="text-sm font-medium ml-40">1 X</h1>
                        <div className="h-[100%] w-[150px] flex flex-col justify-center items-center">
                            <img className='h-[30px] w-[30px]' src="/Pallets.svg" alt="" />
                            <h1 className="text-xs font-medium">Pallets</h1>
                            <h1 className="text-xs">230 X 140 X  120 CM</h1>
                        </div>
                    </div>
                </div>


                <div className="h-[32%] w-[95%] flex justify-between items-center ">
                    <div className="h-[100%] w-[49%] bg-white rounded-lg flex flex-col justify-evenly items-center  drop-shadow-2xl filter: filter: drop-shadow(0 20px 33px rgb(0 0 0 / 0.09))">
                        <span className='flex text-xs text-[#5C5C5C] -ml-32'>Seller: <span className='font-medium'>Primetime Worldwide</span></span>
                        <img className='h-[40px] w-[150px] object-contain' src="/Frame 64.svg" alt="" />
                    </div>
                    <div className="h-[100%] w-[49%] bg-white rounded-lg flex flex-col justify-evenly items-center  drop-shadow-2xl filter: filter: drop-shadow(0 20px 33px rgb(0 0 0 / 0.09))">
                        <span className='flex text-xs text-[#5C5C5C] -ml-32'>Seller: <span className='font-medium'>Primetime Worldwide</span></span>
                        <img className='h-[40px] w-[150px] object-contain' src="/Xcover.svg" alt="" />
                    </div>
                </div>
            </section>
            <section className='h-[89%] w-[22%] mt-2 flex bg-white rounded-lg flex-col items-center justify-evenly  drop-shadow-2xl filter: filter: drop-shadow(0 20px 33px rgb(0 0 0 / 0.09))'>
                <PriceDetails/>
            </section>
            <div className="h-[45px] w-[45px] rounded-full bg-[#9747FF] flex justify-center items-center fixed bottom-[6%] right-[5%]">
        <img className='h-[20px] w-[20px] ' src="message2.svg" alt="" />
      </div>
            </div>
    </div>
  )
}

export default BookingSummery