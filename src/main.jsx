import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // React StritMode component wraps App.jsx - giving entier application acces ot the React RounterAPI
    <React.StrictMode>
    <BrowserRouter>
    <App />  
    </BrowserRouter>
  </React.StrictMode>,
)
