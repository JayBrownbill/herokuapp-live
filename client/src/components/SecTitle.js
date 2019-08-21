import React from 'react'


export default class SecTitle extends React.Component {

    constructor(props) {
        super();

    }
    
    render() {
        return (
            <div>
            <h1 id="vodo-sec-title"> <span> {this.props.Title} </span> </h1>
            </div>
        )
    }
};
