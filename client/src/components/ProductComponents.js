import React from 'react';
import CardFlav from './CardFlav';
import CardTea from './CardTea';
import CardHow from './CardHow';

export default class ProductComponents extends React.Component {

    render() {
        return (
            <div id="product-Wrapper">
            <div id="productInfo">
              <h1> PRODUCT </h1>
              <p> These are some of the products stolen from the voodoo realm. 
              Captain strange has got his hands on the dreamers elixir. 
              He will be making his way back to the realm to steal the other products for you! 
              Get his memo details.  </p>

            <h1><span> Hover To Reveal Our Products </span></h1>

            </div>


            <div id="productCards">
              <div id="cardOne"> <CardFlav /> </div>
              <div id="cardTwo"> <CardTea /> </div>
              <div id="cardThree"> <CardHow /> </div>
            </div>
          </div>
        );
    }
};
