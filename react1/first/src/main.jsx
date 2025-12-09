import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Display from './assets/Display.jsx'
import Display5 from './assets/display5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <App /> */}
    <Display />
    <Display5 />

  </StrictMode>,
)
