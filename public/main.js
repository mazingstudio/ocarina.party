const link = document.getElementById('Link')
let notes = []
const song = ""
const correctSongSound = document.querySelector('audio[data-sound="correct"]')
const wrongSongSound = document.querySelector('audio[data-sound="wrong"]')

function supportMobile() {
  const buttons = document.querySelectorAll("div.button")
  for (var i = 0; i < buttons.length; i++) {
    const button = buttons[i]
    button.addEventListener("click", function() {play(button.dataset.key)})
  }
}
supportMobile()

function play(keyPressed) {
  const audio = document.querySelector(`audio[data-key="${keyPressed}"]`)
  const button = document.querySelector(`div[data-key="${keyPressed}"]`)

  animateButton(button)
  playAudio(audio)
  playSong(keyPressed)
}

function playSong(keyPressed) {
  if (notes.length >= 6) {
    notesData = notes.toString()
    matchSong(notesData)
    notes = []
  } else {
    notes.push(keyPressed)
    if (notes.length >= 6) {playSong(keyPressed)}
  }
}

function playAudio(audio) {
  if (!audio) return
  audio.currentTime = 0
  audio.play()
}

function playMatchedSong(song, name) {
  playAudio(correctSongSound)
  setTimeout(function(){makeLinkPlaySong(song)}, 1000)
  showSongName(name)
}

function makeLinkPlaySong(song) {
  playAudio(song)
  link.classList.add("playingOcarina")
  setTimeout(function(){link.classList.remove("playingOcarina")}, 7000)
}

function showSongName(name) {
  textBox = document.getElementById('TextBox')
  textBox.classList.add("fadeIn")
  if (name.startsWith("Song") || name.startsWith("Inverted")) {
    document.getElementById('song-name').innerHTML = 'the <span style="color:#f20000;">' + name + '</span>'
  } else {
    document.getElementById('song-name').innerHTML = '<span style="color:#f20000;">' + name + '</span>'
  }
  setTimeout(function(){textBox.classList.remove("fadeIn")}, 7000)
}

function animateButton(button) {
  button.classList.add("playing")
  setTimeout(function(){button.classList.remove("playing")}, 600)
}

function matchSong(notesData) {
  switch (notesData) {
    case "119,97,100,119,97,100":
      playMatchedSong(document.querySelector('audio[data-song-name="eponas-song"]'), "Epona's Song")
      break;
    case "115,103,100,115,103,100":
      playMatchedSong(document.querySelector('audio[data-song-name="inverted-song-of-time"]'), "Inverted Song of Time")
      break;
    case "115,100,97,115,100,97":
      playMatchedSong(document.querySelector('audio[data-song-name="sarias-song"]'), "Saria's Song")
      break;
    case "100,100,103,103,115,115":
      playMatchedSong(document.querySelector('audio[data-song-name="song-of-double-time"]'), "Song of Double Time")
      break;
    case "97,100,115,97,100,115":
      playMatchedSong(document.querySelector('audio[data-song-name="song-of-healing"]'), "Song of Healing")
      break;
    case "115,97,119,115,97,119":
      playMatchedSong(document.querySelector('audio[data-song-name="song-of-soaring"]'), "Song of Soaring")
      break;
    case "103,115,119,103,115,119":
      playMatchedSong(document.querySelector('audio[data-song-name="song-of-storms"]'), "Song of Storms")
      break;
    case "100,103,115,100,103,115":
      playMatchedSong(document.querySelector('audio[data-song-name="song-of-time"]'), "Song of Time")
      break;
    case "100,115,119,100,115,119":
      playMatchedSong(document.querySelector('audio[data-song-name="suns-song"]'), "Sun's Song")
      break;
    case "97,119,100,97,119,100":
      playMatchedSong(document.querySelector('audio[data-song-name="zeldas-lullaby"]'), "Zelda's Lullaby")
      break;
    default:
      playAudio(document.querySelector('audio[data-sound="wrong"]'))
  }
}
