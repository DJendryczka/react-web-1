import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/Dator.mp4' autoPlay loop muted playsInline />
      <h1>Välkommen till DiagTech</h1>
      <p>Webb utväckling</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Kontakta oss
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
