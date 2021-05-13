"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_1 = require("../controllers/order");
const body_parser_1 = __importDefault(require("body-parser"));
var jsonParser = body_parser_1.default.json();
const router = express_1.Router();
router.route('/')
    .get(order_1.getOrders)
    .post(jsonParser, order_1.postOrder);
router.route('/:id')
    .get(order_1.getOrder)
    .put(jsonParser, order_1.putOrder)
    .delete(order_1.deleteOrder);
exports.default = router;
