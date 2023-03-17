import React from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const App=()=>{
let handlechange=()=>{
    toast.success("LOGGED IN SUCCESSFULLY",
   {position:toast.POSITION.TOP_CENTER} )
}

return(
    <div>
        <ToastContainer/>
        <button onClick={handlechange}>CLICK FOR MESSAGE</button>
    </div>
)
}
export default App