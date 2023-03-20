import React, { useRef } from 'react'

export const App = () => {
   let h1Ref=useRef()
   let handlechange=()=>
   {
      h1Ref.current.style.color="red"
      h1Ref.current.style.border="2px"
      h1Ref.current.style.margin="20px"
   }
  return (
   <>
   <h1 ref={h1Ref}>APP COMPONENT</h1>
    <button onClick={handlechange}>CHANGE</button>
    </>
   
  )
}
export default App