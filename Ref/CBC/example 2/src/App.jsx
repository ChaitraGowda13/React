
import React, { Component, createRef } from 'react'

export default class App extends Component {
   constructor()
   {
      super()
      this.state={
         Company:"JSPIDER"
      }
      this.spanRef=createRef()
      this.btnRef=createRef()
   }
  render() {
    return (
      <div>
         <span ref={this.spanRef}>{this.state.Company}</span>
         <br/>
         <button ref={this.btnRrf}onClick={()=>{
            this.setState({company:"QSPIDER"})
            this.spanRef.current.style.color="orange"
            this.spanRef.current.style.border="2px solid black"
            this.spanRef.current.style.padding="2px"
            this.spanRef.current.style.margin="20px"
            this.btnRef.current.style.color="red"
            this.btnRef.current.style.backgroundcolor="black"
            this.btnRef.current.style.borderRadius="25%"
         }}>CHANGE COMPANY</button>
      </div>
    )
  }
}

