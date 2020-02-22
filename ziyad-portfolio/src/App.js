import React from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
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
        <Contacts />
        <Footer />
      </div>
    );
  }
}

export default App;
