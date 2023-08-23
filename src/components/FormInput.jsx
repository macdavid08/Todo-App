
import React, { useState } from 'react'

export const FormInput = ({addItem}) => {

    const [input, setInput]= useState('');
    const [isValid, setIsValid]=useState(true)

    const handleChangeHandler = (event)=>{
        const value = event.target.value
        if(value.trim().length > 0 ){
            setIsValid(true)
        }
        setInput(value)
    }

    const handleSubmit = (event)=> {
        event.preventDefault()
        if(input.trim().length === 0){
            setIsValid(false)
            return
        }
        addItem(input)

        setInput("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='w-full items-center'  >
            <input type="text" onChange={handleChangeHandler} value={input} className={` w-4/5 p-1 border-2 border-indigo-700 rounded outline-0 font-medium tracking-wider  lg:p-2 lg:text-xl lg:capitalize ${!isValid ? "border-red-700" : " "} `}/>
            <button type='submit' className=' py-1.5 px-2 bg-indigo-500 hover:bg-indigo-700 hover:-translate-y-0.5 transition transform ml-2  rounded text-white font-medium lg:px-4 lg:py-2.5 active:ring active:ring-offset-1 active:ring-indigo-600  '>ADD</button>
            {!isValid && <p className={` mt-2 text-center font-medium   `} > Enter a input to add a todo </p>}
        </form>
    </div>
  )
}
