import express from "express"
import { ProductsController } from "../controller/controller"
import DatabaseService from "../services/databaseService"


const productsRouter = express.Router()
const db = new DatabaseService()
const productsController = new ProductsController(db)


productsRouter.get("/", productsController.getAllProducts.bind(productsController))
productsRouter.get("/:id", productsController.getProductById.bind(productsController))
productsRouter.post("/", productsController.createProduct.bind(productsController))
productsRouter.put("/:id", productsController.updateProduct.bind(productsController))
productsRouter.delete("/:id", productsController.deleteProduct.bind(productsController))

export default productsRouter