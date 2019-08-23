import React from 'react';
import Reviews from './Reviews';

export default class KickstartIntro extends React.Component {
    render() {
        return (
            <div id="kick-sec">
                <h1> <span> Kickstarter Campaign <b>#JoinTheRealm.</b> </span> </h1>
                <p> Selling out was all we needed, now we have the confidence in our consumer base to scale this business larger. 
                    We haven't been able to deal with the demand and we are still struggling. 
                    This is why we have decided to Kickstart our business.<br/><br/>
                    We are looking to raise £20k to manufacture more drinks. <b> That is it.</b> All we want to do is supply you with all the <b> VODO </b> you want!
                    <br/> <h1>Scroll to find out more details </h1></p>


          <Reviews/>

          <h1><span> SOLD OUT IN TWO WEEKS  </span></h1>


            </div>
            
        );
    }
};
