import { useState } from 'react'
import './Hero.css'


function Hero() {

  return (
    <div className="hero-div">
      <div className="hero-sub-div">
        <img className='hero-vyvidhlogo'  alt="vyvidh_logo"  src="img/eventlogo.png" />
        <h1 className='hero-sub-heading'>techno cultural fest</h1>
        <h1 className='main-heading'>VYVIDH</h1>
        <h2 className='hero-date'>October 4-5</h2>
        <img className='ygear' alt="yellowgear" src='img/ygear.png' />
        <img className='bgear' alt='bluegear' src='img/bgear.png' />
        <img alt='clg_image' className='hero-clg-img' src="img/clg.png"/>
        <div className='curtain'></div>
        <a href='/#'><img className='uparrow' src="img/arrow.png" /></a>
      </div>
    </div>
  );
}

export default Hero;
