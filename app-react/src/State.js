import React, { Component } from 'react';

class State extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Guilherme",
            age: 34
        };

        console.log(this.state);

    }

    render () {

        const { name, age } = this.state;

        return (
            
            <div>
                <h3>State</h3>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
            </div>
        );
    }
}

export default State;