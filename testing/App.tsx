import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';
import Home from './Home'; 
import { useSpring, animated } from '@react-spring/web';

const App: React.FC = () => {
  return (
    <div className="App">
      <Home />  
    </div>
  );
}

export default App;
