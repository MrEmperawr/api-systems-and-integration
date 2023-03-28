// Imported from node_modules
const express = require('express')

//Import 'fs' in order to read the games.json file
const { readFileSync } = require('fs');
//Parse the games.json file (try console-logging readFileSync('./games.json') without the parsing and see the difference)
const gamesJson = JSON.parse(readFileSync('./games.json'));

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
    res.send(games)
})

// Set up game route to fetch only one game by id

app.get('/games/:id', (req, res) => {
    const id = parseInte(req.params.title)

    const game = games.find(g => g.id === id)

    // Check if the game exists, if not then send a 404 'Not found' status code
    if (game) {
        res.send(game)
    } else {
        res.sendStatus(404)
    }

    res.send(game)

})

app.post('/games', (req, res) => {
    const id = getId();

    const newGame = {
        id,
        make: req.body.make,
        model: req.body.model,
    }

    games.push(newGame)

    res.send(id)
})

// Start the server

app.listen(8008, () => {
    console.log("http://localhost:8008")
})