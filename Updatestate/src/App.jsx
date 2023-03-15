import React, { Component } from 'react'

export default class App extends Component {
    constructor()
    {
        super()
        this.state={
         username:"CHAITRA"
        }
    }
    handleChanger=()=>{
        this.setState({username:"GOWDA"})
    }

  render() {
    return (
      <div>
      <h1>{this.state.username}</h1> 
      <button onClick={this.handleChanger}> CLICK CHANGE</button>
       
      </div>
    )
  }
}

