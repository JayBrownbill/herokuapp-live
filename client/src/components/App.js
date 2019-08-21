
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

  state = {
    renderedResponse: " ",
    databaseConnection: " ",
  }

  getResponse = async () => {
    const response = await fetch('/api/responsecheck');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

  getDBResponse = async () =>{
    const dbToken = await fetch('/api/databasecheck');
    const body2 = await dbToken.json();
    if (dbToken.status !== 200) throw Error(body2.message);
    return body2;
  }

  componentDidMount() {
    this.getResponse()
      .then(res => {
        const someData = res;
        this.setState({ renderedResponse: someData })
      });

      this.getDBResponse()
      .then(res=>{
        const dbData = res;
        this.setState({databaseConnection: dbData});
      })
  }

  render() {
    const {renderedResponse} = this.state;
    const {databaseConnection} = this.state;

    return (
      <div id="application">

      <p> --------------------------Calling Server (BACKEND) </p>
      <p> -------------------------- {renderedResponse.express} </p>

      <p> --------------------------Connecting to Heroku Sql Database (BACKEND) </p>
      <p> -------------------------- {databaseConnection.express} </p>



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


