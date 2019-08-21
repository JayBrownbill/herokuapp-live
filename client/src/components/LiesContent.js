import React from 'react'
import FloatingObjects from './FloatingObjects'
import Meditation from './Meditation'

export default class LiesContent extends React.Component {
    render() {
        return (
            <div id="truthPane">
            <div id="truthImages">
              <FloatingObjects/>
              <Meditation/>
            </div>

            <div className="toggleTxt">
                <p id="lies-text-Wrapper"> Jerelle suffered with stress and anxiety, because his plate was full with University studies, 
                working towards his dreams of being a professional basketball player and maintaining a social life. 
                He used green tea to help maintain his energy, drill his focus and prepare him physically for events 
                throughout his day. To get the world to reap the same benefits he made sure that the drink tasted 
                amazing but was also still healthy.</p>
            </div>
        </div>
        )
    }
};
