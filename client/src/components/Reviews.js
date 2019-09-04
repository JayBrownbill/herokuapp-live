import React from 'react';

import revone from '../assets/RevOneRsz.png'
import revtwo from '../assets/RevTwoRsz.png'
import revthree from '../assets/RevThreeRsz.png'
import ScrollAnimation from 'react-animate-on-scroll'

export default class Reviews extends React.Component {
    render() {
        return (
            <div id="head-wrap">
            <h1 id="review-head"><span>CUSTOMER REVIEWS</span></h1>
            <div id="review-wrapper">
                <div className="hide-mob">
                    <ScrollAnimation delay={10} animateIn="flipInY" duration={8}>
                        <img src={revone} alt="amazing reviews" className="revanim"></img>
                    </ScrollAnimation>
                </div>

                <ScrollAnimation delay={800} animateIn="flipInX" duration={3}>
                    <img src={revtwo} alt="amazing reviews" className="revanim"></img>
                </ScrollAnimation>

                <div className="hide-mob">
                    <ScrollAnimation delay={1000} animateIn="flipInY" duration={6}>
                        <img src={revthree} alt="amazing reviews" className="revanim"></img>
                    </ScrollAnimation>
                </div>
            </div>
            </div>
        )
    }
};
