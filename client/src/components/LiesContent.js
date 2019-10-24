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
                <p id="lies-text-Wrapper"> Jerelle suffered with stress and anxiety, mainly because he often done more than he could handle. 
                Playing basketball, studying or maintaining a social life. He used green tea to help maintain his energy, drill his focus and 
                prepare him physically for events throughout his day. It helped so much that Jerelle felt the world needed this solution! </p>
            </div>

            <div className="toggleTxt hide-desk">
            <p id="lies-text-Wrapper"> Jerelle suffered with stress because he often done more than he could handle. 
            Playing basketball, studying or maintaining a social life. He used green tea to help maintain his energy, drill his focus 
            and prepare him physically for events throughout his day. </p>
        </div>
        </div>
        )
    }
};
