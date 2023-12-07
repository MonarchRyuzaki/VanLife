import React from 'react'
import { useOutletContext } from 'react-router-dom'

const ListedVansPhotos = () => {
    const {imageUrl} = useOutletContext();
  return (
    <img src={imageUrl} alt="" className='h-[140px] w-[140px]'/>
  )
}

export default ListedVansPhotos