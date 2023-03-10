const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors")

const corsOptions = {
    origin: ["https://the-good-bad-and-last-airbender.vercel.app", "http://localhost:3000"],
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))


const fs = require("fs");
const path = require("path");
const pathToFile = path.resolve("./data.json");

const getMovies = () => JSON.parse(fs.readFileSync(pathToFile));

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Smoke Test")
})

app.get("/movies", (req, res) => {
    const movies = getMovies();
    res.status(200).json(movies);
})

app.get("/findmovie/:youtube", (req, res) => {
    const movies = getMovies();
    const selectedMovie = movies.find(movie => movie.youtube === req.params.youtube);
    res.status(200).json(selectedMovie);
})

app.get("/movies/:genre", (req, res) => {
    const movies = getMovies();
    const moviesByGenre = movies.filter(movie => movie.genres.includes(req.params.genre));
    res.status(200).json(moviesByGenre)
    
})


app.listen(PORT, () => {
    console.log("Server is listening on port:" + PORT)
})

module.exports = app