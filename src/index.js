import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import reportWebVitals from './reportWebVitals';

import store from './store'

import App from './App'

import './assets/css/index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app')
)

// reportWebVitals(console.log)
