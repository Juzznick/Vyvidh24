import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AboutVidya from './components/about.jsx';
import Footer from './components/Footer';
import CollectorMsg from './components/collector.jsx';
import MainEvents from './components/mainevents.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <AboutVidya/>
    <MainEvents/>
    <CollectorMsg/>
    <Footer/>
  </StrictMode>,
)
