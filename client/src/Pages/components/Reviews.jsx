import React from 'react'

export async function loader(){
  return null;
}

function Reviews() {
  return (
    <div className="bg-[#FFF7ED] flex justify-center items-start px-6 sm:px-16 min-h-[100vh]">
      <div className="w-full xl:max-w-[1280px] mt-[150px]">
        Reviews
      </div>
    </div>
  )
}

export default Reviews