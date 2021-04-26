export interface basicUser{
    id : number,
}

export interface user extends basicUser{
    nombre : string,
    apellido : string,
    correo : string,
    contraseña : string
}

export interface userDetails extends user{
    telefono? : string[]
}