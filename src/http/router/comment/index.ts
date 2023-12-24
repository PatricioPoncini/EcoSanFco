import { Router } from "express";
import { getCommentsByClaim, postComment } from "../../controllers/comment";

const router = Router();

router.post('/postComment', postComment);

router.get('/getCommentsByClaim', getCommentsByClaim);

export default router;