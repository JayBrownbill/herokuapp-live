import React from 'react'


import SecComponentOne from './SecComponentOne';
import SecComponentTwo from './SecComponentTwo';
import SecComponentThree from './SecComponentThree';
import ScrollAnimation from 'react-animate-on-scroll';
import bottleUp from '../assets/bottleRsz.png';




export default class VodoSec extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div id = "vodoSecText">


            <div id="bottleUp">
            <ScrollAnimation delay={800} animateIn="flipInY" duration={1} animateOut="flipOutY" >
            <img src = {bottleUp} alt = "howItsMade"/>
            </ScrollAnimation>
            </div>

                <div>
                    <ScrollAnimation animateIn="bounceInRight" duration={4} animateOut="bounceOutRight">
                        <SecComponentOne />
                    </ScrollAnimation>
                </div>

                <div>
                    <ScrollAnimation animateIn="bounceInLeft" duration={4} animateOut="bounceOutLeft">
                        <SecComponentTwo />
                    </ScrollAnimation>
                </div>

                <div>
                    <ScrollAnimation animateIn="bounceInRight" duration={4} animateOut="bounceOutRight">
                        <SecComponentThree />
                    </ScrollAnimation>
                </div>

            </div>
        )
    }
};
