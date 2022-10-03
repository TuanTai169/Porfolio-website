import React from 'react';
import Header from './container/Header';
import About from './container/About';
import Footer from './container/Footer';
import Work from './container/Work';
import Skills from './container/Skills';
import Testimonial from './container/Testimonial';
import Navbar from './components/Navbar';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
