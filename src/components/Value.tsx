import React from 'react'
type props ={
    value: string
}

function Value({value}:props) {
  return (
    <div className='h-[35px] w-[300px] flex justify-center items-center '>
        <span className="text-xs text-[#9747FF] font-medium flex">{value}
        <span className='text-xs font-normal'>5-5 days. $3,121</span>


        </span>
        </div>
  )
}

export default Value