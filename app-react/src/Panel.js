import React, { Component } from 'react';

class Panel extends Component {

  constructor(props) {

    super(props);
  }

  render() {

    const {headerColor, headerText, data} = this.props;

    return(
        <div className="panel" style={{ width: '500px', height: '50px', position: 'relative'}}>
            <div className="panel-head" style={{ width:'100%', background: headerColor}}>
            {
                headerText
            }
            </div>
            <div className="panel-body">
            {
                data
            }
            </div>
        </div>
    )
  }
}

export default Panel;