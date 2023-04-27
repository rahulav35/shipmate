import React from 'react'

function NavBar() {
  return (
    <div className=' h-[6%] w-[90%] flex justify-between items-center   fixed top-5'>
      <span className='text-[28px] font-serif font-medium'>Ship<span className='text-[#6F57E9]'>mate.</span></span>

      <div className="h-[100%] w-[330px]  flex justify-between items-center">
        <button className='h-[90%] w-[140px] rounded-lg bg-[#6F57E9] flex items-center justify-center text-white text-sm'>
login
        </button>
        <button className='h-[90%] w-[160px] rounded-lg border-[2px] border-[#6F57E9] flex items-center justify-center text-sm'>
Learn more
        </button>
        </div>
    </div>
  )
}

export default NavBar