import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    flexGrow: 1
  }
}

class App extends Component {
  render() {

    const { classes } = this.props;
    console.log('classes', classes);

    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar></Toolbar>
        </AppBar>
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
          <br/>
          <Button variant="contained" color="primary">Meu botão</Button>
        </header>
      </div>
    );
  }
}

export default withStyles(styles)(App);
