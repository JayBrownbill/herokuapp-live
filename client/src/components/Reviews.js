import React from 'react';

import revone from '../assets/RevOneRsz.png'
import revtwo from '../assets/RevTwoRsz.png'
import revthree from '../assets/RevThreeRsz.png'
import ScrollAnimation from 'react-animate-on-scroll'

export default class Reviews extends React.Component {
    render() {
        return (
            <div id = "review-wrapper">

            <ScrollAnimation delay={10} animateIn="flipInY" duration={8} animateOut="fadeOut">
            <img src = {revone} alt = "amazing reviews" className="revanim"></img>
            </ScrollAnimation>

            <ScrollAnimation delay={800} animateIn="flipInX" duration={3} animateOut="fadeOut">
            <img src = {revtwo} alt = "amazing reviews" className="revanim"></img>
            </ScrollAnimation>

            <ScrollAnimation delay={1000} animateIn="flipInY" duration={6} animateOut="fadeOut">
            <img src = {revthree} alt = "amazing reviews" className="revanim"></img>
            </ScrollAnimation>

            </div>
        )
    }
};
