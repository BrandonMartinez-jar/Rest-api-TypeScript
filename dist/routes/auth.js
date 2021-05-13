"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const auth_1 = require("../controllers/auth");
router.post('/singUp', auth_1.singUp);
router.post('/singIn', auth_1.singIn);
router.get('/profile', auth_1.getProfile);
exports.default = router;
