import React from 'react'
import { useRouter } from 'next/router'

function PriceDetails() {
    const router = useRouter()
  return (
    <div className='h-[95%] w-[95%] flex flex-col items-center justify-evenly'>
        <div className="h-[30px] w-[90%] flex justify-between items-center">
            <h1 className="text-sm font-medium">Price Details</h1>
            <div className="h-[15px] w-[100px] flex items-center justify-evenly bg-[#E5E6E6] rounded-2xl">
                <img className='h-[10px] w-[10px]' src="/Starred.svg" alt="" />
                <h1 className="text-[9px]">Known Shipper</h1>
            </div>
        </div>

        <div className="h-[30px] w-[90%] flex justify-between items-center">
            <h1 className="text-xs text-[#808080]">Seller’s Quote</h1>
            <h1 className="text-xs text-[#808080]">$ 3,659.25</h1> 
            </div>

        <div className="h-[1px] w-[90%] bg-[#B3B3B3]"></div>

        <div className="h-[20px] w-[90%] flex justify-between items-center mt-2">
            <h1 className="text-xs text-[#808080]">Duties and taxes</h1>
            <h1 className="text-xs text-[#808080]">Not Included</h1> 
            </div>

            <div className="h-[50px] w-[90%] flex justify-between items-center">
            <span className="text-xs text-[#808080] flex flex-col">Insurance <span className='text-[10px] text-[#808080] '>Based on the items cost</span></span>
            <h1 className="text-xs text-[#808080]">$323.40</h1> 
            </div>


            <div className="h-[1px] w-[90%] bg-[#B3B3B3]"></div>
            

            <span className='text-xs text-[#808080] -ml-36'>Add a <span className='text-[#6F57E9]'>promo code</span></span>

            <div className="h-[30px] w-[90%] flex justify-between items-center">
            <h1 className="text-xs text-[#808080]">Platform Fee</h1>
            <h1 className="text-xs text-[#808080]">$119.48</h1> 
            </div>


            <div className="h-[1px] w-[90%] bg-[#B3B3B3]"></div>

            <div className="h-[35px] w-[90%] flex justify-between items-center">
            <h1 className="text-lg font-medium text-[#000000]">Total:</h1>
            <h1 className="text-lg font-medium text-[#000000]">$ 4,102.13</h1> 
            </div>


            <button onClick={()=> router.push("/booking")} className='h-[40px] w-[80%] rounded-xl flex items-center justify-center text-white text-sm bg-[#9747FF]'>Checkout</button>




    </div>
  )
}

export default PriceDetails