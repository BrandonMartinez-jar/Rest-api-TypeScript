import { basicUser} from './user'
import { basicProduct} from './product';

export interface basicKart{
    producto : basicProduct,
    usuario : basicUser,
}

export interface kart extends basicKart{
    cantidad : number,
    subtotal : number,
}
