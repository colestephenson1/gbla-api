# gbla-api

## The Good, The Bad, and the Last Airbender API
- [This API is used in conjunction with the GBLA Front End](https://github.com/colestephenson1/The-Good-Bad-and-Last-Airbender)

## Setup
- visit https://gbla-api.vercel.app/. The display of "Smoke Test" will inform you the API is up and running.

## Data Model:

- A movie stored on the server has an id, title, director, lead actors, genres, youtube, poster, runtime, release year, rating, and review. Here is a sample movie object:

{
id: 1,
title: "The Lighthouse",
director: "Robert Eggers",
lead_actors: [
"Willem Dafoe",
"Robert Pattinson",
"Valeriia Karaman"
],
genres: [
"Horror",
"Thriller",
"Mystery",
"Drama"
],
youtube: "42_UHhpq530",
poster: "https://m.media-amazon.com/images/I/61zFh8+gdrL.jpg",
runtime: 110,
release_year: 2019,
rating: 9.5,
review: "Easily a top 10 movie that I have ever seen. The black and white emphasizes the dread that overshadows the entire movie and is the perfect touch. The acting from Pattinson and Dafoe is sublime, with Dafoe giving one of the best monologues in cinema history. Watch two men descend into madness as they are overtaken by the solemn embrace of a godforsaken rock."
}


## Endpoints


- Get all movies	https://gbla-api.vercel.app/movies.	GET	N/A All movies on the server: {movies: [{}, {}, ...]}

- Get individual movie	https://gbla-api.vercel.app/findmovie/:youtube.	GET	N/A Individual movie {id: <number>, title: <string>, director: <string>, lead_actors: <array of strings>, genres: <array of strings>, youtube: <string>, poster: <string>, runtime: <number>, release_year: <number>, rating: <number>, review: <string>} see example above for successful response. An example to test with for :youtube is 42_UHhpq530.

- Get all movies in a certain genre https://gbla-api.vercel.app/movies/:genre	GET	N/A	All movies within a chosen genre. An example genre is Action.
