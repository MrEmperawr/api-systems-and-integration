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
    // This is a suggested solution for the release date query param
    // Do exactly this for each query parameter you wish to include
    const release_date = req.query.release_date
    // The rating param has a more advanced type than just "string"
    // We therefore explicitly convert to a string
    const rating = req.query.rating?.toString()
    if (release_date) {
        const game = games.find(g => g.release_date === release_date)
        if (game) {
            res.send(game)
        } else {
            res.sendStatus(404)
        }
    } else if (rating) {
        // We parse the rating as it is still a string but we expect it to be an int
        const game = games.find(g => g.rating === parseInt(rating))
        if (game) {
            res.send(game)
        } else {
            res.sendStatus(404)
        }
    } else {
        res.send(games)
    }

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
        rating: req.body.rating
    }

    games.push(newGame)

    res.send(id)
})

// Start the server

app.listen(8008, () => {
    console.log("http://localhost:8008")
})
