console.log('Liri is starting');
// require("dotenv").keys();
var fs = require('fs');
var Spotify = require('node-spotify-api');
// var spotify = require("spotify");
var keys = require("./keys");
// console.log("This is the key: " + keys);
// var spotify = new spotify(keys.spotify);
// var bandsintown = require('bandsintown')("d41c6f6c526634b17de808543908ada9");
 
// bandsintown
//   .getArtistEventList('Skrillex')
//   .then(function(events) {
//     // return array of events
//     console.log(events);
//   });
var concertIt = function(){
var moment = require("moment");
var bandsintown = require('bandsintown')("d41c6f6c526634b17de808543908ada9");
bandsintown
  .getArtistEventList('Skrillex')
  .then(function(events) {
    for(var i = 0; i< events.length; i++){

var divdider = "\n\n=========================================\n\n"
console.log(events[i].title);
// console.log(events[i].venue.name);
console.log("Name of the venue: " + events[i].venue.name);
console.log("Venue location: " + events[i].venue.place, events[i].venue.city, events[i].venue.region );
console.log("Date of the event: " + moment(events[i].datetime).format("MM/DD/YYYY"));
console.log('====================================================')
}
  });
}
var getArtistName = function(artist){
    return artist.name;
}
var getSpotify = function(songName){
var spotify = new Spotify({
  id: keys.spotifyId,
  secret:keys.spotifySecret
})
spotify.search({ type: 'track', query:songName }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
// console.log(data.tracks.items[0].album.artists); 
var songs = data.tracks.items;
for(var i = 0; i<songs.length; i++){
    console.log(i);
    console.log("Artists: " + songs[i].artists.map(getArtistName));
    console.log("Song name: " + songs[i].name);
    console.log("Preview song: " + songs[i].preview_url);
    console.log("Album: " + songs[i].album.name);
    console.log("=================================================");
    }
});
}
var request = require("request");
var getMovie = function(movieQuery){
  request("http://www.omdbapi.com/?t=" + movieQuery + "&y=&plot=short&apikey=trilogy", function (error, response, body) {
        console.log(error + response.statusCode);
        // If there were no errors and the response code was 200 (i.e. the request was successful)...
        if (!error && response.statusCode === 200) {
            // console.log("body: ", body);
            var jsonData = JSON.parse(body);
            // Then we print out the following information
            console.log("* Title of the movie: " + jsonData.Title);
            console.log("* Year the movie come out: " + jsonData.Year);
            console.log("* IMDB Rating of movie: " + jsonData.imdbRating);
            console.log("Rotten tomatoes rating: " + jsonData.tomatoRating);
            console.log("+ Country where the movie was produced:" + jsonData.Country);
            console.log("+ Language of the movie: " + jsonData.Language);
            console.log("+ Plot of the movie: " + jsonData.Plot);
            console.log("+ Actors in the movie: " + jsonData.Actors);
            console.log("=================================================");
        }
    })
}  
var doWhatItSays = function(){
  var fs = require("fs");
  fs.readFile('random.txt', 'utf8', function(error, data){
    if (error){
      return console.log(error);
      var dataArr = data.split(', ');

      if(dataArr.length == 2){
        choice(dataArr[0], dataArr[1]);
      }else if (dataArr.length == 1){
        choice(dataArr[0]);
      }
    }
  })
}
// getSpotify();
var choice = function(caseData, functionData){
    switch(caseData){
        case 'concert-this':
            concertIt(functionData);
            break;
        case 'spotify-this-song':
            getSpotify(functionData);
            break;
        case 'movie-this':
            getMovie(functionData);
            break;
        case 'do-what-it-says':
            doWhatItSays();
            break;
        default:
        console.log('LIRI does not know that');
    }
}
var runThis = function(argTwo, argThree){
    choice(argTwo, argThree);
};
runThis(process.argv[2], process.argv[3]);