import { Router } from 'express';
import { getUsers, getUser, postUser, putUser, deleteUser } from '../controllers/user';
import bodyParser from 'body-parser';

var jsonParser = bodyParser.json();
const router = Router();

router.route('/')
.get(getUsers)
.post(jsonParser, postUser);

router.route('/:id')
.get(getUser)
.put(jsonParser, putUser)
.delete(deleteUser);

export default router;