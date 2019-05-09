import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)

    this.handleClickBtn = this.handleClickBtn.bind(this);
  }

  handleClickBtn() {
    return this.props.sayHello();
  }

  render() {
    const { msg } = this.props

    console.log(this.props)
    return(
      <div>
        <h1>Hello</h1>
        <button onClick={this.handleClickBtn}>Click</button>
        <p>{ msg.data }</p>
      </div>
    )
  }

}

export default App;
