import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import First from './first.jsx'
import Display from './display.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />    
    {/* <First />   */}
    <Display/>
  </StrictMode>,
)
