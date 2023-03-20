import React from 'react'
import IMG from"./Img.jpg"
import { useState, useRef } from 'react';

const App = () => {
   let[photo,setphoto]=useState(IMG)
   let[loading,setloading]=useState(true)
   let imgRef=useRef()
   let handlechange=()=>{
      if(loading==true)
      {
         setloading(!true)
         imgRef.current.style.borderRadius="25%"
         imgRef.current.style.border="2px solid purple"
      }
      else
      {
         setloading(!false)
         imgRef.current.style.borderRadius="0"
         imgRef.current.style.border="none"
      }
      }

  return (
    <div>
      <img src={photo} alt="snow"  ref={imgRef} height="200px" width="200px"/>
      <button onClick={handlechange}>{loading ? "ON": "OFF"}  </button>
    </div>
  )
  }


export default App