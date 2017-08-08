import React, {Component} from 'react';
import Sound from './Sound';

export default class SoundBank extends Component {
  render() {

    return (
      <div>
        <Sound fileName="Song_Correct.wav" id="correct" />
        <Sound fileName="Song_Error.wav" id="wrong" />
      </div>
    )
  }
}
