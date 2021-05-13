import { Request, Response } from 'express';
import { connect } from '../database/db';
import { order, orderDetails } from '../interfaces/order';

export async function getOrders(req: Request, res: Response){
    const con = await connect();
    const Orders = await con.query('SELECT * FROM pedidos');
    res.status(200).json(Orders[0]);
}

export async function getOrder(req: Request, res: Response){
    const { id } = req.params;
    const con = await connect();
    const pedido = con.query('SELECT * FROM pedidos WHERE id = ?', [id])
    return pedido ? res.status(200).json( pedido ) : res.status(404).json({msg:'no existe el pedido'});
}

export async function postOrder(req: Request, res: Response){
    const newOrder : order = req.body; 
    const con = await connect();
    await con.query('INSERT INTO pedidos SET ?', [ newOrder ]);
    return res.status(200).json({msg: 'pedido registrado'});
}

export async function putOrder(req: Request, res: Response){
    const { id } = req.params;
    const updateOrder : order = req.body; 

    const con = await connect();
    await con.query('UPDATE pedidos SET ? WHERE id = ?', [updateOrder, id]);
    return res.status(200).json("pedido actualizado");
}

export async function deleteOrder(req: Request, res: Response){
    const { id } = req.params;
    const con = await connect();
    await con.query('DELETE FROM pedidos WHERE id = ?', [id]);
    return res.status(200).json( "pedido eliminado" );
}