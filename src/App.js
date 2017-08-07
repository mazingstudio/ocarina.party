import React, { Component } from 'react';
import Footer from './components/Footer';
import Pentagram from './components/Pentagram';
import TextBox from './components/TextBox';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pentagram />
        <TextBox />
        <Footer />
      </div>
    );
  }
}

export default App;
