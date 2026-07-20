import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// ReactDOM renders the the App component (which is wrapped by the StrictMode component) in the element with the id 'root'.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
