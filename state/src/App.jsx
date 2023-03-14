// using Constructor



// import React, { Component } from 'react'

// export default class App extends Component {
// constructor(){
//     super()
//     this.state={
//         username:"Rahul"
//     }
// }
// render()
// {
// return(
//     <h1>{this.state.username}</h1>
// )
// }
// }


// using Stateobject 

import React, { Component } from 'react'

export default class App extends Component {
    state={
        username:"rahul"
    }
  render() {
    return (
      <h1>{this.state.username}</h1>
    )
  }
}

