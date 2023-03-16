import React,{useState} from "react";
import"./global.css";
const App=()=>{
let[username,setusername]=useState("SAM")
let[count,setcount]=useState(0)

 let handlechanger=()=>{
  setusername("PRIYA")
} 
let handlechangenumber=()=>{
  setcount(1)
}

return(
<div className="mainBlock">
  <h1>{username}</h1>
  <h1>{count}</h1>
<div className="btnBlock"> 
  <button onClick={handlechanger}>CHANGE</button>
  <button onClick={handlechangenumber}>COUNT</button>
</div>
</div>
  
  
)
}
export default App