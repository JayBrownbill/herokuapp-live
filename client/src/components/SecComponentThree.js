import React from 'react'
import SecTitle from './SecTitle'
import VodoSecText from './VodoSecText'

const howsmade = "VODO is made with no preservatives and artificial flavours. All the ingredients are natural and no added sugar. We don't want you to feel guilty for having our drinks. We use real green tea extract rather than the green tea flavouring. We want to make sure our product is something you will talk about with pride.";

export default class SecComponentThree extends React.Component{
    render() {
        return (

             <div className = "text-slide">
                    <SecTitle Title="3. How It's Made " />
                    <VodoSecText content={howsmade} />
                </div>

        );
    }
};
