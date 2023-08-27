import { Router } from "express";
import userController from "../controller/user.js";
import pathAuthenticated from "../middleware/authMiddleware.js";
import pathAuthorization from "../middleware/authRoleMiddleware.js"
import userRole from "../enum/userRole.js";
import userValidator from "../validator/userValidator.js"
const userRouter = new Router();
userRouter.get("/users",pathAuthenticated, pathAuthorization([userRole.ADMIN]), userController.getAll);
userRouter.get("/user/:id", userController.getSingle);
userRouter.post("/user",userValidator.create, userController.create);
userRouter.post("/user/search", userController.searchUsers);
userRouter.post("/user/search-date", userController.searchUserByDate);
userRouter.put("/user/:id",userValidator.update, userController.update);
userRouter.put("/user/:id/:attribute", userController.updateSingle);
userRouter.delete("/user/:id", userController.delete);
userRouter.get("/user/:id",userController.userOwnedPost);

export default userRouter;
//,pathAuthorization[(userRole.ADMIN)]