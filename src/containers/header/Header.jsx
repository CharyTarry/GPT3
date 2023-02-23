import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => {
  return (
    <div className='gpt3_header section_padding' id="home">
      <div className="gpt3_header-content">
        <h1 className="gradient_text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
        <p>AI has rapidly grown with applications from self-driving cars to speech recognition. It can learn and improve over time and has potential to revolutionize the way we live and work</p>

        <div className="gpt3_header-content_input">
          <input type="email" placeholder="Email address goes here"/>
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3_header-content_people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className="gpt3_header-image">
        <img src={ai} />
      </div>
    </div>
  )
}

export default Header