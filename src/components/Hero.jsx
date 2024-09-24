import { useState } from 'react';
import './Hero.css';

function Hero() {
  // State to control the class addition to #curtain
  const [isRevealed, setIsRevealed] = useState(false);

  // Function to toggle the class when the button is clicked
  const handleReveal = () => {
    setIsRevealed(true); // Add the class
  };

  return (
    <div className="hero-div" id="home">
      <div className="hero-sub-div">
        <img className="hero-vyvidhlogo" alt="vyvidh_logo" src="img/eventlogo.png" />
        <h1 className="hero-sub-heading">techno cultural fest</h1>
        <h1 className="main-heading">VYVIDH</h1>
        <h2 className="hero-date">October 4-5 '24</h2>
        <img className="ygear" alt="yellowgear" src="img/ygear.png" />
        <img className="bgear" alt="bluegear" src="img/bgear.png" />
        <img alt="clg_image" className="hero-clg-img" src="img/clg.png" />

        {/* Curtain div, applying 'temp2' class if state is true */}
        <div id="curtain" className={`curtain ${isRevealed ? 'temp2' : ''}`}>
          <button className="reveal-btn" onClick={handleReveal}>
            Reveal
          </button>
        </div>

        <a href="/#">
          <img className="uparrow" src="img/arrow.png" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
