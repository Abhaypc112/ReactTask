import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addListText } from './dataReducer'

function AddData() {
    const[input,setInput]=useState("")
    const dispatch = useDispatch()
    function handleAdd(){
        console.log(input);
        if(input.trim()){
            dispatch(addListText(input))
            setInput('')
        }
    }
  return (
    <div>
      <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  )
}

export default AddData
