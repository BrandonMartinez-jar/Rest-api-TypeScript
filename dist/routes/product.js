"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controllers/product");
const body_parser_1 = __importDefault(require("body-parser"));
var jsonParser = body_parser_1.default.json();
const router = express_1.Router();
router.route('/')
    .get(product_1.getProducts)
    .post(jsonParser, product_1.postProduct);
router.route('/:id')
    .get(product_1.getProduct)
    .put(jsonParser, product_1.putProduct)
    .delete(product_1.deleteProduct);
exports.default = router;
