import React from 'react'
import VansDetailed from '../VansDetailed';
import { Link } from 'react-router-dom';

function Card({id, name, price, description, imageUrl, type, searchParams}) {
  let bgColor;
  if (type === "simple") {
    bgColor = "#E17654"
  } else if (type === "luxury") {
    bgColor = "#161616"
  } else if (type === "rugged") {
    bgColor = "#115E59"
  }
  return (
    <Link to = {id} state = {{search : searchParams.toString(), type: type}} className='flex flex-col max-w-[22rem]' element={<VansDetailed />}>
        <img src={imageUrl} alt="" className='h-[22rem] w-[22rem]'/>
        <div className='flex flex-col'>
            <h4 className='text-[#161616] font-inter text-xl font-semibold mt-3'>{name}</h4>
            <div className='flex justify-between items-center'>
                <div className='text-[#161616] font-inter text-xl font-semibold'> ${price} <span className='text-[#161616] font-inter text-sm font-medium'>/day</span> </div>
                <div className='text-center font-inter text-md font-semibold capitalize text-[#FFEAD0] px-6 py-2 rounded-lg' style={{backgroundColor: bgColor}}>{type}</div>
            </div>
        </div>
    </Link>
  )
}

export default Card