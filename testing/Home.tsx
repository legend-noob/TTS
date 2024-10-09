import React from 'react';
import Navbar from './Navbar';
import Features from './Features';
import Testimonials from './Testimonials';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Navbar />
      <section className="hero-section">
        <div className="hero-text">
          <h1>Save your data storage here.</h1>
          <p>Data is stored in a secure cloud storage. Access anytime and anywhere.</p>
          <button className="cta-button">Learn More</button>
        </div>
        <div className="hero-image">
          {/* Add an image or illustration */}
        </div>
      </section>
      <Features />
      <Testimonials />
      <footer className="footer">
        <p>© DataWarehouse Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
