import React from 'react'
import progbar from '../assets/progressRsz.png';

import instagram from '../assets/IGcon.png';
import facebook from '../assets/FBcon.png';
import twitter from '../assets/TwitterCon.png';
import CCLogo from '../assets/CCFooter.png';

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
                </div>

                <div id="funds-height">
                    <h3 id="funds-title"> Only <b>£12,500</b> till the next launch </h3>
                    <img src={progbar} alt="progress bar for kickstarter campaign" id="progbar" />
                </div>

                <div id="footer-right-wrap">
                <p id="regular"> An interactive web application by: </p>

                    <div id="CCLogo-foot">
                        <img src={CCLogo} alt="Creators Corner Copyright"/>
                    </div>
                </div>
            </div>
        )
    }
};
