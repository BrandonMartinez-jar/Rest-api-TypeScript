export interface basicProduct{
    id : number,
}

export interface product extends basicProduct{
    nombre : string,
    precio : number,
    img : string,
    beneficios : string,
}
