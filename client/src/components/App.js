
import React from 'react';
import '../stylesheets/App.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


import WelcomeComponents from './WelcomeComponents'
import Navbar from './Navbar';
import DeskNav from './DeskNav'
import Toggle from './Toggle';
import About from './About';
import ProductComponents from './ProductComponents.js';
import Register from './Register';
import VodoSec from './VodoSec';
import KickstartIntro from './KickstartSmall';
import Footer from './Footer';




export default class App extends React.Component {

  render() {
    return (

      <div id="application">

        <div className="hide-desk" id="navMobile">
          <Navbar />
        </div>

        <div id="navDesktop">
          <DeskNav />
        </div>

        <div id="landing-wrap" >
          <WelcomeComponents />
        </div>

        <div id="togglebtn">
          <ScrollAnimation animateIn="bounceInRight" duration={3} animateOut="bounceOutRight">
            <About />
            <Toggle />
          </ScrollAnimation>
        </div>

        <ProductComponents />

        <Register />

        <div className="creamBase">
          <VodoSec />
        </div>

        <div id="finalStarter">
          <KickstartIntro />
        </div>

        <div id="footer">
        </div>

        <footer>
        <Footer/>        
        </footer>
      </div>
    );
  }
};


