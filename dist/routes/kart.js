"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const kart_1 = require("../controllers/kart");
const body_parser_1 = __importDefault(require("body-parser"));
var jsonParser = body_parser_1.default.json();
const router = express_1.Router();
router.route('/')
    .get(kart_1.getKarts)
    .post(jsonParser, kart_1.postKart);
router.route('/:id')
    .get(kart_1.getKart)
    .put(jsonParser, kart_1.putKart)
    .delete(kart_1.deleteKart);
exports.default = router;
