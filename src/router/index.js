import { Router } from "express";
import postRouter from "./post.js";
import userRouter from "./user.js";
import authRouter from "./auth.js";

const router = new Router();

router.use(authRouter);
router.use(userRouter);
router.use(postRouter);


export default router;
