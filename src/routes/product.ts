import { Router } from 'express';
import { getProducts, getProduct, postProduct, putProduct, deleteProduct } from '../controllers/product';
import bodyParser from 'body-parser';

var jsonParser = bodyParser.json();

const router = Router();

router.route('/')
.get(getProducts)
.post(jsonParser, postProduct);

router.route('/:id')
.get( getProduct)
.put(jsonParser, putProduct)
.delete(deleteProduct);

export default router;