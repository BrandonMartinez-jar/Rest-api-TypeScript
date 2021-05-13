import bcryptjs from 'bcryptjs';


export interface basicUser{
    id : number,
    correo : string,
    contraseña : string
}

export interface user extends basicUser{
    nombre : string,
    apellido : string,
    
}

export interface userDetails extends user{
    telefono? : string[]
}
