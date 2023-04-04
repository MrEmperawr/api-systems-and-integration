import express from "express"
import productsRouter from "./routes/productsRouter"


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/products', productsRouter)

app.listen(8008, () => {
    console.log("http://localhost:8008")
})