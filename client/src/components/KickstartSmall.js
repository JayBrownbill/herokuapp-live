import React from 'react';
import posed from 'react-pose';
import AnchcorLink from 'react-anchor-link-smooth-scroll';

import Reviews from './Reviews';
import FooterForm from './FooterForm';


import arrow from '../assets/arrowDown.png';
import phone from '../assets/handFInal.png';
import percent from '../assets/100percRSZ.png';
import bottle from '../assets/choppedBottle.png'
import realArrow from '../assets/arrow.png';



const PosedFloatingObj = posed.div({

    visible: {
        opacity: 1,
        y: -6,
        x: 1.5,
        transition: {
            duration: 900,
            ease: 'linear',
            flip: Infinity,
        }
    }
})

export default class KickstartIntro extends React.Component {

    constructor(props) {
        super();
        this.state = {}
    }

    state = { floating: false };

    InitializeAnim() {
        this.setState({ floating: !this.state.floating });
    }

    componentDidMount() {
        this.InitializeAnim();
    }

    render() {
        return (
            <div id="kick-sec">
                <h1 className="kickstart-content"> <span> Kickstarter Campaign <b>#JoinTheRealm.</b> </span> </h1>
                <p className="kickstart-content">
                    A brand that turns green tea into something <b>strangely nice</b>. Only using natural ingredients and a wild imagination
                    with bring to life an elixir that everyone seems to love.

                    Selling out was all we needed, now we have the confidence in our consumer base to scale this business larger.
                    We haven't been able to deal with the demand and we are still struggling. <br />
                    This is why we have decided to Kickstart our business.</p>

                <Reviews />

                <div id="kickstart-flex" className="kickstart-content">
                    <PosedFloatingObj pose={this.state.floating ? 'visible' : 'hidden'} id="float-anim">
                        <AnchcorLink offset='100' href='#scroll-soldout'> <img src={arrow} alt="kickstart design" id="arrow" /> </AnchcorLink>
                    </PosedFloatingObj>
                </div>

                <h1 id="scroll-soldout"><span> WE SOLD OUT IN JUST TWO WEEKS!  </span></h1>
                <p className="kickstart-content">Oh yeah! VODO sold 6 months stock in 2 weeks. The next step is to make the drink 100% natural.
                In order to make the amazing drink with only natural ingredients we need to make it special ingredients and drink specialists
                that can bring this idea to life. So we need your help to raise £12,500 to get to the next stage.</p>

                <div id="sellout-wrapper">
                    <a href=" https://youtu.be/rugnGHexOMo"> <img src={phone} alt="phone reviews"/> </a>
                    <div className="hide-mob" id="natural-perc-wrap">
                        <img src={percent} alt="100% natural" id="percent-wrapper" />
                        <p id="natural-text">
                            <ul>
                                <li> Natural Sweetner </li>
                                <li> Natural Juices </li>
                                <li> Natural Flavouring </li>
                                <li> Natural Colouring </li>
                                <li> Natural Taste </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="hide-mob" id="leadon-wrapper">
                    <AnchcorLink offset='60' href='#bottleImage'>
                        <p className="natural"> (See our progress below!) </p>
                    </AnchcorLink>
                </div>
                

                <div id="bottle-wrap">
                    <FooterForm />
                    <div id="arrowtext-wrap">
                        <p id="arrow-text"> Natural source of caffine boosted with other minerals to improve brain functions </p>
                        <p id="arrow-text"> Healthier than coffee and speeds up metabolism </p>
                        <p id="arrow-text"> Loaded with antioxidannts </p>
                        </div>
                    <div className="arrows hide-mob">
                        <img src={realArrow} alt="drinks do archery" className="arrowsize" />
                        <img src={realArrow} alt="drinks do archery" className="arrowsize" />
                        <img src={realArrow} alt="drinks do archery" className="arrowsize" />
                    </div>
                    <img src={bottle} alt="apple pear and honey drink - green tea" id="bottleImage" />
                </div>
            </div>


        );
    }
};
