import React from 'react'
import '../stylesheets/App.css'
import posed from 'react-pose'
// import welcomeImg from '../assets/WelcomeTxtImg.png'



const PosedTextDrop = posed.div({

    hidden: {
        opacity: 0
    },

    visible: {
        delay: 900,
        opacity: 1,
        y: 200,

        transition: {
            opacity: { ease: 'easeOut', duration: 3000 },
            default: { ease: 'easeOut', duration: 2000 },

    // <img src = {welcomeImg} alt = "welcome to the realm"/> DISCONTINUED IMG TITLE


        }
    },

});

export default class WelcomeText extends React.Component {

    state = { isVibsible: false };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isVibsible: !this.state.isVibsible });
        }, 1200);
    }




    render() {
        return (
            <   PosedTextDrop
                pose={this.state.isVibsible ? 'visible' : 'hidden'}
                id="VodoTitle">
                <h1 id="vodo-head">  WELCOME TO <h2 id="easterEGG1"> @caitcreates_</h2> </h1>
            </  PosedTextDrop>
        )
    }
}


