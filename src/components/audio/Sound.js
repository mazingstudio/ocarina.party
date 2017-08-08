import React, {Component} from 'react';

export default class Sound extends Component {
  render() {

    return (
      <audio src={"/sounds/" + this.props.fileName} data-sound={this.props.id}></audio>
    )
  }
}
