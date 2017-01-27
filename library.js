const library = require('./library.json')
const _ = require('lodash')

// const names = library
//   .filter((track) => track.Year === 2016 && track.Artist === "Scandal")
//   .map((track) => track.Name)

// const artist = _.map(library, (track) => track.Artist)
//Lodash
const artist = _(library)
  .groupBy((track) => track.Album)
  .map((tracks, name) => {
    return {
      Album: name,
      Artists: _(tracks).map((track) => track.Artist).uniq().value()
    }
  })
  .value()

console.log(artist)

//นักร้องแต่ละคนร้องเพลงเฉลี่ย ใช้เวลาเท่าไหร่
const result = _(library)
  .groupBy('Artist')
  .map((tracks, artist) => {
    return {
      artist,
      avg: _(tracks).map((track) => track['Total Time']).mean()
    }
  })
  .value()

console.log(result);
