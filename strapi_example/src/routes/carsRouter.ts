import express from "express"
import { CMSClient } from "../clients/cms_client"
import { CarsController } from "../controllers/carsController"

const client = new CMSClient()
const controller = new CarsController(client)

const carsRouter = express.Router()

carsRouter.get('/', controller.getCars.bind(controller))
    .get('/:id', controller.getCar.bind(controller))
    .delete('/:id', controller.deleteCar.bind(controller))

export default carsRouter