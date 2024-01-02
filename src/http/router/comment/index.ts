import { Router } from "express";
import { getCommentsByClaim, postComment } from "../../controllers/comment";
import { authMiddleware } from "../../middlewares";

const router = Router();

router.post('/postComment', authMiddleware, postComment);

router.get('/getCommentsByClaim', authMiddleware, getCommentsByClaim);

export default router;