import React from 'react'
import progbar from '../assets/progressRsz.png';

export default class Footer extends React.Component {
    render() {
        return (
            <div>
            <img src={progbar} alt="progress bar for kickstarter campaign" id="progbar" />                
            </div>
        )
    }
};
