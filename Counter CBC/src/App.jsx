// class based component 


import React, { Component } from 'react';
import "./global.css"

export default class App extends Component {
  constructor()
  {
    super()
    this.state={
count:0
    }
 }
 handleIncrement=()=>{
  this.setState({count:this.state.count+1})
 }
 handleDecrement=()=>{
  this.setState({count:this.state.count-1})
 }
 handleRESET=()=>{
  this.setState({count:0})
 }
  render() {
    return (
      <div className='mainBlock'>
        <h1>{this.state.count}</h1>
        <div className='btnBlock'>
        <button onClick={this.handleIncrement}>+Increment</button>
        <button onClick={this.handleDecrement}>-Decrement</button>
        <button onClick={this.handleRESET}>RESET</button>
        </div>
        
      </div>
    )
  }
}
