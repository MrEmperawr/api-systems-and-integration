// Import express
import express from "express";
// Import game model
import { IGame } from "./models";

const { readFileSync } = require('fs');
const gamesJson = JSON.parse(readFileSync('./games.json'));

const games = gamesJson['games'] as IGame[]

function getId() {
    // Get the last item in array
    const lastGame = games.slice(-1)[0]

    let id = (lastGame?.id)

    return id
}

// Initialize express and set up the root route (start page)

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Games")
})

// Set up games route to serve all games

app.get('/games', (req, res) => {
    // Check for query parameters here with an if-statement
    // If no match is found return a 404 inside the if statement
    // If no query params are present, make sure to send all games as the endpoint is doing right now
    res.send(games)

})

// Set up game route to fetch only one game by id

app.get('/games/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log(id)

    const game = games.find(g => g.id === id)

    if (game) {
        res.send(game)
    } else {
        res.sendStatus(404)
    }
})



app.post('/games', (req, res) => {
    const id = getId();

    const newGame: IGame = {
        title: req.body.title,
        release_date: req.body.release_date,
    }

    games.push(newGame)

    res.send(id)
})

// Start the server

app.listen(8008, () => {
    console.log("http://localhost:8008")
})
