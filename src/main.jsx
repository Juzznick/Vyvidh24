import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import HomePage from './HomePage.jsx';
import Event from './components/Event.jsx';

import { aiml, civil, cse, ece, eee, mca, me } from './components/Event_details';

import './index.css'

createRoot(document.getElementById('root')).render(
        
        //   <Event data={cse}/>
        <HomePage/>
      
)
