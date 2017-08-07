import React, { Component } from 'react';

export default class Note extends Component {
  render() {
    return (
      <div>
        <audio src={"./static/sounds/" + this.props.instrument + "/" + this.props.note + ".wav"}
               data-key={this.props.dataKey}></audio>
      </div>
    )
  }
}
