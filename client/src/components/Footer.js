import React from 'react'
import progbar from '../assets/progressRsz.png';

import instagram from '../assets/IGcon.png';
import facebook from '../assets/FBcon.png';
import twitter from '../assets/TwitterCon.png';

import cclogonew from '../assets/cc-latest.png';

import SocialIcon from '../components/SocialIcon';

export default class Footer extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div id="foot-wrapper">
                <div id="footer-left-wrap">
                    <div id="socialicon-wrap">
                        <SocialIcon ImgURL={facebook} />
                        <SocialIcon ImgURL={instagram} />
                        <SocialIcon ImgURL={twitter} />
                    </div>

                    <p id="footer-content-socials"> Follow our socials <br /> or email us at: shout@vodo.info  </p>
                    <p className="hide-desk" id="footer-min-cc"> An interactive web application by Creators Corner LTD </p>

                </div>

                <div className="hide-mob" id="funds-height">
                    <h3 id="funds-title"> Only <b>£20,000</b> till the next launch </h3>
                    <img src={progbar} alt="progress bar for kickstarter campaign" id="progbar" />
                </div>



                <div className="hide-mob" id="footer-right-wrap">
                    <p className="hide-mob" id="regular"> An interactive web application by: </p>

                    <div id="CCLogo-foot">
                        <img src={cclogonew} alt="Creators Corner Copyright" className="hide-mob" />
                    </div>
                </div>
            </div>
        )
    }
};
