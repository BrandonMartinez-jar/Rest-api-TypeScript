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
exports.deleteOrder = exports.putOrder = exports.postOrder = exports.getOrder = exports.getOrders = void 0;
const db_1 = require("../database/db");
function getOrders(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const con = yield db_1.connect();
        const Orders = yield con.query('SELECT * FROM pedidos');
        res.status(200).json(Orders[0]);
    });
}
exports.getOrders = getOrders;
function getOrder(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const con = yield db_1.connect();
        const pedido = con.query('SELECT * FROM pedidos WHERE id = ?', [id]);
        return pedido ? res.status(200).json(pedido) : res.status(404).json({ msg: 'no existe el pedido' });
    });
}
exports.getOrder = getOrder;
function postOrder(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newOrder = req.body;
        const con = yield db_1.connect();
        yield con.query('INSERT INTO pedidos SET ?', [newOrder]);
        return res.status(200).json({ msg: 'pedido registrado' });
    });
}
exports.postOrder = postOrder;
function putOrder(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const updateOrder = req.body;
        const con = yield db_1.connect();
        yield con.query('UPDATE pedidos SET ? WHERE id = ?', [updateOrder, id]);
        return res.status(200).json("pedido actualizado");
    });
}
exports.putOrder = putOrder;
function deleteOrder(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const con = yield db_1.connect();
        yield con.query('DELETE FROM pedidos WHERE id = ?', [id]);
        return res.status(200).json("pedido eliminado");
    });
}
exports.deleteOrder = deleteOrder;
