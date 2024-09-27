import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

import Gallery from './components/gallery.jsx';
import HomePage from './HomePage.jsx';
import Event from './components/Event.jsx';

import { aiml, civil, cse, ece, eee, mca, mech } from './components/Event_details';
import './index.css'
import Navbar from './components/navbar.jsx';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Navbar />
    {/* <Event data={cse}/> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
          <Route path="/cse" element={<Event data={cse}/>} />
          <Route path="/aiml" element={<Event data={aiml}/>} />
          <Route path="/eee" element={<Event data={eee}/>} />
          <Route path="/civil" element={<Event data={civil}/>} />
          <Route path="/mech" element={<Event data={mech}/>} />
          <Route path="/ece" element={<Event data={ece}/>} />
          <Route path="/mca" element={<Event data={mca}/>} />
    </Routes>
    <a href="/#">
      <img className="uparrow" src="img/arrow.png" />
    </a>
  </BrowserRouter>



)
