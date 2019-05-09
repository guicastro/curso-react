import React, { Component } from 'react';
import './App.css';

class Hello extends Component {

  constructor(props) {
    super(props)

    this.handleClickBtn = this.handleClickBtn.bind(this)
  }

  handleClickBtn() {
    this.setState({
      msg: 'Hello World!'
    })
  }

  componentWillMount() {

    this.setState({
      msg: ''
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickBtn}>Click to Hello</button>
        <p>{this.state.msg}</p>
      </div>
    )
  }
}

export default Hello;