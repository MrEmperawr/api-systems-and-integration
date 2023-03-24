const express = require('express')
const exphbs = require('express-handlebars')

// const usersData = require('./data/users.js')
const carsData = require('../js/data/cars.js')

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
    const newCar = {
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
    // TODO: Show all users
    res.send("TODO")
})

app.post('/new-user', async (req, res) => {
    // TODO: Create user
    res.send("TODO")
})

app.get('/users/:id', async (req, res) => {
    // TODO: Show one user
    res.send("TODO")
})

app.post('/users/:id/update', async (req, res) => {
    // TODO: Update user
    res.send("TODO")
})

app.post('/users/:id/delete', async (req, res) => {
    // TODO: Delete user
    res.send("TODO")
})



app.listen(8008, () => {
    console.log("http://localhost:8008/");
})