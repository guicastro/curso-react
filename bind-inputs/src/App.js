import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = { }  
  }

  handleInput = (event) => {
    
    const { target } = event; //extrai o target
    const { name } = target; //extrai o name do elemento
    
    const value = target.type === 'checkbox' ? target.checked : target.value; //extra o value do elemento, lembrando de diferenciar os casos de checkbox

    return this.setState({      
      [name]: value
    })
  }

  render() {
    console.log('state', this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <div>
          Nome: <input type="text" name="nome" onChange={this.handleInput}></input>
          <br/>
          Idade: <input type="text" name="idade" onChange={this.handleInput}></input>
          <br/>
          Autoriza? <input type="checkbox" name="autoriza" value="sim" onChange={this.handleInput}></input>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
