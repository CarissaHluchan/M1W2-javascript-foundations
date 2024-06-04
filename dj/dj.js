function createSong(name, artist, favorite) {
  var song = {
    name: name,
    artist: artist,
    favorite: favorite || false,
    hasBeenPlayed: false,
  }
  return song
}

function playSong(song) {
  if(!song.hasBeenPlayed) {
    song.hasBeenPlayed = true;
  }
  return song;
}

function makePlaylist(name, songs) {
  var playlist = {
    name: name,
    songs: songs
  }
  return playlist;
}

function addSongToPlaylist(playlist, song) {
  playlist.songs.push(song);
  return playlist
}

function playSongs(playlist) {
  if (arguments[1]) {
    for (var i = 0; i < playlist.songs.length; i++) {
      if (playlist.songs[i].favorite) {
      playlist.songs[i].hasBeenPlayed = true;
      }
    }
  } else {
    for (var i = 0; i < playlist.songs.length; i++) {
      playlist.songs[i].hasBeenPlayed = true;
    }
  }
  return playlist;
}


module.exports = { 
  createSong, 
  playSong, 
  makePlaylist, 
  addSongToPlaylist, 
  playSongs
};
