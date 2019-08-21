import React from 'react'
import { Component } from 'react'


export default class ToggleDetails extends Component  {
    render(){
        return(
            <div>
            {this.props.TruthTitle}
            {this.props.LieTitle}
            </div>
        )
    }
};
