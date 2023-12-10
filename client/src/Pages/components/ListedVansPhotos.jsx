import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { requireAuth } from '../../utils';

export async function loader({request}){
  return await requireAuth(request)
}

const ListedVansPhotos = () => {
    const {imageUrl} = useOutletContext();
  return (
    <img src={imageUrl} alt="" className='h-[140px] w-[140px]'/>
  )
}

export default ListedVansPhotos