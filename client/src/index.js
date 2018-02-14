import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App';
import './index.css';
import 'foundation-sites/dist/css/foundation.css'

import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {fideligardApp} from './reducers/combined'

const store = createStore(fideligardApp, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
);
