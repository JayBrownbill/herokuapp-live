import React from 'react'
import FloatingObjects from './FloatingObjects'
import Meditation from './Meditation'

export default class LiesContent extends React.Component {
    render() {
        return (
            <div id="truthPane">
            <div id="lieImages">
              <FloatingObjects/>
              <Meditation/>
            </div>

            <div className="toggleTxt hide-mob">
                <p id="lies-text-Wrapper"> Jerelle suffered with stress and anxiety, because his plate was full with University studies, 
                working towards his dreams of being a professional basketball player and maintaining a social life. 
                He used green tea to help maintain his energy, drill his focus and prepare him physically for events 
                throughout his day. To get the world to reap the same benefits he made sure that the drink tasted 
                amazing but was also still healthy.</p>
            </div>

            <div className="toggleTxt hide-desk">
            <p id="lies-text-Wrapper"> Jerelle's plate was full with University studies, 
            working towards his dreams of being a professional basketball player whilst maintaining his social life. 
            He used green tea to help maintain his energy, drill his focus and prepare him physically. 
            He simply had to share these benefits with the world. </p>
        </div>
        </div>
        )
    }
};
