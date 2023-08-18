import { Router } from "express";
import postRouter from "./post.js";
import userRouter from "./user.js";

const router = new Router();

router.use(userRouter);
router.use(postRouter);

export default router;
