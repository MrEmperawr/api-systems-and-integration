import * as ProductsCLient from "./ProductsClient";

// Different from js file, can you explain in your own words why?


ProductsCLient.createProduct({ name: "Salt", price: 4000 })
ProductsCLient.createProduct({ name: "Pepper", price: 2000 })

ProductsCLient.getAllProducts()
ProductsCLient.getProductById(1)
ProductsCLient.getProductById(2)

ProductsCLient.updateProduct({ id: 1, name: "Nope", price: 3000 })
ProductsCLient.deleteProduct(2)
ProductsCLient.getAllProducts()

