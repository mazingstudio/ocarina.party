import React, { Component } from 'react';
import CPad from './CPad';
import Button from './Button';
import './../App.css';

export default class Pentagram extends Component {
  render() {
    return (
      <section id="Pentagram">
        <div id="clef"></div>
        <CPad />
        <Button keyboard="G" id="a" dataKey="103" />
      </section>
    )
  }
}
