import React, { Component } from 'react'

class Form extends Component {
  constructor (props) {
    super(props)
    console.log('constructor')
  }

  componentWillMount = () => {
    console.log('componentWillMount')
  }
  componentDidMount = () => {
    console.log('componentDidMount')
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  componentWillReceiveProps (nextProps) {
    console.log('-- new props', this.props.parentName, nextProps.parentName );
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return nextProps.parentName !== '4';
  }

  render () {
    console.log('render child', this.props)
    const { parentName } = this.props
    return (
      <div className="App">
        <h1>form! {parentName}</h1>
      </div>
    )
  }
}

export default Form