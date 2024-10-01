import React from 'react'
import { useSelector } from 'react-redux'

function ShowData() {
    const store = useSelector((state=>state.texts.list))
    console.log(store);
    
  return (
    <div>
      {
        store.map((text)=>{
            return(
                <p>{text.text}</p>
            )
        })
      }
    </div>
  )
}

export default ShowData
