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
exports.deleteKart = exports.putKart = exports.postKart = exports.getKart = exports.getKarts = void 0;
const db_1 = require("../database/db");
function getKarts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const con = yield db_1.connect();
        const Karts = yield con.query('SELECT * FROM carritos');
        res.status(200).json(Karts[0]);
    });
}
exports.getKarts = getKarts;
function getKart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const con = yield db_1.connect();
        const carrito = con.query('SELECT * FROM carritos WHERE id = ?', [id]);
        return carrito ? res.status(200).json(carrito) : res.status(404).json({ msg: 'no existe el carrito' });
    });
}
exports.getKart = getKart;
function postKart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newKart = req.body;
        const con = yield db_1.connect();
        yield con.query('INSERT INTO carritos SET ?', [newKart]);
        return res.status(200).json({ msg: 'carrito registrado' });
    });
}
exports.postKart = postKart;
function putKart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const updateKart = req.body;
        const con = yield db_1.connect();
        yield con.query('UPDATE ucarrito SET ? WHERE id = ?', [updateKart, id]);
        return res.status(200).json("carrito actualizado");
    });
}
exports.putKart = putKart;
function deleteKart(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const con = yield db_1.connect();
        yield con.query('DELETE FROM carritos WHERE id = ?', [id]);
        return res.status(200).json("carrito eliminado");
    });
}
exports.deleteKart = deleteKart;
