import { Router } from 'express';
import { Request, Response } from 'express';
import { Server } from '../models/server';

const router = Router();

router.get(('/'), (req: Request, res:Response) => {
    res.json({
      name: Server.Pkg.name,
      author: Server.Pkg.author,
      description: Server.Pkg.description,
      version: Server.Pkg.version 
    });
});

export default router;