import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Tabs, Tab } from 'react-bootstrap'


import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducers from './reducers'
import middleware from './middleware'


const store = createStore(Reducers, middleware)


ReactDOM.render(
    <Provider store = {store}>
            <App />
    </Provider>,
    document.getElementById('root'))

