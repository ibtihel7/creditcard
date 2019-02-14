import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './card.js'

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA


// const Titre = () => {return <h1 className="titree">CREDIT CARD</h1>
// }

// const Bodycard=() => { return (

// <ul>    

//     <img src="https://static4.depositphotos.com/1003857/292/i/950/depositphotos_2922078-stock-photo-creditcard-chip.jpg"/>

//     <li className="Logo"><img src="https://static4.depositphotos.com/1003857/292/i/950/depositphotos_2922078-stock-photo-creditcard-chip.jpg"/></li>
//     <li className="Cardnumber">7253 3256 7895 1245</li>
//     <li className="Lardserie">5422</li>
//     <li className="Logo"><img src="ttps://www.elektrischvaren-accu.nl/Files/6/88000/88645/FileBrowser/betalingslogo/credit-card-logo.jpg"/></li>

// <li className="Cardholder"><h4>CARDHOLDER</h4></li></ul>)

// }
    
ReactDOM.render(<App/>, document.getElementById('root')) 
serviceWorker.unregister()
