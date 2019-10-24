import React from 'react'
import SecTitle from './SecTitle'
import VodoSecText from './VodoSecText'

const greentea = "Green tea is commonly known as a superfood. With the mix of natural caffeine and l-theanine it provides the body with stable energy making you more productive. It also improves the brain health and its functioning"
export default class SecComponentTwo extends React.Component {
    render() {
        return (
            <div className = "text-slide">
            <SecTitle Title="2. GREEN TEA" />
            <VodoSecText content={greentea} />
            </div>
        )
    }
};
