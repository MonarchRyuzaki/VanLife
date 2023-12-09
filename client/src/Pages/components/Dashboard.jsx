import React from 'react'
import { requireAuth } from '../../utils';

export async function loader(){
  return await requireAuth();
}

function Dashboard() {
  return (
    <div className="bg-[#FFF7ED] flex justify-center items-start px-6 sm:px-16 min-h-[100vh]">
      <div className="w-full xl:max-w-[1280px] mt-[150px]">
        Dashboard
      </div>
    </div>
  )
}

export default Dashboard