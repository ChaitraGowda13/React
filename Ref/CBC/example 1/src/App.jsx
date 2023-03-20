
import React, { Component, createRef } from 'react'

export default class App extends Component {
   constructor()
   {
      super()
      this.state={name:"Chaitra"}
      this.h1ref=createRef()
   } 

   componentDidMount()
   {
      let h1=document.querySelector("h1")
      console.log(h1,"DOM WAY");
      console.log(this.h1ref.current,"REACT WAY");
   }
  render()
   {
    return (
      <>
      <h1 ref={this.h1}>{this.state.name}</h1>
      </>

    
    )
  }

}
