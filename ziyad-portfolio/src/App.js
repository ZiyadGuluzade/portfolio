import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Aboutme />
        <Projects style={{'position': 'block'}}/>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
