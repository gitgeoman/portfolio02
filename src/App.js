import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/topNavbar';
import NavigationMenu from './components/NavigationMenu';

function App() {
  console.log('color');
  return (
    <div className="App helvetica">
      <TopNavbar/>
      <NavigationMenu/>
      <div><figure>slider</figure></div>
      <header>nagłówek</header>
      <section>W czym możemy pomóc 
          <br/> <figure>
                    <article>wycena</article>
                </figure>
                <figure>
                    <article>wycena</article>
                </figure> 
                <figure>
                    <article>wycena</article>
                </figure>
                <figure>
                    <article>wycena</article>
                </figure> 
                <figure>
                    <article>wycena</article>
                </figure>
                <figure>
                    <article>wycena</article>
                </figure> 
                
          <br/> <figure>
                    <article>wycena</article>
                </figure>
                <figure>
                    <article>wycena</article>
                </figure> 
                <figure>
                    <article>wycena</article>
                </figure>
                <figure>
                    <article>wycena</article>
                </figure> 
                <figure>
                    <article>wycena</article>
                </figure>
                <figure>
                    <article>wycena</article>
                </figure>  
      </section>
      <section>
              <article>Cennik</article>
      </section>
      
      <section>lokalizacja</section>
      
      <section>Biuro rzeczoznawcy majątkowego opis</section>
      
      <section>lokalizacja</section>
      
      <footer>footer</footer>
    </div>
  );
}

export default App;
