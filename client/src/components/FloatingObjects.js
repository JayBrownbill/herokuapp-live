import React from 'react'
// import posed from 'react-pose'



import FloatingIcon from './FloatingIcon.js'
import ball from '../assets/ballRsz.png'
import tea from '../assets/TeaRsz.png'
import weights from '../assets/WeightRsz.png'
import music from '../assets/NotesRsz.png'
import book from '../assets/BookRsz.png'
// import { easeIn } from '@popmotion/easing';


// const PosedFadeDelay = posed.div({

//     hidden: {
//         opacity: 0,
//     },

//     visible: {
//         opacity: 1,
//         transition: {
//             opacity: { ease: easeIn, duration: 2000 },
//         }
//     }
// })



export default class FloatingObjects extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    state = {isVisible : false };

    ImagePoseLoader(){
        this.setState.isVisible({isVisible : !this.state.isVisible});
    }

    componentDidMount(){
        // this.ImagePoseLoader(); FADE POSED BREAKING NEEDS REWORK
    }

    render() {
        return (
            <div>
                <div id="spinball">
                    <FloatingIcon ImgURL={ball} />
                </div>

                <div id="spintea">
                    <FloatingIcon ImgURL={tea} />
                </div>

                <div id="spinbell">
                    <FloatingIcon ImgURL={weights} />
                </div>

                <div id="spinmusic">
                    <FloatingIcon ImgURL={music} />
                </div>

                <div id="spinbook">
                    <FloatingIcon ImgURL={book} />
                    
                </div>

            </div>
        )
    }
};

