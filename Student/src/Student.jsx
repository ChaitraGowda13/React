import React from 'react'

const users = (props) => {
    let data=props.data
  return (
    <div>
        <table border="2px" style={{textAlign:"center",fontWeight:"bolder"}}>
            <tr>
                <td>student name</td>
                <td>student id</td>
                <td>student course</td>
                <td>student photo</td>
            </tr>
            {data.map((x)=>
            {
                console.log(x);
                return<tr>
                    <td>{x.studentname}</td>
                    <td>{x.studentid}</td>
                    <td>{x.studentcourse}</td>
                    <td>{<img src={x.studentphoto} alt="" height="80px" width="80px"/>}</td>
                </tr>
            })}
            </table>
    </div>
  )
}

export default users