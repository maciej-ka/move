import React, { Component } from 'react'
import './App.css'
import TextInput from './TextInput/TextInput'

class App extends Component {
  render() {
    return (
      <div>
        <svg ref='svg'>
          <TextInput value='test' />
        </svg>
        <input type='text' />
      </div>
    )
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <div className="App-header">
  //         <h2>Welcome to React</h2>
  //       </div>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
}

export default App
