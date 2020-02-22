import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Aboutme from './components/Aboutme';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Aboutme />
        <Projects style={{'position': 'block'}}/>
        <Footer />
      </div>
    );
  }
}

export default App;
