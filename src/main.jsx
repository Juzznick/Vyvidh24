import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import Gallery from './components/gallery.jsx';
import HomePage from './HomePage.jsx';


import './index.css'
import Navbar from './components/navbar.jsx';

createRoot(document.getElementById('root')).render(
        
         <BrowserRouter>
         <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
        </Routes>
        <a href="/#">
          <img className="uparrow" src="img/arrow.png" />
        </a>
    </BrowserRouter>
      
)
