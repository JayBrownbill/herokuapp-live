import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default class DeskNav extends React.Component {
    
    render() {
        return (
            <div> 
                <ul id = "desk-navbar">
                <li><AnchorLink offset='200' href='#landing-wrap'> HOME </AnchorLink></li>
                <li><AnchorLink offset='55' href='#product-Wrapper'> PRODUCT </AnchorLink></li>
                <li><AnchorLink offset='0' href='#finalStarter'> KICKSTART </AnchorLink></li>

                </ul>
            </div>
        )
    }
};
