import React, { Component } from 'react';
import Panel from './Panel';

class Props extends Component {

    constructor(props) {
        super(props);
        const {attr, attr2} = this.props;
        console.log(attr, attr2);
    }

    render () {

        const {attr, attr2} = this.props;

        return (
            <div>
                {attr === 'p' ? <p>P</p> : <h1>PROPS</h1>}
                {attr2 === 'valor' ? <p>VALOR</p> : <h1>PROPS2</h1>}
                <Panel headerColor="red" headerText="NOME" data="Guilherme Castro" />
            </div>
        );
    }
}

export default Props;