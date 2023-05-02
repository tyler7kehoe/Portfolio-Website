import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route } from 'react-router-dom';
import App from './App'
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
