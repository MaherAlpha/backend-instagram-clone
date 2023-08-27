import { Router } from "express";
import userController from "../controller/user.js";
import pathAuthenticated from "../middleware/authMiddleware.js";
import userRole from "../enum/userRole.js";

const userRouter = new Router();
userRouter.get("/users",pathAuthenticated, userController.getAll);
userRouter.get("/user/:id", userController.getSingle);
userRouter.post("/user", userController.create);
userRouter.post("/user/search", userController.searchUsers);
userRouter.post("/user/search-date", userController.searchUserByDate);
userRouter.put("/user/:id", userController.update);
userRouter.put("/user/:id/:attribute", userController.updateSingle);
userRouter.delete("/user/:id", userController.delete);
userRouter.get("/user/:id",userController.userOwnedPost);

export default userRouter;
//,pathAuthorization[(userRole.ADMIN)]