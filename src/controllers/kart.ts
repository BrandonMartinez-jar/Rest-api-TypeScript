import { Request, Response } from 'express'; 
import { connect } from '../database/db';
import { kart } from '../interfaces/kart';

export async function getKarts(req: Request, res: Response){
    const con = await connect();
    const Karts = await con.query('SELECT * FROM carritos');
    res.status(200).json(Karts[0]);
}

export async function getKart(req: Request, res: Response){
    const { id } = req.params;
    const con = await connect();
    const carrito = con.query('SELECT * FROM carritos WHERE id = ?', [id])
    return carrito ? res.status(200).json( carrito ) : res.status(404).json({msg:'no existe el carrito'});
}

export async function postKart(req: Request, res: Response){
    const newKart : kart = req.body; 
    const con = await connect();
    await con.query('INSERT INTO carritos SET ?', [ newKart ]);

    return res.status(200).json({msg: 'carrito registrado'});
}

export async function putKart(req: Request, res: Response){
    const { id } = req.params;
    const updateKart : kart = req.body; 

    const con = await connect();
    await con.query('UPDATE ucarrito SET ? WHERE id = ?', [updateKart, id]);
    return res.status(200).json( "carrito actualizado" );
}

export async function deleteKart(req: Request, res: Response){
    const { id } = req.params;
    const con = await connect();
    await con.query('DELETE FROM carritos WHERE id = ?', [id]);
    return res.status(200).json( "carrito eliminado" );
}