import React from 'react'


export default class VodoSecText extends React.Component {
    constructor(props) {
        super();
        this.state = {}
    }

    render(props) {
        return (
            <div>
                <p id="vodo-sec">{this.props.content} </p>
            </div>
        )
    }
};
