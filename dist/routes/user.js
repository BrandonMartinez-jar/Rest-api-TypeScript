"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const body_parser_1 = __importDefault(require("body-parser"));
var jsonParser = body_parser_1.default.json();
const router = express_1.Router();
router.route('/')
    .get(user_1.getUsers)
    .post(jsonParser, user_1.postUser);
router.route('/:id')
    .get(user_1.getUser)
    .put(jsonParser, user_1.putUser)
    .delete(user_1.deleteUser);
exports.default = router;
