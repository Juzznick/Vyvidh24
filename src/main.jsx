import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import Gallery from './components/gallery.jsx';
import HomePage from './HomePage.jsx';


import './index.css'

createRoot(document.getElementById('root')).render(
        
         <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
    </BrowserRouter>
      
)
