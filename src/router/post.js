import { Router } from "express";
import postController from "../controller/post.js";
import pathAuthenticated from "../middleware/authMiddleware.js";
import postValidator from "../validator/postValidator.js"
import pathAuthorization from "../middleware/authRoleMiddleware.js";
import userRole from "../enum/userRole.js"
const postRouter = new Router();
postRouter.get("/posts",pathAuthenticated,pathAuthorization([userRole.ADMIN]), postController.getAll);
postRouter.get("/post/:id", postController.getSingle);
postRouter.post("/post",pathAuthenticated,postValidator.create,postController.create);
postRouter.put("/post/:id", postValidator.update ,postController.update);
postRouter.delete("/post/:id", postController.delete);
postRouter.post("/post/:id/action",postController.postLikeDislike);
postRouter.post("/post/:id/comment",postController.comment);
postRouter.post("/post/email",postController.findbyUserEmail)
export default postRouter;
//,pathAuthorization([userRole.ADMIN])