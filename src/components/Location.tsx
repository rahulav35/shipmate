import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { type } from 'os';

type props= {
  img:string,
  location : string

}

function Location({location,img}:props) {
  
  return (
    <div  className='h-[100%] w-[22%] bg-white flex items-center justify-start text-[#868686] ml-2'>
     < img className='h-[15px] w-[15px] mr-3' src={img} alt=""/>
     <h1 className="text-[#868686] text-xs  ">{location}</h1>
    </div>
  )
}`                                                                                                                                                                                                                                                                                                          `

export default Location