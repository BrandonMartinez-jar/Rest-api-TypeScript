import { basicUser, user } from "./user";

export interface basicOrder{
    id_user : basicUser,
}

export interface order extends basicOrder{
    id : number,
    direccion : string[],
    telefono : string,
}

export interface orderDetails extends order{
    user : user,
}