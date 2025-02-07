import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import configData from './project.config.json'
import { BrowserRouter  } from'react-router-dom'


// Assign configuration to the global window object
window.config = configData;

// Set the document title using the global configuration
document.title = window.config.project.title || 'Default Title';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>,
)
