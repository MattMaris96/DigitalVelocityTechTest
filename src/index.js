import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Nav from './components/nav';
import Homepage from './components/homepage';
import Footer from './components/footer';
import { isMobile } from "react-device-detect";

class Main extends React.Component {

    componentDidMount(){
        isMobile ? console.log('MOBILE') : console.log('DESKTOP');
    }

    render()
    {
        return [
            !isMobile ? 
                <div>
                    <Header/>
                    <Nav/>
                    <Homepage device={isMobile}/>
                    <Footer/>
                </div>
                
            :
                <div>
                    <Header device={isMobile}/>
                    <Homepage device={isMobile}/>
                    <Footer/>
                </div>
        ]
    }
}

ReactDOM.render(<Main /> , document.getElementById('content-div'));