import React from 'react'
import { CiViewList } from 'react-icons/ci'
import { IoAddCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='h-screen w-[220px] bg-blue-800 p-2'>
        <ul className='flex flex-col gap-2'>
            <li className='flex items-center justify-start gap-1 text-white pl-4 pr-2 py-2.5 rounded-md bg-purple-900 font-medium   hover:bg-orange-500 hover:scale-105 transition-all duration-300'>
              <CiViewList size={20}/>
              <Link to={'/dashboard/all-foods'}>All-Food</Link>
            </li>
            <li className='flex items-center justify-start gap-1 text-white pl-4 pr-2 py-2.5 rounded-lg bg-purple-900 font-medium hover:bg-orange-500 hover:scale-105 transition-all duration-300'>
              <IoAddCircleOutline size={20}/>
              <Link to={'/dashboard/add-food'}>Add-Food</Link>
            </li>

            <li className='flex items-center justify-start gap-1 text-white pl-4 pr-2 py-2.5 rounded-lg bg-purple-900 font-medium hover:bg-orange-500 hover:scale-105 transition-all duration-300'>
              <CiViewList size={20}/>
              <Link to={'/dashboard/update-food/:id'}>UpdateFoodItem</Link>
            </li>
        </ul>
      
    </div>
  )
}

export default Sidebar
