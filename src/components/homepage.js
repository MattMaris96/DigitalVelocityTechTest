import React from 'react';
import ReactDOM from 'react-dom';

class Homepage extends React.Component {
    constructor() {
      super();
      this.state = {
          currentImageIndex: 0,

          theWhey: [
                      "../images/Products/The Whey/RePAIR_Whey.png",
                      "../images/Products/The Whey/RePAIR_Whey_Green.png",
                      "../images/Products/The Whey/RePAIR_Whey_Lime.png",
                      "../images/Products/The Whey/RePAIR_Whey_Orange.png",
                      "../images/Products/The Whey/RePAIR_Whey_Brown.png"
                    ],
          theWheyColourHex: [
                      "#d4ba3c",
                      "#5fc2b1",
                      "#a1ad27",
                      "#c57034",
                      "#723a09"
                    ]
        };
    }

    componentDidMount () {
      setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
    
    nextSlide () {
      const lastIndex = this.state.theWhey.length - 1;
      const { currentImageIndex } = this.state;
      const shouldResetIndex = currentImageIndex === lastIndex;
      const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
  
      this.setState({
        currentImageIndex: index
      });
    }

    render() {
      return [
        <section id="page-main-content">
          <div id="the-whey" className={!this.props.device ? "the-whey-desktop" : "the-whey-mobile"}>
            <div className={!this.props.device ? "info" : "info-mobile"}>
                <h1>
                  WELCOME BACK, TOM LOOKING FOR <span style={{color:  this.state.theWheyColourHex[this.state.currentImageIndex] }}>THE USUAL</span>?
                </h1>
                <button>
                  SHOP NOW
                </button>
            </div>
            <div className={!this.props.device ? "image-container" : "image-container-mobile"}>
                <img className="image-slide" src={this.state.theWhey[this.state.currentImageIndex]}></img>
            </div>
          </div>

          {/* <div className="white-panel"></div> */}
          <div id="the-suppliment">
            <div className="image-container">
                <img className="image-slide" src="../images/Products/The Suppliment/RePAIR_Suppliments_Angle.png"></img>
            </div>
            <div className="info">
                <h1>
                  LOOKING FOR A QUICK BOOST?!
                </h1>
                <p>
                  EVERYTHING YOU NEED IN ONE PLACE
                </p>
                <button>
                  THE SUPPLIMENT
                </button>
            </div>
          </div>

          <div id="the-serum" className="the-serum-grid">
            <div className="grid-row-1">
                <img src="../images/Products/The Serum/runner.png"></img>
                <div>
                  <img src="../images/Products/The Serum/RePAIR_Serum.png"></img>
                  <div>
                    <h3>THE SERUM</h3>
                    <p className="flavour">FRESH LEMON</p>
                    <p className="price">£9.99</p>
                    <img src="../images/Products/The Serum/selection.png"></img>
                    <button className="add-to-basket">ADD TO BASKET</button>
                    <button className="quick-buy">QUICK BUY</button>
                  </div>
                </div>
            </div>
            <div className="grid-row-2">
                <img src="../images/Products/The Serum/hydrate.png"></img>
                <div>
                    <p>SEE WHAT OTHERS ARE SAYING:</p>
                    <h3>"A FLAVOUR THAT WORKS FOR <span>ANY MOOD</span>"</h3>
                    <img src="../images/Products/The Serum/trust-pilot.png"></img>
                    <button>FIND OUT MORE</button>
                </div>
            </div>
          </div>
        
          <div id="the-range">
            <div className="info">
                <h1>WHY NOT TRY SOMETHING NEW?!</h1>
                <p>GET YOUR HANDS ON OUR LATEST AND GREATEST</p>
                <button>VIEW THE RANGE</button>
            </div>
            <div className="image-container">
                <img src="../images/Products/The Serum/RePAIR_Serum.png"></img>
                <img src="../images/Products/The Oil/RePAIR_Oil.png"></img>
                <div className="range-info">
                    <h3>THE SERUM</h3>
                    <p className="range-info-flavours">AVAILABLE IN 5 FLAVOURS</p>
                    <p className="range-info-price">£9.99</p>
                </div>
                <div className="range-info">
                    <h3>THE OIL</h3>
                    <p className="range-info-flavours">AVAILABLE IN 2 FLAVOURS</p>
                    <p className="range-info-price">£4.99</p>
                </div>
            </div>
          </div>
        </section>
      ];
    }
  }

export default Homepage;