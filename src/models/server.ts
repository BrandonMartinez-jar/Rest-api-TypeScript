import express, { Application } from 'express';
import indexRoute from '../routes/index';
import userRoutes from '../routes/user';
import kartRoutes from '../routes/kart';
import productRoutes from '../routes/product';
import orderRoutes from '../routes/order';
import authRoutes from '../routes/auth';
import morgan from 'morgan';
const pkg = require('../../package.json');



export class Server{

    private app: Application;
    public static Pkg : typeof pkg;

    private ApiPaths = {
        home: '/api',
        users: '/api/users',
        products: '/api/products',
        orders: '/api/orders',
        karts: '/api/karts',
        auth: '/api/auth'
    }
    
    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000);
        this.app.set('pkg', pkg);
    }
    routes(){
        this.app.use(this.ApiPaths.home, indexRoute);
        this.app.use(this.ApiPaths.users, userRoutes);
        this.app.use(this.ApiPaths.products, productRoutes);
        this.app.use(this.ApiPaths.orders, orderRoutes);
        this.app.use(this.ApiPaths.karts, kartRoutes);
        this.app.use(this.ApiPaths.auth, authRoutes);
        Server.Pkg = this.app.get('pkg');
    }

    

    async listen(){
        await this.app.listen( this.app.get('port'));
        console.log('server on port ' + this.port);
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    
}