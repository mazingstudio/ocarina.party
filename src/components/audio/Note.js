import React, { Component } from 'react';

export default class Note extends Component {
  render() {
    return (
      <audio src={"/sounds/" + this.props.instrument + "/" + this.props.note + ".wav"}
             data-key={this.props.dataKey}></audio>
    )
  }
}
