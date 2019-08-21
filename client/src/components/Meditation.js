import React from 'react'
import FloatingIcon from './FloatingIcon'
import Jerelle from '../assets/MeditateRsz.png'

export default class Meditation extends React.Component {
    constructor(props){
        super();
    }
    render() {
        return (
            <div id="meditate-focal">
            <FloatingIcon ImgURL={Jerelle}/>            
            </div>
        )
    }
};
