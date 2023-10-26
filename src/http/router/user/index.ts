import { Router } from 'express';
import { createUser } from '../../controllers';

const router = Router();

router.post('/createUser', createUser);

export default router;