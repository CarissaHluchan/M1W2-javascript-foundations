function createCollection(name, discription) {
  var chillHits = {
    name: name,
    description: discription,
    tracks: [],
  }
  return chillHits;
}

function createTrack(title, artist, duration) {
  var track = {
    title: title || 'unknown',
    duration: duration || 0,
    artist: artist || 'unknown',
  }
  return track;
}

function reviewTrack(track) {
  if (track.artist === 'Red Hot Chili Peppers') {
    return `The song ${track.title} rules!`
  }
  return `I wish this was a Red Hot Chili Peppers song.`
}

function addTrack(chillHits, track) {
  chillHits.tracks.push(track);
  return chillHits;
}

function getTotalDuration(chillHits) {
  var totalDuration = 0
  for (var i = 0; i < chillHits.tracks.length; i ++) {
    totalDuration += chillHits.tracks[i].duration
  }
  return totalDuration;
}

function findTracksByArtist(chillHits, artist) {
  var tracksByArtist = [];
  for (var i = 0; i < chillHits.tracks.length; i ++) {
    if (chillHits.tracks[i].artist === artist) {
      tracksByArtist.push(chillHits.tracks[i])
    }
  }
  return tracksByArtist;
}

  module.exports = { 
    createCollection,
    createTrack,
    reviewTrack,
    addTrack,
    getTotalDuration,
    findTracksByArtist,
   }