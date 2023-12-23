import { Router } from "express";
import { createClaim, getClaimById, getClaims, getRecentClaims, likeClaim } from "../../controllers";

const router = Router();

router.post('/createClaim', createClaim);

router.put('/likeClaim/:claimId/:userId', likeClaim);

router.get('/claims', getClaims);

router.get('/claim/:id', getClaimById);

router.get('/claims/recent', getRecentClaims);

export default router;