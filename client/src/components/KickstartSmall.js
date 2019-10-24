import React from 'react';
import posed from 'react-pose';
import AnchcorLink from 'react-anchor-link-smooth-scroll';

import Reviews from './Reviews';
import FooterForm from './FooterForm';
import MobileBottle from './MobileBottle';
import MobileRegister from './MobileRegister';


import arrow from '../assets/arrowDown.png';
import phone from '../assets/handFInal.png';
import percent from '../assets/100percRSZ.png';
import bottle from '../assets/choppedBottle.png';
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
                Jerelle (Founder of VODO) wants to share his passion with the<b> world </b>. It’s been a tough journey 
                turning green tea into something strangely nice. Only using natural ingredients and a creative 
                spark, VODO has stolen thousands of hearts.<br/> <br/>
 
               The kickstarter will fund the operation of producing a full VODO run. 
               There will be an early bird pledge where you can get between 20% of VODO, 
               however there will be a limited amount. Sign up to be the first to know when this 
               is available as well as behind the scenes footage, news and other promotions.
</p>

                <Reviews />

                <div id="kickstart-flex" className="kickstart-content">
                    <PosedFloatingObj pose={this.state.floating ? 'visible' : 'hidden'} id="float-anim">
                        <AnchcorLink offset='100' href='#scroll-soldout'>
                            <img src={arrow} alt="kickstart design" id="arrow" className="hide-mob" /> </AnchcorLink>
                    </PosedFloatingObj>
                </div>

                <h1 id="scroll-soldout"><span> WE SOLD OUT IN JUST TWO WEEKS!  </span></h1>
                <p className="kickstart-content">Oh yeah! VODO sold <b>6 months stock in 2 weeks </b>. 
                The next step is to make the drink 100% natural. In order to make the amazing drink 
                with only natural ingredients we need to drink specialists that can bring this idea to 
                life. So we need your help to raise £20,000 to get the next stage.  </p>

                <div id="sellout-wrapper">
                    <a href="https://youtu.be/wY2a40fSuFk">
                        <img className="hide-mob" src={phone} alt="phone reviews" />
                    </a>

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
                        <p className="natural"> (Why VODO?) </p>
                    </AnchcorLink>
                </div>

                <div id="bottle-wrap-mob" className="hide-desk"> <MobileBottle />  </div>
                <div className="hide-desk">
                    <MobileRegister />
                </div>

                <div id="bottle-wrap" className="hide-mob">

                    <div className="hide-mob" id="footreg">
                        <FooterForm />
                    </div>

                    <div id="chopped-wrapper">
                        <img src={bottle} alt="apple pear and honey drink - green tea" id="bottleImage" />
                    </div>

                    <div className="arrows hide-mob">
                        <img src={realArrow} alt="drinks do archery" className="arrowsize" />
                        <img src={realArrow} alt="drinks do archery" className="arrowsize" />
                        <img src={realArrow} alt="drinks do archery" className="arrowsize" />
                    </div>

                    <div id="arrowtext-wrap">
                        <p id="arrow-text"> Natural source of caffine boosted with other minerals to improve brain functions </p>
                        <p id="arrow-text"> Healthier than coffee and speeds up metabolism </p>
                        <p id="arrow-text"> Loaded with antioxidannts </p>
                    </div>


                </div>

            </div>


        );
    }
};
