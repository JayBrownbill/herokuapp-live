import React from 'react';
import Reviews from './Reviews';
import arrow from '../assets/arrowDown.png';
import posed from 'react-pose';
import AnchcorLink from 'react-anchor-link-smooth-scroll';


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
                       <AnchcorLink offset='0' href='#'> <img src={arrow} alt="kickstart design" id="arrow" /> </AnchcorLink>
                    </PosedFloatingObj>
                </div>

                <h1><span> WE SOLD OUT IN JUST TWO WEEKS!  </span></h1>
                <p className="kickstart-content"> Oh yeah! VODO sold 6 months stock in 2 weeks. The next step is to make the drink 100% natural. 
                In order to make the amazing drink with only natural ingredients we need to make it special ingredients and drink specialists 
                that can bring this idea to life. So we need your help to raise £12,500 to get to the next stage.</p>


            </div>

            
        );
    }
};
