import React, { Component } from 'react';

class EventsOneWay extends Component {

    constructor(props) {

        super(props);
        this.state = {
            nome: '',
            data: []
        }
        console.log('constructor state', this.state);

    }

    
    handleChange = (event) => {

        this.setState({
            //Forma estática de definição de um State
            // name: event.target.value

            //forma dinâmica de obter todas as informações a partir do evento, lembrando sempre do NAME do elemento ser o mesmo do nome do atributo do state
            [event.target.name]: event.target.value
        })
        console.log('state', this.state);
    }

    insertToData = () => {

        const list = this.state.data;
        list.push(this.state.nome);
        this.setState({
            data: list
        })
        console.log('state', this.state);
    }



    render () {

        const {data} = this.state;
        return (
            <div>
                <p>Nome: {this.state.nome}</p>
                {/* <p>Idade: {this.state.idade}</p> */}
                <input type="text" name="nome" id="nome" placeholder="Digite seu nome" onChange={this.handleChange}/>
                {/* <br/><input type="text" name="idade" id="idade" placeholder="Digite sua idade" onChange={this.handleChange}/> */}
                <br/><button type="button" onClick={this.insertToData}>OK</button>
                <ul>
                    {
                        data.map(item => (
                            <li key={item}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default EventsOneWay;