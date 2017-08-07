import React, { Component } from 'react';
import Note from './Note';

export default class Instrument extends Component {
  render() {
    return (
      <div>
        <Note instrument={this.props.name} note="D" dataKey="119" />
        <Note instrument={this.props.name} note="F" dataKey="97" />
        <Note instrument={this.props.name} note="A" dataKey="115" />
        <Note instrument={this.props.name} note="B" dataKey="100" />
        <Note instrument={this.props.name} note="D2" dataKey="103" />
      </div>
    )
  }
}
