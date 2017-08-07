import React, { Component } from 'react';
import Song from './Song';

export default class Soundtrack extends Component {
  render() {

    return (
      <div>
        <Song songName="Eponas Song" />
        <Song songName="Inverted Song of Time" />
        <Song songName="Sarias Song" />
        <Song songName="Song of Double Time" />
        <Song songName="Song of Healing" />
        <Song songName="Song of Soaring" />
        <Song songName="Song of Storms" />
        <Song songName="Song of Time" />
        <Song songName="Suns Song" />
        <Song songName="Zeldas Lullaby" />
      </div>
    )
  }
}
