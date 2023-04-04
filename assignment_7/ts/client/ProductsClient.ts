const axios = require('axios').default

const BASE_URL = "http://localhost:8008"

// Get all products

export const getProducts = async function () {
    const response = await axios.get(BASE_URL + '/products') // String concatenation for complete URL

    const products = response.data

    console.log(products)

}