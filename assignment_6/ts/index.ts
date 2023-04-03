
import express from "express";
import postsRouter from "./routes/postsRouter";
import usersRouter from "./routes/usersRoutes";

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/posts', postsRouter)
app.use('/users', usersRouter)

app.get('/', (req, res) => {
    res.send("JsonPlaceholder tutorial!")
})

app.listen(8008, () => {
    console.log("http://localhost:8008")
})
