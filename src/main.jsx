import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import About from './about.jsx'
import Footer from './components/Footer';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Footer/>
  </StrictMode>,
)
