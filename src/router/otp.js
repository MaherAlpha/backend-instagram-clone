import { Router } from "express";
import otpController from "../controller/otp.js";

const otpRouter = new Router();
otpRouter.post("/otp", otpController.generate);
otpRouter.post("/otp/verify", otpController.verifyOtp);
//authRouter.put("/forgotPassword/:id", authController.forgotPassword);

export default otpRouter;
