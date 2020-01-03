import React from 'react';
import logo from './logo.svg';
import './App.css';

import TopNavbar from './components/topNavbar';
import NavigationMenu from './components/NavigationMenu';
import Slider from './components/slider/Slider';
import Estimation from './components/estimation/Estimation';
import Cennik from './components/cennik/Cennik';

//import ColorPicker from './components/ColorPicker.js'


function App() {
  return (
    <div className="App helvetica">
      <TopNavbar/>
      <NavigationMenu/>
      <Slider />
      <Estimation />
      <Cennik />
      
      <section>lokalizacja</section>
      
      <section>Biuro rzeczoznawcy majątkowego opis</section>
      
      <section>lokalizacja</section>
      
      <footer>footer</footer>
    </div>
  );
}

export default App;
