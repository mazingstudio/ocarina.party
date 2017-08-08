import React, { Component } from 'react';
import Footer from './components/Footer';
import Pentagram from './components/Pentagram';
import TextBox from './components/TextBox';

import Instrument from './components/audio/Instrument';
import Soundtrack from './components/audio/Soundtrack';
import SoundBank from './components/audio/SoundBank';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pentagram />
        <TextBox />

        <Instrument name="ocarina" />
        <Soundtrack />
        <SoundBank />
        <div id="Link"></div>
        <Footer />
      </div>
    );
  }
}

export default App;
