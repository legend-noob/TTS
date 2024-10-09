import React from 'react';
import { FaCloud, FaLock, FaDatabase, FaClock } from 'react-icons/fa';
import './Features.css';

const featuresData = [
  { icon: <FaCloud />, title: "Search Data", description: "Easily search your data in a highly efficient way." },
  { icon: <FaClock />, title: "24 Hour Access", description: "Access your data anytime, anywhere." },
  { icon: <FaDatabase />, title: "Print Out", description: "Easily print out all your stored information." },
  { icon: <FaLock />, title: "Security Code", description: "Top-notch security to protect your data." },
];

const Features: React.FC = () => {
  return (
    <section className="features" id="features">
      <h2>Features</h2>
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
