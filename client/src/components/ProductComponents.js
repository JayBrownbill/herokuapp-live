import React from 'react';
import CardFlav from './CardFlav';
import CardTea from './CardTea';
import CardHow from './CardHow';
import MobileCards from './MobileCards';


export default class ProductComponents extends React.Component {

    render() {
        return (
            <div id="product-Wrapper">
            <div id="productInfo">
              <h1 id = "productHead"> PRODUCT </h1>
              <p id = "product-main-conent"> These are some of the products stolen from the voodoo realm. 
              Captain strange has got his hands on the dreamers elixir. 
              He will be making his way back to the realm to steal the other products for you! 
              Get his memo details.  </p>

            <h1 className="hide-mob"><span> Hover To Reveal Our Products </span></h1>
            <h1 className="hide-desk"><span> Tap To Reveal Our Products! </span></h1>

            </div>

            <div className=" hide-desk">  
            <MobileCards/>
            </div>
            

            <div className="productCards">
              <div className=" hide-mob" id="cardOne"> <CardFlav /> </div>
              <div className=" hide-mob" id="cardTwo"> <CardTea /> </div>
              <div className=" hide-mob" id="cardThree"> <CardHow /> </div>
            </div>

        
          </div>
        
        );
    }
};
