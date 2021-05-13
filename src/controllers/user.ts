import { Request, Response } from 'express';
import { connect } from '../database/db';
import { user } from '../interfaces/user';

export async function getUsers(req: Request, res: Response){
    const con = await connect();
    const users = await con.query('SELECT * FROM usuarios');
    res.status(200).json(users[0]);
}

export async function getUser(req: Request, res: Response){
    const { id } = req.params;
    const con = await connect();
    const usuario = await con.query('SELECT * FROM usuarios WHERE id = ?', [id])
    return usuario ? res.status(200).json( usuario ) : res.status(404).json({msg:'no existe el usuario'});
}

export async function postUser(req: Request, res: Response){
    const newUser : user = req.body; 
    const con = await connect();
    await con.query('INSERT INTO usuarios SET ?', [ newUser ]);
    return res.status(200).json({msg: 'usuario registrado'});
}

export async function putUser(req: Request, res: Response){
    const { id } = req.params;
    const updateUser : user = req.body; 

    const con = await connect();
    await con.query('UPDATE usuarios SET ? WHERE id = ?', [updateUser, id]);
    return res.status(200).json( "usuario actualizado" );
}

export async function deleteUser(req: Request, res: Response){
    const { id } = req.params;
    const con = await connect();
    await con.query('DELETE FROM usuarios WHERE id = ?', [id]);
    return res.status(200).json( "usuario eliminado" );
}