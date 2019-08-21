import React from 'react'
import posed from 'react-pose'



const PosedFloatingObj = posed.div({

    visible: {
        opacity: 1,
        y: -6,
        x: 1.5,
        transition:{
            duration: 900,
            ease: 'linear',
            flip: Infinity,
        }
    }
})

export default class FloatingIcon extends React.Component {

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
            <PosedFloatingObj
                pose={this.state.floating ? 'visible' : 'hidden'}
                id="float-anim">

                <img src={this.props.ImgURL} alt="floatingObjs" />
            </PosedFloatingObj>
        )
    }
};
