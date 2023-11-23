import { Router } from 'express';
import { createUser, getUserById, signInUser } from '../../controllers';
import { authMiddleware } from '../../middlewares';

const router = Router();

router.get('/user/:id', authMiddleware, getUserById);

router.post('/createUser', createUser);

router.post('/signIn', signInUser);

export default router;