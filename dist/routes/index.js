"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = require("../models/server");
const router = express_1.Router();
router.get(('/'), (req, res) => {
    res.json({
        name: server_1.Server.Pkg.name,
        author: server_1.Server.Pkg.author,
        description: server_1.Server.Pkg.description,
        version: server_1.Server.Pkg.version
    });
});
exports.default = router;
