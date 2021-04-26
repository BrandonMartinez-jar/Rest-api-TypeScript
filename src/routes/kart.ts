import { Router } from 'express';
import { getKarts, getKart, postKart, putKart, deleteKart } from '../controllers/kart';
import bodyParser from 'body-parser';

var jsonParser = bodyParser.json();

const router = Router();

router.route('/')
.get(getKarts)
.post(jsonParser, postKart);

router.route('/:id')
.get( getKart)
.put(jsonParser, putKart)
.delete(deleteKart);

export default router;