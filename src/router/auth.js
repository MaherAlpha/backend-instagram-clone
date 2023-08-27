import { Router } from "express";
import authController from "../controller/auth.js";
import pathAuthorization from "../middleware/authRoleMiddleware.js";
import userRoles from "../enum/userRole.js";

const authRouter = new Router();
authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login, pathAuthorization([userRoles.ADMIN]));
//authRouter.put("/forgotPassword/:id", authController.forgotPassword);

export default authRouter;
