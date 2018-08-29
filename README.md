# liri-node-app
LIRI Node App is similar to SIRI, but it is a text interpretation and recognition interface.
LIRI does the follwoing:
1. concert-this
   - Execute this by typing "node liri.js concert-this in the command line

2. spotify-this-song - retrieves Spotify information when a song name is typed in.
   - Execute this by typing "node liri.js spotify-this-song song name"

3. movie-this - retrieves detailed movie information whe a movie title is typed.
   - Execute this by typing "node liri.js movie-this movie title"

4. do-what-it-says - LIRI will "read" and excecute text written in the random.txt file.
    - Execute this by typing "node liri.js do-what-it-says"

If you want to clone this repo and run it, you will need to create your own .env file for it to work. The .env file contains the Band in Town and Spotify API information.

A package.JSON file is provided in the repo, but you have install the dependencies (dotenv, node-spotify-api, request and Bandintown)