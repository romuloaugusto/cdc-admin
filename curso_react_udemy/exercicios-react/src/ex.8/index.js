import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ClassComponent from './ex/classComponent'

ReactDOM.render(
     <ClassComponent label='Contator' initialValue={10} />
    , document.getElementById('root')
);



