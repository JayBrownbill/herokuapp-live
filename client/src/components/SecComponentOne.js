import React from 'react'
import SecTitle from './SecTitle'
import VodoSecText from './VodoSecText'


const flavours = "The flavours are what makes the drink really stand out. The drink flavours are not just unique and creative but they are specifically chosen because they need to balance the bitterness of the real green tea extract. We have made a habit of turning negative green tea critics to passionate VODO lovers.";


export default class SecComponentOne extends React.Component {

    render() {
        return (
            <div>
                <SecTitle Title="1. Flavours" />
                <VodoSecText content={flavours} />
            </div>
        );
    }
};



