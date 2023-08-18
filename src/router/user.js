import { Router } from "express";
import userController from "../controller/user.js";

const userRouter = new Router();
userRouter.get("/posts", userController.getAll);
userRouter.get("/post", userController.getSingle);
userRouter.post("/post", userController.create);
userRouter.put("/post", userController.update);
userRouter.delete("/post", userController.delete);
export default userRouter;
