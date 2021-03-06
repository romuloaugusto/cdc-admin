import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';

import Field from './ex/field'

const reducers = combineReducers({
    field: () => ({value: 'Opa...2'})
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste' />
    </Provider>
, document.getElementById('root'))



