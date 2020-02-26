import React from 'react';

import '../src/App.css';
import Header from './components/header/Header';
import Aboutme from './components/about/Aboutme';
import Projects from './components/projects/Projects';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
// import Navbar from './components/navbar/Navbar';
// import keyboard from './style/images/keyboard.jpg';
import './App.css';

class App extends React.Component {
  render() {
  
    return (
      <div className='container'>
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
