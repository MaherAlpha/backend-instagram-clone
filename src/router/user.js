import { Router } from "express";
import userController from "../controller/user.js";

const userRouter = new Router();
userRouter.get("/users", userController.getAll);
userRouter.get("/user/:id", userController.getSingle);
userRouter.post("/user", userController.create);
userRouter.put("/user/:id", userController.update);
userRouter.delete("/user/:id", userController.delete);
userRouter.get("/user/:id",userController.userOwnedPost);
export default userRouter;
