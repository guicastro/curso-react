import React, { Component } from 'react';

class Events extends Component {

    constructor(props) {

        super(props);
        this.state = {
            clicked: 0
        }

        /*uma outra forma de igualar os contextos é configurar dentro do constructor. 
        Neste caso não precisa do .bind(this) depois do this.clickMethod dentro do render*/
        // this.clickMethod = this.clickMethod().bind(this);

    }
    
    clickMethod() {
        console.log('start clickMethod: ', this.state.clicked);
        this.setState({
            clicked: this.state.clicked + 1
        })
        console.log('end clickMethod: ', this.state.clicked);
    }
    
    /*Uma outra forma de fazer com que os contextos sejam igualados é utilizando arrow functions que não guardam contextos*/
    clickMethod = () => {
        console.log('start clickMethod: ', this.state.clicked);
        this.setState({
            clicked: this.state.clicked + 1
        })
        console.log('end clickMethod: ', this.state.clicked);
    }


    render () {

        return (
            //Quando não se utiliza nenhum método de igualar contexto, deve-se adicionar o .bind(this) ao final para igualar o contexto
            // <div><button type="button" onClick={this.clickMethod.bind(this)}>Click me</button></div>

            //Quando se utiliza arrow functions o contexto não precisa igualar
            <div><button type="button" onClick={this.clickMethod}>Click me</button></div>
        );
    }
}

export default Events;