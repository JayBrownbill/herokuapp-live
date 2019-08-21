import React from 'react'
import SecTitle from './SecTitle'
import VodoSecText from './VodoSecText'

const greentea = "Green tea is commonly known as a superfood. Which is why the VOODOO gods love it. Studies have shown that it improves the brain's functions by improving your mood, memory and reaction time. Green tea, so improves the body's physical performance and can assist with fat burning.";

export default class SecComponentTwo extends React.Component {
    render() {
        return (
            <div>
            <SecTitle Title="2. Green Tea" />
            <VodoSecText content={greentea} />
            </div>
        )
    }
};
