import express from 'express'
import booksRouter from './routes/booksRouter'
import carsRouter from './routes/carsRouter'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/books', booksRouter)
app.use('/cars', carsRouter)

app.get('/', (req, res) => {
    res.send("Strapi integration 2")
})

app.listen(8008, () => {
    console.log("http://localhost:8008")
})