import React from 'react'

import bottle from '../assets/choppedBottle.png';


export default class MobileBottle extends React.Component {
    render() {
        return (
            <div id="footer-bottle-wrap">
                <div id="bottlemob-wrap">
                    <img src={bottle} alt="green tea bottle" id="bottlemob" />
                </div>
            </div>
        );
    }
};
