// Import express
import express from "express";
import { books, IBook } from "./books";
// Import cars
import { cars, ICar } from "./cars";
import { createNewId } from "./utils";





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
    const newId = createNewId(true)
    const newCar: ICar = {
        id: newId,
        make: req.body.make,
        model: req.body.model,
    }

    cars.push(newCar)

    res.send(newId.toString())
})

app.get('/books', (req, res) => {
    res.send(books)
})

// Set up car route to fetch only one car by id

app.get('/book/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const book = books.find(c => c.id === id)

    if (book) {
        res.send(book)
    } else {
        res.sendStatus(404)
    }
})

app.post('/books', (req, res) => {
    const newId = createNewId(false)
    const newBook: IBook = {
        id: newId,
        title: req.body.title,
        ISBN: req.body.ISBN,
    }

    books.push(newBook)

    res.send(newId.toString())
})