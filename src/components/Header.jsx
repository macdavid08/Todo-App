import React from 'react'
import { FaList } from "react-icons/fa6"

export const Header = () => {
  return (
    <div className=' w-max mx-auto flex gap-3 items-center py-4 font-bold uppercase text-xl lg:text-3xl '>Todo app <FaList className='h-5 w-5 lg:h-8 lg:w-8 text-indigo-800' /> </div>
  )
}
