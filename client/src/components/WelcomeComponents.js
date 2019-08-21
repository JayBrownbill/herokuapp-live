import React from 'react'
import '../stylesheets/App.css';

import VodoLogo from './VodoLogo'
import WelcomeText from './WelcomeText'

export default class WelcomeComponents extends React.Component{
    render(){
        return(
            <div id="landing-wrap" >
            <WelcomeText/>
            <VodoLogo />
            </div>
        )
    }
}
