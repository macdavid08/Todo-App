 import React, { useState } from 'react'
 import { FaTrashCan } from "react-icons/fa6"; 

 export const ListItems = ({value, onDelete, toggle, data}) => {
    

   return (
     <div >
        <ul className=' py-1 mt-3'>
            <li className= {`px-4  bg-gray-100 py-1  flex justify-between w-full mx-auto border-0 rounded shadow shadow-indigo-200 lg:py-3 lg:text-xl lg:font-medium cursor-pointer  ${data.done ? "line-through" : ""} `} onClick={() => toggle(data.id)} >{value}
            <button onClick={onDelete}><FaTrashCan className=' w-4 h-4 text-red-700 lg:w-5 lg:h-5 ' /> </button>
            </li>
        </ul>
     </div>
   )
 }
 