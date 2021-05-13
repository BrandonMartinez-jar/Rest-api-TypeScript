"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.putProduct = exports.postProduct = exports.getProduct = exports.getProducts = void 0;
const db_1 = require("../database/db");
function getProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const con = yield db_1.connect();
        const products = yield con.query('SELECT * FROM productos');
        res.status(200).json(products[0]);
    });
}
exports.getProducts = getProducts;
function getProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const con = yield db_1.connect();
        const producto = con.query('SELECT * FROM productos WHERE id = ?', [id]);
        return producto ? res.status(200).json(producto) : res.status(404).json({ msg: 'no existe el producto' });
    });
}
exports.getProduct = getProduct;
function postProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newProduct = req.body;
        const con = yield db_1.connect();
        yield con.query('INSERT INTO productos SET ?', [newProduct]);
        return res.status(200).json({ msg: 'producto registrado' });
    });
}
exports.postProduct = postProduct;
function putProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const updateProduct = req.body;
        const con = yield db_1.connect();
        yield con.query('UPDATE productos SET ? WHERE id = ?', [updateProduct, id]);
        return res.status(200).json("producto actualizado");
    });
}
exports.putProduct = putProduct;
function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const con = yield db_1.connect();
        yield con.query('DELETE FROM productos WHERE id = ?', [id]);
        return res.status(200).json("producto eliminado");
    });
}
exports.deleteProduct = deleteProduct;
