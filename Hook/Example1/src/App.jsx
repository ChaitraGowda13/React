import React, { useState } from "react";

const App=()=>{
  let[username,setusername]=useState("Sam")
  return(
    <>
    <h1>{username}</h1>
    </>
  )
}
export default App