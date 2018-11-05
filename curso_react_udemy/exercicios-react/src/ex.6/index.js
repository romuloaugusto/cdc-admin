import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Member from './ex/member'
import Family from './ex/family'

ReactDOM.render(
 <Family lastName='Silva'>
     <Member name='Priscylla' />
     <Member name='Rômulo' />
 </Family>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

// serviceWorker.unregister();
