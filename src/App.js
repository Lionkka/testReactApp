import React, { Component } from 'react'
import './App.css'

import Form from './view/Form'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      name1: '111'
    }
  }
  componentDidCatch(){
    console.log('error!!!');
  }

  onChangeHandle = (event) => {
    console.log('onChangeHandle', event.target.value)
    this.setState({ name: event.target.value })
  }

  render () {
    console.log('parent render')
    const a = 5
    const b = 10
    return (
      <div className="App">
        <h1>App js</h1>
        <input type="number" value={this.state.name} onChange={this.onChangeHandle}/>
        <Form name={a} parentName={this.state.name}/>
      </div>
    )
  }
}

export default App
