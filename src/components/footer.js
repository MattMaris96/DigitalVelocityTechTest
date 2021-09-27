import React from 'react';
import ReactDOM from 'react-dom';

class Footer extends React.Component {
    constructor() {
      super();
      this.state = {
        };
    }
    render() {
      return [
        <section id="page-footer">
          <div className="footer-column">
            <h2>POPULAR PRODUCTS</h2>
            <a>THE WHEY</a>
            <a>THE SUPPLIMENT</a>
            <a>THE BOOST</a>
            <a>THE PRE-DRINK</a>
          </div>
          <div className="footer-column">
            <h2>COMPANY INFORMATION</h2>
            <a>ABOUT US</a>
            <a>WARRANTY</a>
            <a>DELIVERY INFORMATION</a>
            <a>RETURNS INFORMATION</a>
          </div>
          <div className="footer-column">
            <h2>HELP & INFORMATION</h2>
            <a>FAQ'S</a>
            <a>0800 123 4567</a>
            <a>INFO@REPAIR.CO.UK</a>
            <a>CHAT NOW</a>
          </div>
          <div className="footer-column">
            <h2>JOIN US ON SOCIAL</h2>
            <p>TWTR</p>
            <p>IG</p>
            <p>FB</p>
          </div>
          <img className="footer-logo" src="../images/Brand/RePAIR.png"></img>
        </section>
      ]
    }
  }

export default Footer;