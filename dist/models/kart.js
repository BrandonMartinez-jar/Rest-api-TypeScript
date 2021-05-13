"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../database/db"));
const kart = db_1.default.define('carrito', {
    pedido: {
        type: sequelize_1.DataTypes.NUMBER
    },
    producto: {
        type: sequelize_1.DataTypes.NUMBER
    },
    cantidad: {
        type: sequelize_1.DataTypes.NUMBER
    },
    subtotal: {
        type: sequelize_1.DataTypes.NUMBER
    }
});
exports.default = kart;
