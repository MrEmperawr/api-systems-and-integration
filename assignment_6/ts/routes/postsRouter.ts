import express from "express"
import { PostsController } from "../controllers/PostsController"

const postsRouter = express.Router()
const postsController = new PostsController()

postsRouter.get("/", postsController.getAllPosts)
postsRouter.get("/:id", postsController.getPostById)
postsRouter.post("/", postsController.createPost)
postsRouter.put("/:id", postsController.updatePost)
postsRouter.delete("/:id", postsController.deletePost)

export default postsRouter