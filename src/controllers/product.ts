import { Request, Response } from 'express';
import { connect } from '../database/db';
import { product } from '../interfaces/product';


export async function getProducts(req: Request, res: Response){
    const con = await connect();
    const products = await con.query('SELECT * FROM productos');
    res.status(200).json(products[0]);
}

export async function getProduct(req: Request, res: Response){
    const { id } = req.params;
    const con = await connect();
    const producto = con.query('SELECT * FROM productos WHERE id = ?', [id])
    return producto ? res.status(200).json( producto ) : res.status(404).json({msg:'no existe el producto'});
}

export async function postProduct(req: Request, res: Response){
    const newProduct : product = req.body; 
    const con = await connect();
    await con.query('INSERT INTO productos SET ?', [ newProduct ]);
    return res.status(200).json({msg: 'producto registrado'});
}

export async function putProduct(req: Request, res: Response){
    const { id } = req.params;
    const updateProduct : product = req.body; 

    const con = await connect();
    await con.query('UPDATE productos SET ? WHERE id = ?', [updateProduct, id]);
    return res.status(200).json("producto actualizado" );
}

export async function deleteProduct(req: Request, res: Response){
    const { id } = req.params;
    const con = await connect();
    await con.query('DELETE FROM productos WHERE id = ?', [id]);
    return res.status(200).json( "producto eliminado" );
}