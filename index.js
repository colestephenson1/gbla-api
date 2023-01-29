const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors")

const corsOptions = {
    origin: ["https://the-good-bad-and-last-airbender.vercel.app", "http://localhost:3000"],
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))


const fs = require("fs")
const path = require("path");
const pathToFile = path.resolve("./data.json")

const getMovies = () => JSON.parse(fs.readFileSync(pathToFile))

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Smoke Test")
})

app.get("/movies", (req, res) => {
    const movies = getMovies()
    res.status(200).json(movies);
})

app.listen(PORT, () => {
    console.log("Server is listening on port:" + PORT)
})

module.exports = app