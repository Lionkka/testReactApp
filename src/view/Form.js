import React, { Component } from 'react'

class Form extends Component {
  render () {
    console.log('form component')
    const { name, parentName } = this.props;
    return (
      <div className="App">
        <h1>form! {parentName}</h1>
      </div>
    )
  }
}

export default Form