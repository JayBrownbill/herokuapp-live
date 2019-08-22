import React from 'react'


import SecComponentOne from './SecComponentOne';
import SecComponentTwo from './SecComponentTwo';
import SecComponentThree from './SecComponentThree';
import ScrollAnimation from 'react-animate-on-scroll';




export default class VodoSec extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div id = "vodoSecText">
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
