import React from 'react';
import ReactDOM from 'react-dom';

function findPos(obj) {
      var curtop = 0;
      if (obj.offsetParent) {
          do {
              curtop += obj.offsetTop;
          } while (obj = obj.offsetParent);
      return [curtop];
      }
  }

class Nav extends React.Component {
    constructor() {
      super();
      this.state = {

        };
    }

    scrollToElement(navClick)
    {
      window.scroll(0, findPos(document.getElementById(navClick)));
    }

    render() {
      return [
          <section id="page-nav">
              <ul className="nav">
                  <li className="nav-option" onClick={(e) => this.scrollToElement('the-whey')}>THE WHEY</li>
                  <li className="nav-option" onClick={(e) => this.scrollToElement('the-suppliment')}>THE SUPPLIMENT</li>
                  <li className="nav-option" onClick={(e) => this.scrollToElement('the-serum')}>THE BOOST</li>
                  <li className="nav-option" onClick={(e) => this.scrollToElement('the-serum')}>THE PRE-DRINK</li>
                  <li className="nav-option" onClick={(e) => this.scrollToElement('the-range')}>VIEW ALL</li>
                  <li className="nav-option" onClick={(e) => this.scrollToElement('page-footer')}>FAQS</li>
                  <li className="nav-option" onClick={(e) => this.scrollToElement('page-footer')}>CONTACT</li>
              </ul>
              <div className="nav-info">
                    <p>FREE NEXT DAY DELIVERY</p>
                    <p>MANUFACTURED IN THE UK</p>
                    <p>CPD COMPLIANT</p>
              </div>
          </section>
      ];
    }
  }

export default Nav;