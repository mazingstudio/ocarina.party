import React, { Component } from 'react';
import './../App.css';

export default class TextBox extends Component {
  render() {
    return (
      <section id="TextBox">
        <p>You played <span id="song-name"></span>!</p>
      </section>
    )
  }
}
