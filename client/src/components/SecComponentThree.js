import React from 'react'
import SecTitle from './SecTitle'
import VodoSecText from './VodoSecText'

const howsmade = "VODO is 100% Natural. No artificial flavours or preservatives. All of the ingredients are natural and and no added sugar. We don’t want you to feel guilty for having our drinks. We use real tea extract rather than the green tea flavouring. We want to make sure our product is something you will talk about with pride."

export default class SecComponentThree extends React.Component {
    render() {
        return (

            <div className="text-slide">
                <SecTitle Title="3. HOW IT'S MADE " />
                <VodoSecText content={howsmade} />
            </div>

        );
    }
};
