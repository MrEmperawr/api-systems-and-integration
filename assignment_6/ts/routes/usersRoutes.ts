import express from "express"
import { JsonPlaceholderClient } from "../client/JsonPlaceholderClient"
import { PostsController } from "../controllers/PostsController"
import { UsersController } from "../controllers/UsersController"

const usersRouter = express.Router()
const usersController = new UsersController()

usersRouter.get("/", usersController.getAllUsers)
usersRouter.get("/:id", usersController.getUserById)
usersRouter.post("/", usersController.createUser)
usersRouter.put("/:id", usersController.updateUser)
usersRouter.delete("/:id", usersController.deleteUser)

export default usersRouter