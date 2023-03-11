import React from 'react'

const Course =(props)=>{
  if (props.courseDetails.courseAvail===true)
  {
    
    return(
        <div>
        <h1>{props.courseDetails.courseName}</h1>
        <h1>{props.courseDetails.courseDuration}</h1>
        <button style={{color:"green",
        backgroundColor:"black",
        borderRadius:"25px",
        display:"flex",
        alignItems:"center",
        justifyItems:"center"
      }}> AVALABILE</button>
        
        
        </div>
    )
  }
  else{
    return(
        <>
        <h1>{props.courseDetails.courseName}</h1>
        <h1>{props.courseDetails.courseDuration}</h1>
        <button style={{color:"red",
                        backgroundColor:"black",
                        borderRadius:"25px",
                        display:"flex",
                        alignItems:"center"

      
                                }}> NOT AVALABILE</button>
        
        
        </>
    )

  }
}

export default Course