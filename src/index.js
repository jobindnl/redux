import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { reducer } from './reducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
