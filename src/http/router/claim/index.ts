import { Router } from "express";
import { createClaim, getClaimById, getClaims, getRecentClaims, likeClaim } from "../../controllers";
import { authMiddleware } from "../../middlewares";

const router = Router();

router.post('/createClaim', authMiddleware, createClaim);

router.put('/likeClaim/:claimId/:userId', authMiddleware, likeClaim);

router.get('/claims', authMiddleware, getClaims);

router.get('/claim/:id', authMiddleware, getClaimById);

router.get('/claims/recent', authMiddleware, getRecentClaims);

export default router;