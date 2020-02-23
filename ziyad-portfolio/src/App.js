import React from 'react';

import '../src/App.css';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
// import keyboard from './style/images/keyboard.jpg';
import './App.css';

class App extends React.Component {
  render() {
  
    return (
      <div className="App" style={{'position': 'block'}}>
        <Header />
        <Aboutme />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    );
  }
}

export default App;
