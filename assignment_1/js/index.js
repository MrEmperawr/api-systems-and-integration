// Imported from node_modules
const express = require('express')

//Imported from this directory - namely the cars.js file
const cars = require('./cars');

function getId() {
    // Get the last item in array
    const lastCar = cars.slice(-1)[0]

    let id = (lastCar?.id)

    return id
}

// Initialize express and set up the root route (start page)

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Cars")
})

// Set up cars route to serve all cars

app.get('/cars', (req, res) => {
    res.send(cars)
})

// Set up car route to fetch only one car by id

app.get('/cars/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const car = cars.find(c => c.id === id)

    // Check if the car exists, if not then send a 404 'Not found' status code
    if (car) {
        res.send(car)
    } else {
        res.sendStatus(404)
    }

    res.send(car)

})

app.post('/cars', (req, res) => {
    const id = getId();

    const newCar = {
        id,
        make: req.body.make,
        model: req.body.model,
    }

    cars.push(newCar)

    res.send(id)
})

// Start the server

app.listen(8008, () => {
    console.log("http://localhost:8008")
})