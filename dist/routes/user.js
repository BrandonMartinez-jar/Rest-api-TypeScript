"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const router = express_1.Router();
router.route('/')
    .get(user_1.getUsers)
    .post(user_1.postUser);
router.route('/:id')
    .get(user_1.getUser)
    .put(user_1.putUser)
    .delete(user_1.deleteUser);
exports.default = router;
