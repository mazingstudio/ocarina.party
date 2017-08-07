import React, {Component} from 'react';
import Sound from './Sound';

export default class SoundBank extends Component {
  render() {

    return (
      <div>
        <Sound fileName="Sound_Correct.wav" id="correct" />
        <Sound fileName="Sound_Error.wav" id="wrong" />
      </div>
    )
  }
}
