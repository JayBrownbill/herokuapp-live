
import React from 'react';
import '../stylesheets/App.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import WelcomeComponents from './WelcomeComponents'
import Navbar from './Navbar';
import Toggle from './Toggle';
import About from './About';
import ProductComponents from './ProductComponents.js';
import Register from './Register';
import VodoSec from './VodoSec';
import KickstartIntro from './KickstartSmall';
// import WebGLContainer from './GLCONTAINER';  MIST DISCONTINUED


export default class App extends React.Component {
  
  render() {
    return (
      <div id="application">

        <Navbar />

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

        <div>
          <KickstartIntro />
        </div>

      </div>
    );
  }
};


