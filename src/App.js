import React from 'react';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
