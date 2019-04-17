import React, { Component } from 'react';

class Clock2 extends Component {

    constructor(props) {

        super(props);
        this.state = {
            time: new Date().toLocaleString('pt-BR', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false
            })
        }

        console.log(this.state);
    }

    componentDidMount(){

        this.timer = setInterval(() => this.updateClock(), 1000);
    }

    componentWillUnmount() {

        //destruir o interval quando o componente deixar de existir
        clearInterval(this.timer);
    }

    updateClock() {
        this.setState({
            time: new Date().toLocaleString('pt-BR', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false
            }),
            name: "Guilherme"
        })
    }

    render () {

        const { time, name } = this.state;
        
        return (
            <div>
                <h1>{ time }</h1>
                <p>{name}</p>
            </div>
        );
    }
}

export default Clock2;