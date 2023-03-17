import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state={
            username:"UPENDRA"
        }
    }
    componentDidMount()
    {
        let btn=document.querySelector("button")
        btn.addEventListener('click',()=>
         {this.setState({username:this.state.username="PRAJAKIYA"})
        })
    }
  render() {
    return (
        <>
        <div>{this.state.username}</div>
      <button >CHANGE</button>
    </>
    )
      
  }
}
export default App