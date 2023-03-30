const express = require('express')
const products = require('./products')

const app = express()

app.use(express.json())

function getId(list) {
    const lastItem = list.slice(-1)[0] // Get last item

    let id = (lastItem?.id)
    id = id ? id + 1 : 1;

    return id;

}

// Get products

app.get('/products', (req, res) => {
    res.send(products)
})

app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const product = products.find(p => p.id === id)
    res.send(product)
})

// New product

app.post('/products', (req, res) => {
    const newProduct = {
        id: getId(products),
        name: req.body.name,
        price: parseInt(req.body.price),
    }

    products.push(newProduct)

    res.send(201)
})

app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const product = products.find(p => p.id === id)

    product.name = req.body.name
    produce.price = parseInt(req.body.price)

    res.sendStatus(200)
})

app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const index = products.findIndex(p => p.id === id)

    products.splice(index, 1)

    res.sendStatus(200)
})



app.listen(8008, () => {
    console.log("http://localhost:8008")
})