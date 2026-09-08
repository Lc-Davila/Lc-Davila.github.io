import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles.css' // Importando o CSS global puro

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)