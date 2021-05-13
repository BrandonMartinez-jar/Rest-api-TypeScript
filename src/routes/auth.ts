import { Router } from 'express';
const router: Router = Router();
import bodyParser from 'body-parser';

import {singUp, singIn, getProfile} from '../controllers/auth';

router.post('/singUp', singUp);
router.post('/singIn', singIn);
router.get('/profile', getProfile);

export default router;