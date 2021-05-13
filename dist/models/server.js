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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../routes/index"));
const user_1 = __importDefault(require("../routes/user"));
const kart_1 = __importDefault(require("../routes/kart"));
const product_1 = __importDefault(require("../routes/product"));
const order_1 = __importDefault(require("../routes/order"));
const auth_1 = __importDefault(require("../routes/auth"));
const morgan_1 = __importDefault(require("morgan"));
const pkg = require('../../package.json');
class Server {
    constructor(port) {
        this.port = port;
        this.ApiPaths = {
            home: '/api',
            users: '/api/users',
            products: '/api/products',
            orders: '/api/orders',
            karts: '/api/karts',
            auth: '/api/auth'
        };
        this.app = express_1.default();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000);
        this.app.set('pkg', pkg);
    }
    routes() {
        this.app.use(this.ApiPaths.home, index_1.default);
        this.app.use(this.ApiPaths.users, user_1.default);
        this.app.use(this.ApiPaths.products, product_1.default);
        this.app.use(this.ApiPaths.orders, order_1.default);
        this.app.use(this.ApiPaths.karts, kart_1.default);
        this.app.use(this.ApiPaths.auth, auth_1.default);
        Server.Pkg = this.app.get('pkg');
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.app.get('port'));
            console.log('server on port ' + this.port);
        });
    }
    middlewares() {
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.json());
    }
}
exports.Server = Server;
