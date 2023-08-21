import { Router } from "express";
import authController from "../controller/auth.js";

const authRouter = new Router();
authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
//authRouter.put("/forgotPassword/:id", authController.forgotPassword);

export default authRouter;
