import { Router } from 'express';
import { getOrders, getOrder, postOrder, putOrder, deleteOrder } from '../controllers/order';
import bodyParser from 'body-parser';

var jsonParser = bodyParser.json();

const router = Router();

router.route('/')
.get(getOrders)
.post(jsonParser, postOrder);

router.route('/:id')
.get( getOrder)
.put(jsonParser, putOrder)
.delete(deleteOrder);



export default router;