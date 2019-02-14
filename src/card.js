import React from 'react';
import {Icon} from 'antd'
import ReactDOM from 'react-dom';
// import './index.css';
import './index.css';



// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA



const Card=() => { return <div className="carte">
     <h1 className="Titree">CREDIT CARD</h1>

    <ul>    
  
    <li className="Logo"><img src="https://static4.depositphotos.com/1003857/292/i/950/depositphotos_2922078-stock-photo-creditcard-chip.jpg"  width="8%" /></li>
    <li className="Cardnumber"><h2>7253 3256 7895 1245</h2></li>

    <li>
        <div className="visaa">
           <p className="Cardserie"><h3>5422</h3></p>

           <ul className="visa">
                    <li>
                   
                        <h6>VALID<br/>THRU</h6></li>
                        <li ><Icon  type="caret-right" /></li>
                       <li> <h6>MONTH/YEAR<br/><span>11/50</span></h6> </li>
                    
            </ul>
          
            <div className="Logomaster"><img src="https://www.elektrischvaren-accu.nl/Files/6/88000/88645/FileBrowser/betalingslogo/credit-card-logo.jpg" width="65%"  /></div>


        </div>
    </li>
    <li className="Cardholder"><h3>CARDHOLDER</h3></li>
    </ul>
    </div>
}
    
export default Card 
