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
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const db_1 = require("../database/db");
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const con = yield db_1.connect();
        const users = yield con.query('SELECT * FROM usuarios');
        res.status(200).json(users[0]);
    });
}
exports.getUsers = getUsers;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const con = yield db_1.connect();
        const usuario = yield con.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        return usuario ? res.status(200).json(usuario) : res.status(404).json({ msg: 'no existe el usuario' });
    });
}
exports.getUser = getUser;
function postUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = req.body;
        const con = yield db_1.connect();
        yield con.query('INSERT INTO usuarios SET ?', [newUser]);
        return res.status(200).json({ msg: 'usuario registrado' });
    });
}
exports.postUser = postUser;
function putUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const updateUser = req.body;
        const con = yield db_1.connect();
        yield con.query('UPDATE usuarios SET ? WHERE id = ?', [updateUser, id]);
        return res.status(200).json("usuario actualizado");
    });
}
exports.putUser = putUser;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const con = yield db_1.connect();
        yield con.query('DELETE FROM usuarios WHERE id = ?', [id]);
        return res.status(200).json("usuario eliminado");
    });
}
exports.deleteUser = deleteUser;
