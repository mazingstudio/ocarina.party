import React, { Component } from 'react';
import './../App.css';

export default class Button extends Component {
  render() {
    return (
      <div className="button" id={this.props.id} data-key={this.props.dataKey}>
        <kbd>{this.props.keyboard}</kbd>
      </div>
    )
  }
}
