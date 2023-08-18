import { Router } from "express";
import postController from "../controller/post.js";

const postRouter = new Router();
postRouter.get("/posts", postController.getAll);
postRouter.get("/post/:id", postController.getSingle);
postRouter.post("/post", postController.create);
postRouter.put("/post/:id", postController.update);
postRouter.delete("/post/:id", postController.delete);
export default postRouter;
