import { type } from 'os'
import React from 'react'
type props ={
    SortItem : string
}

function Filter({SortItem}:props) {
  return (
    <div className='h-[40px] w-[80%] flex items-center justify-between  my-1 bg-transparent'>
        <h1 className="text-sm font-medium">{SortItem}</h1>
        <img className='h-[13px] w-[13px]' src="filter.svg" alt="" />
    </div>
  )
}

export default Filter