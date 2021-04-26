"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../database/db"));
const order = db_1.default.define('pedido', {
    direccion: {
        type: sequelize_1.DataTypes.STRING
    },
    telefono: {
        type: sequelize_1.DataTypes.STRING
    },
    usuario: {
        type: sequelize_1.DataTypes.NUMBER
    }
});
exports.default = order;
