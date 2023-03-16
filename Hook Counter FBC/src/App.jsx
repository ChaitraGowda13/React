import React,{useState} from "react";
import"./global.css";
 const App=()=>{
let[count,setcount]=useState(0)

 let handleIncrement=()=>{
 setcount(count +1)
 }
let handleDecrement=()=>{
setcount(count-1)
}
let handleReset=()=>{
setcount(0)
}
 
 return(


<div className="mainBlock">
<h1>{count}</h1>


<div className="btnBlock">
<button onClick={handleIncrement}>+ Increment</button>
<button onClick={handleDecrement}>- Decrement</button>
<button onClick={handleReset}>RESET</button>

</div>

</div>
 )
 }
 export default App
