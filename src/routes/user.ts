import { Router } from 'express';
import { getUsers, getUser, postUser, putUser, deleteUser } from '../controllers/user';

const router = Router();

router.route('/')
.get(getUsers)
.post(postUser);

router.route('/:id')
.get(getUser)
.put(putUser)
.delete(deleteUser);

export default router;