// function based component
                            // import React from "react";
                            // const Nav=(props)=>{
                            //     return(
                            // <h1> { props.data}</h1>
                            //     )
                            // }
                            // export default Nav


//   class based component 


import React from "react";
import { Component } from "react";
export default class Nav extends Component
{
render()
{
 return(
<>
<div>{this.props.data}</div>
</>
 )
}
}
 


