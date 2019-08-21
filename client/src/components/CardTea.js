import React from 'react'

export default class CardTea extends React.Component {
    render() {
        return (
            <div>
            <div className="flip-card-one" id="card1">
            <div className="flip-card-inner">
                <div className="flip-card-front tea">

                </div>
                <div className="flip-card-back">
                    <h2> The Super <br/> Pouch </h2>
                    <p className="card-txt"> Tired of the protein powders and bars. 
                    Well this protein paste will be your dessert after a great workout. 
                    No mess, no faff just gains. 
                    </p>

                </div>
            </div>
        </div>
</div>
        )
    }
};
