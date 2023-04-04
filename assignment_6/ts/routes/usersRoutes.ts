import express from "express"
import { JsonPlaceholderClient } from "../client/JsonPlaceholderClient"
import { PostsController } from "../controllers/PostsController"
import { UsersController } from "../controllers/UsersController"

const usersRouter = express.Router()

const client = new JsonPlaceholderClient()
const usersController = new UsersController(client)

usersRouter.get("/", usersController.getAllUsers.bind(usersController)) // This so dumb I can't even... Why are you the way you are TS?
usersRouter.get("/:id", usersController.getUserById.bind(usersController))
usersRouter.post("/", usersController.createUser.bind(usersController))
usersRouter.put("/:id", usersController.updateUser.bind(usersController))
usersRouter.delete("/:id", usersController.deleteUser.bind(usersController))

export default usersRouter