import React from 'react'
import posed from 'react-pose'
import '../stylesheets/App.css'

import falling from '../assets/PlaceHolder.png'

import logo from '../assets/../assets/VodoNoStrange.png'
import glitchLogo from '../assets/RealmRsz.png'




const PosedLogoDrop = posed.div({

    hidden: {
        opacity: 0
    },

    visible: {
        opacity: 1,
        y: 200,

        transition: {
            opacity: { ease: 'easeIn', duration: 2000 },
            default: { ease: 'easeOut', duration: 2200 },

        }
    },

});

export default class VodoIntro extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    state = { isVibsible: false };
    state = { isOn: false };



    IntroduceImage() {
        setTimeout(() => {
            this.setState({ isVibsible: !this.state.isVibsible });
            this.setState({ isOn: !this.state.isOn });

        }, 800);
    }


    GlicthImage() {
        let tracker = 'vodo';

        setInterval(() => {
            let image = document.getElementById('glitchSrc');
            if (tracker === 'vodo') {
                image.style.backgroundImage = `url(${logo})`;
                // image.style.backgroundColor = "black";
                tracker = 'realm';
                // console.log('GLiTCH');

            } else {
                // image.style.backgroundColor = "#694873";
                image.style.backgroundImage = `url(${glitchLogo})`;
                tracker = 'vodo';
                // console.log('changeBack');
            }
        }, 4);
    }


    GlitchTest() {
        let token = 'base';
        setInterval(() => {
            if (token === 'base') {
                console.log(token);
                token = 'secondary';
                // ?DELAY??
            } else {
                console.log(token);
                token = 'base';
            }
        }, 1000);
    }


    InitializeGlitch() {
        if (!this.state.isOn === true) {
            console.log('glitch state set to true.');
            // document.getElementById('VodoLogo').style.backgroundColor = "#694873";
            this.GlicthImage();
        }
        else {
            console.log('glitch state set to false.');
        }
    }


    componentDidMount() {
        this.IntroduceImage();
        this.InitializeGlitch();
        // this.GlitchTest();    TESTING GLITCH DISPLAY AND PAUSE DURING SET INTERVAL

    }




    render() {
        return (
            <   PosedLogoDrop
                pose={this.state.isVibsible ? 'visible' : 'hidden'}
                id="VodoLogo">
                <img src={falling} alt="logo" id="glitchSrc" />
            </  PosedLogoDrop>
        )
    }
}