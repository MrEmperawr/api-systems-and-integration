// Do some coding, but with a better code
import express from "express";
import { createFilmsRouter } from "./routes/filmsRouter";
import { createPeopleRouter } from "./routes/peopleRouter";
import { createPlanetsRouter } from "./routes/planetsRouter";

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/people', createPeopleRouter())
app.use('/planets', createPlanetsRouter())
app.use('/films', createFilmsRouter())

app.get('/', (req, res) => {
    res.send("SWAPI integration!")
})

app.listen(8008, () => {
    console.log("http://localhost:8008")
})
