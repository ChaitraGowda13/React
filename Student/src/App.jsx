import React, { Component } from 'react';
import JSON from"./user.json"
import Student from"./Student"
export default class App extends Component {
  constructor()
  {
    super()
    this.state={
      json:JSON
    }
  }
  render() {
    return (
      <div>
        <Student data={this.state.json}/>
      </div>
    )
  }
}
