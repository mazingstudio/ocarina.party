import React, { Component } from 'react';
import Footer from './components/Footer';
import Pentagram from './components/Pentagram';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pentagram />
        <Footer />
      </div>
    );
  }
}

export default App;
