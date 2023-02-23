import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3_whatgpt3 section_margin" id="wgpt3">
       <div className="gpt3_whatgpt3-feature">
          <Feature title="What is GPT-3" text="The advanced language model uses deep learning techniques to generate text similar to human writing and perform language-related tasks. Its potential applications are diverse due to its impressive 175 billion parameters." />
        </div>
        <div className="gpt3_whatgpt3-heading">
          <h1 className="gradient_text">The possibilities are beyond your imagination</h1>
          <p>Explore the Library</p>
        </div>
        <div className="gpt3_whatgpt3-container">
          <Feature title="Chatbots" text="Chatbots are AI-powered virtual assistants that can interact with humans to answer queries." />
          <Feature title="Knowledgebase" text="Using a knowledgebase can help organizations improve efficiency and provide better customer service and support." />
          <Feature title="Education" text="In today's rapidly changing world, continuous learning and education are essential for personal and professional success." />
        </div>
    </div>
  )
}

export default WhatGPT3