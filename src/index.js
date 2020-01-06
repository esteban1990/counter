import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Counter from './componentes/counter';


import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

 // Add js files
 import 'jquery';
 import 'popper.js';
 import 'bootstrap';


 let counter = 0;

 setInterval(function () {
 
     const four = Math.floor(counter / 1000);
     const three = Math.floor(counter / 100);
     const two = Math.floor(counter / 10);
     const one = Math.floor(counter / 1);
     console.log(four, three, two, one);
     
     ReactDOM.render(<Counter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />, document.getElementById('root'));
     counter++;
 }, 1000);
 

 



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
