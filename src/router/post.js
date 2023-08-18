import { Router } from "express";
import postController from "../controller/post.js";

const postRouter = new Router();
postRouter.get("/posts", postController.getAll);
postRouter.get("/post", postController.getSingle);
postRouter.post("/post", postController.create);
postRouter.put("/post", postController.update);
postRouter.delete("/post", postController.delete);
export default postRouter;
