import React, {Component} from 'react';

export default class Sound extends Component {
  render() {

    return (
      <audio src={"./static/sounds/" + this.props.fileName} data-sound={this.props.Id}></audio>
    )
  }
}
