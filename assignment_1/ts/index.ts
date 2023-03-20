// Import express
import express from "express";
// Import cars
import { cars, ICar } from "./cars";

function getId() {
    // Get the last item in array
    const lastCar = cars.slice(-1)[0]

    let id = (lastCar?.id)

    return id
}

function createNewId(): number {
    const newId = getId() + 1;
    return newId;
}



// Initialize express and set up the root route (start page)

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Cars")
})

// Start the server

app.listen(8000, () => {
    console.log("http://localhost:8000")
})

// Set up cars route to serve all cars

app.get('/cars', (req, res) => {
    res.send(cars)
})

// Set up car route to fetch only one car by id

app.get('/cars/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const car = cars.find(c => c.id === id)

    if (car) {
        res.send(car)
    } else {
        res.sendStatus(404)
    }
})

app.post('/cars', (req, res) => {

    const newId = createNewId()
    const newCar: ICar = {
        id: newId,
        make: req.body.make,
        model: req.body.model,
    }

    cars.push(newCar)

    res.send(newId)
})
