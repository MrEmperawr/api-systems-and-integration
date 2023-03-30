import express from "express";
const exphbs = require('express-handlebars')

import * as carsData from "./data/cars"
import { ICar } from "./data/cars";
import * as usersData from "./data/users"
import { IUser } from "./data/users";


const app = express()

// Set up handlebars

app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main'
}))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})


/// Cars ///

// Shows a page with all cars
app.get('/cars', async (req, res) => {
    const cars = carsData.getAll()

    res.render('cars-list', { cars })
})

// Saves a new car
app.post('/new-car', async (req, res) => {
    const newCar: ICar = {
        make: req.body.make,
        model: req.body.model
    }

    carsData.add(newCar)

    res.redirect('/cars')
})

// Shows a page with one car
app.get('/cars/:id', async (req, res) => {
    const car = carsData.findById(req.params.id)

    res.render('cars-single', car)
})

// Updates one car
app.post('/cars/:id/update', async (req, res) => {
    carsData.update(req.params.id, {
        make: req.body.make,
        model: req.body.model
    })

    res.redirect('/cars')
})

// Deletes a car
app.post('/cars/:id/delete', async (req, res) => {
    carsData.deleteById(req.params.id)

    res.redirect('/cars')
})


/// Users ///
app.get('/users', async (req, res) => {
    const users = usersData.getAll()
    res.render('users-list', { users })
})

app.post('/new-user', async (req, res) => {
    const newUser: IUser = {
        name: req.body.name,
        description: req.body.description
    }

    usersData.add(newUser)

    res.redirect('/users')
})

app.get('/users/:id', async (req, res) => {
    const user = usersData.findById(req.params.id)

    res.render('user-single', user)
})

app.post('/users/:id/update', async (req, res) => {
    usersData.update(req.params.id, {
        name: req.body.name,
        description: req.body.description
    })

    res.redirect('/users')
})

app.post('/users/:id/delete', async (req, res) => {
    usersData.deleteById(req.params.id)

    res.redirect('/users')
})



app.listen(8008, () => {
    console.log("http://localhost:8008/");
})