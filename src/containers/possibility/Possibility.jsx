import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3_possibility section_padding" id="possibility">
      <div className="gpt3_possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3_possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient_text">The possibilities are <br /> beyond your imagination</h1>
        <p>AI opens up limitless possibilities, from enhancing medical diagnosis to revolutionizing transportation. Its potential is only limited by our imagination and ethical considerations.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility