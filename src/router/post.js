import { Router } from "express";
import postController from "../controller/post.js";

const postRouter = new Router();
postRouter.get("/posts", postController.getAll);
postRouter.get("/post/:id", postController.getSingle);
postRouter.post("/post", postController.create);
postRouter.put("/post/:id", postController.update);
postRouter.delete("/post/:id", postController.delete);
postRouter.post("/post/:id/action",postController.postLikeDislike);
postRouter.post("/post/:id/comment",postController.comment);
export default postRouter;
