import { Router } from "express";
import { createClaim } from "../../controllers";

const router = Router();

router.post('/createClaim', createClaim);

export default router;