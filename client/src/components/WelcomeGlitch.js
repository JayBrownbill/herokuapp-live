import React from 'react';
import '../stylesheets/App.css';
import posed from 'react-pose';

import WelcomeText from '.'

export default class Welcome extends React.Component {
    render() {
        return (
            <div id="landing-wrap" >
            <WelcomeText/>
            <VodoLogo />
            </div>
        )
    }
    
};
