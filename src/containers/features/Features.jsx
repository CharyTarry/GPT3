import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';


const featuresData = [
  {
    title: 'Incremental learning ability',
    text: 'Incremental learning allows a machine learning system to improve its performance over time by updating its model based on new data. This enables the system to continuously adapt to changes in the environment and refine its predictions.',
  },
  {
    title: 'Pattern recognition capacity',
    text: 'Pattern recognition capacity refers to a machine learning system\'s ability to identify patterns and relationships in data, achieved through algorithms that learn to recognize features and structures.',
  },
  {
    title: 'Big data processing flexibility',
    text: 'Big data processing flexibility enables a machine learning system to efficiently handle large and diverse datasets, allowing for more accurate insights and predictions to be generated.',
  },
  {
    title: 'Predictive decision making',
    text: 'Predictive decision making involves using machine learning algorithms to analyze data and make informed decisions based on the predicted outcomes of future events or behaviors.',
  },
];


const Features = () => {
  return (
    <div className="gpt3_features section_padding" id="features">
      <div className="gpt3_features-heading">
        <h1 className="gradient_text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3_features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features