
import React from 'react'
import eye from "./download.png"
import { useState } from 'react';
import"./global.css"
const App = () => {

  let [password,setPassword] = useState(true)

  let showPassword = ()=>{
    if(password === true)
    {
        setPassword(!true)
    }
    else
    {
        setPassword(!false)
    }
  }
  return (
   
   <>

      <input type={password? "text" : "password"} name="" id="" />
      
      <img src={eye} alt="" height="20px" width="20px" onClick={showPassword}/>
      
      
    </>
  )
}

export default App