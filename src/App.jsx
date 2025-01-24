import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects'
import Skills from './components/Skills';
import Contact from './components/Contact';
const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  )
}

export default App