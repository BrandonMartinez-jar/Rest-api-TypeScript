"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../database/db"));
const product = db_1.default.define('producto', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    precio: {
        type: sequelize_1.DataTypes.NUMBER
    },
    img: {
        type: sequelize_1.DataTypes.STRING
    },
    beneficios: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = product;
