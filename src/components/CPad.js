import React, { Component } from 'react';
import Button from './Button';
import './../App.css';

export default class CPad extends Component {
  render() {
    return (
      <div id="c-pad">
        <Button keyboard="W" id="up" dataKey="119" />
        <Button keyboard="A" id="left" dataKey="97" />
        <Button keyboard="S" id="down" dataKey="115" />
        <Button keyboard="D" id="right" dataKey="100" />
      </div>
    )
  }
}
