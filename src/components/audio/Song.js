import React, { Component } from 'react';

export default class Song extends Component {
  render() {
    function songFileName(songName) { return songName.split(" ").join("_")}
    function songId(songName) {return songName.toLowerCase().split(" ").join("-")}

    return (
      <audio src={"./static/sounds/songs/" + songFileName(this.props.songName) + ".mp3"}
             data-song-name={songId(this.props.songName)}></audio>
    )
  }
}
