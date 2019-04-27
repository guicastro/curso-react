import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendServer} from '../actions';
import './App.css';
import InitForm from '../components/InitForm';

class App extends Component {

  onClick = (event, data) => {
    console.log('onClick');
    event.preventDefault();
    console.log('Cliquei no Redux Form', data);
    this.props.createName(data);
  }

  onChangeName = ({target}) => {

    const {name, value} = target;
    console.log('onChangeName');
    console.log(name, value)
  }

  render() {
    return (
      <div className="col">        
        <div className="card">
          <div className="card-header">Redux Form</div>
          <div className="card-body">
            <div className="card-title">Meu Formulário</div>
            <InitForm onClick={this.onClick} onChangeName={this.onChangeName} />
          </div>
          <div className="card-footer">
            <p>&copy; 2019</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialValues: state.name.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createName: (data) => dispatch(sendServer(data)) 
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
