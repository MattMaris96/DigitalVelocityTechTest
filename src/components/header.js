import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    constructor() {
      super();
      this.state = {
        };
    }
    render() {
      return [
            !this.props.device ?
                <section id="page-header">
                    <img src="../images/Brand/RePAIR.png"></img>
                </section>
            :
                <section id="page-header" className="mobile">
                    <p>///</p>
                    <img src="../images/Brand/RePAIR.png"></img>
                    <p>cart</p>
                </section>
      ]
    }
  }

export default Header;