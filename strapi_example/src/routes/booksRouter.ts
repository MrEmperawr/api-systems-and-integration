import express from "express"
import { CMSClient } from "../clients/cms_client";
import { BooksController } from "../controllers/booksController";

const client = new CMSClient()
const controller = new BooksController(client)

const booksRouter = express.Router()

booksRouter.get('/', controller.getBooks.bind(controller))
    .get('/:id', controller.getBook.bind(controller))
    .delete('/:id', controller.deleteBook.bind(controller))

export default booksRouter;