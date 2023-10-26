import { Router } from "express";
import { createClaim, getClaimById, getClaims } from "../../controllers";

const router = Router();

router.post('/createClaim', createClaim);

router.get('/claims', getClaims);

router.get('/claim/:id', getClaimById);

export default router;