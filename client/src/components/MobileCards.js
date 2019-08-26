import React from 'react';
import CardFlav from './CardFlav';
import CardTea from './CardTea';
import CardHow from './CardHow';

export default class MobileCards extends React.Component {
    render() {
        return (
            <div className="mob-card-wrapper">
                <div id='mob-card-layout'>
                    <div id="cardOne"> <CardFlav /> </div>
                    <div id="cardTwo"> <CardTea /> </div>
                </div>
                <div className="mob-card-lower">
                    <div id="cardThree"> <CardHow /> </div>
                </div>
            </div>
        )
    }

};
