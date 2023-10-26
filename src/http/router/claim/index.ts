import { Router } from "express";
import { createClaim, getClaimById, getClaims, likeClaim } from "../../controllers";

const router = Router();

router.post('/createClaim', createClaim);

router.post('/likeClaim/:claimId/:userId', likeClaim);

router.get('/claims', getClaims);

router.get('/claim/:id', getClaimById);

export default router;