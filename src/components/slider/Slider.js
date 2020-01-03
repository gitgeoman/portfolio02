import React, { Component } from 'react';
import './slider.css';

class Slider extends Component{
  render(){
    return(
      <div className="bg-yellow flex justify-center">

        <div id='ramkaObrazek'>
          <img src="https://static.polityka.pl/_resource/res/path/0a/89/0a89ee8b-852c-4c15-8327-ae3972865627_830x830" alt="house"/>
          <div id='podpisObrazka'>Przykład wycenianej nieruchomości</div>
          
        </div>
      </div>
      

    );
  }

};
export default Slider;


