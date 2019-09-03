import React from 'react'

export default class SocialIcons extends React.Component {
    constructor(props){
        super();
        this.state={}
    }
    render() {
        return (
            <div>
                <img src={this.props.ImgURL} alt="social icon" className="socialize"/>
            </div>
        )
    }

};
 