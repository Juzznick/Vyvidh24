import { useState } from 'react'
import './App.css'


function App() {

  return (
    <div className="hero-div">
      <div className="hero-sub-div">
        <img className='hero-vyvidhlogo'  alt="vyvidh_logo"  src="img/eventlogo.png" />
        <h1 className='hero-sub-heading'>techno cultural fest</h1>
        <h1 className='main-heading'>VYVIDH</h1>
        <img className='ygear' alt="yellowgear" src='img/ygear.png' />
        <img className='bgear' alt='bluegear' src='img/bgear.png' />
        <img alt='clg_image' className='hero-clg-img' src="img/clg.png"/>
        <div className='curtain'></div>
      </div>
    </div>
  );
}

export default App
