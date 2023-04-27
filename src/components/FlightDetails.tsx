import React from 'react'
type props={
    type : string,
    
}

function FlightDetails({type}:props) {
  return (
    <div className='min-h-[160px] w-[700px] rounded-xl flex justify-between items-center bg-white px-5 box-border mt-5 drop-shadow-2xl filter: filter: drop-shadow(0 20px 33px rgb(0 0 0 / 0.09))'>


        <div className="h-[80%] w-[50%] flex flex-col items-center justify-evenly">



            <div className=" h-[40px] w-[100%] flex items-center justify-start">
                <div className="h-[37px] w-[110px] bg-[#AFFFAD] rounded-xl flex items-center justify-evenly text-xs  ">
                    <div className="h-[10px] w-[10px] rounded-full bg-[#05FF00]"></div>
                    {type}
                </div>
                <h1 className="text-sm text-[#FF0000] ml-7">Express</h1>
                <div className="h-[20px] w-[1px] bg-[#b1b1b1c2] ml-4"></div>
                <h1 className="text-xs text-[#565656] ml-4">Est. 5 days</h1>

            </div>

            <div className=" h-[40px] w-[100%] flex items-center justify-start">
                <img className='h-[17px] w-[17px] mr-2' src="location.svg " alt="" />
                <h1 className="text-sm text-[#565656]">110003,Delhi</h1>
                <div className="h-[1px] w-[20px] bg-[#b1b1b1c2] ml-4"></div>
                <img className='h-[17px] w-[17px] mx-3' src="plane.svg" alt="" />
                <div className="h-[1px] w-[20px] bg-[#b1b1b1c2] "></div>
                <img className='h-[17px] w-[17px] mx-2' src="location.svg" alt="" />
                <h1 className="text-sm text-[#565656]">200080,Shanghai</h1>


            </div>

            <div className=" h-[40px] w-[100%] flex items-center justify-start">
            <img className='h-[25px] w-[25px]  ' src="Frame 34.svg" alt="" />
            <h1 className="text-xs text-[#808080] mx-3">Primetime Worldwide</h1>
            <img className='h-[15px] w-[15px] mr-1 ' src="StarSelect.svg" alt="" />
            <img className='h-[15px] w-[15px] mr-1 ' src="StarSelect.svg" alt="" />
            <img className='h-[15px] w-[15px] mr-1 ' src="StarSelect.svg" alt="" />
            <img className='h-[15px] w-[15px] mr-1 ' src="StarSelect.svg" alt="" />
            <img className='h-[15px] w-[15px] ' src="Star.svg" alt="" />

            </div>



        </div>
        <div className="h-[80%] w-[1px] bg-[#a3a3a398] ml-44"></div>
        <div className="h-[80%] w-[20%] flex flex-col justify-evenly items-center ">
            <span className='text-lg font-medium  flex items-baseline'>$ 3982. <span className="text-xs">63</span></span>
            <button className=' h-[37px] w-[90px] text-sm text-white rounded-2xl bg-[#6F57E9] flex items-center justify-center'>Select</button>
            <h1 className="text-xs text-[#363636] border-b-[1px] border-[#363636]"> view details</h1>
            
        </div>
    </div>
  )
}

export default FlightDetails