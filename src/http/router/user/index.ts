import { Router } from 'express';
import { createUser, getUserById } from '../../controllers';

const router = Router();

router.get('/user/:id', getUserById);

router.post('/createUser', createUser);

export default router;