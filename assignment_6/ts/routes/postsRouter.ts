import express from "express"
import { JsonPlaceholderClient } from "../client/JsonPlaceholderClient"
import { PostsController } from "../controllers/PostsController"

const postsRouter = express.Router()

const client = new JsonPlaceholderClient()
const postsController = new PostsController(client)

postsRouter.get("/", postsController.getAllPosts.bind(postsController))
postsRouter.get("/:id", postsController.getPostById.bind(postsController))
postsRouter.post("/", postsController.createPost.bind(postsController))
postsRouter.put("/:id", postsController.updatePost.bind(postsController))
postsRouter.delete("/:id", postsController.deletePost.bind(postsController))

export default postsRouter