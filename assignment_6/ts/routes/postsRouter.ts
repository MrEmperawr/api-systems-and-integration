import express from "express"
import { JsonPlaceholderClient } from "../client/JsonPlaceholderClient"
import { PostsController } from "../controllers/PostsController"

const postsRouter = express.Router()
const client = new JsonPlaceholderClient()
const postsController = new PostsController(client)

postsRouter.get("/", postsController.getAllPosts)
postsRouter.get("/:id", postsController.getPostById)
postsRouter.post("/", postsController.createPost)
postsRouter.put("/:id", postsController.updatePost)
postsRouter.delete("/:id", postsController.deletePost)

export default postsRouter