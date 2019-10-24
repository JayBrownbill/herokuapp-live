import React from 'react'
import hand from '../assets/handRsz.png'
import fallenCptn from '../assets/fallingRsz.png'
import posed from 'react-pose'


const PosedHandDrop = posed.div({

    hidden: {
        opacity: 0,

    },

    visible: {
        delay: 1500,
        opacity: 1,
        y: 100,



            transition: {
        opacity: { ease: 'easeOut', duration: 7000 },
        default: { ease: 'easeOut', duration: 5300 },
        scale: { ease: 'easeOut', delay: 5000, duration: 5000},


    }
    },

});

const PosedCaptnDrop = posed.div({

    hidden: {
        opacity: 0
    },

    visible: {
        delay: 10,
        opacity: 1,
        y: 570,

        transition: {
            opacity: { ease: 'easeOut', duration: 5000 },
            default: { ease: 'easeOut', duration: 5000 },

        }
    },

});

export default class TruthContent extends React.Component {

    state = { isVisible: false };
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isVisible: !this.state.isVisible });
        }, 6500);
    }

    render() {
        return (
            <div id="truthPane">
                <div id="truthImages">
                    <PosedHandDrop
                        id="vodoHand"
                        pose={this.state.isVisible ? 'visible' : 'hidden'}>
                        <img src={hand} alt="Vodo Gods" /></PosedHandDrop>

                    <PosedCaptnDrop
                        id="fallenCptn"
                        pose={this.state.isVisible ? 'visible' : 'hidden'}>
                        <img src={fallenCptn} alt="Capt Strange" /></PosedCaptnDrop>
                </div>

                <div className="toggleTxt">
                    <p id="truth-text-Wrapper"> Capt. Strange stole the formula from the voodoo gods. 
                    They called the mixture the elixir for dreamers. People drank the potion to help 
                    them keep fighting to reach their dreams. Capt. Strange escaped the realm with the formula 
                    and wants to share it with the world. </p>
                </div>
            </div>
        )
    }
};
