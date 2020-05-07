import React from 'react';

import '../src/App.css';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import './App.css';

class App extends React.Component {
  render() {
  
    return (
      <div className='App'>
        <div>
          <Header />
          <Projects />
          <Contacts />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
