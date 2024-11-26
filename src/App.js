import React from 'react';
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import FooterSec from './components/FooterSec';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <FooterSec></FooterSec>
    </div>
  );
}

export default App;
