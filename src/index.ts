import dotenv from 'dotenv';
import { Server } from './models/server';

async function main() {
    dotenv.config();
    const server = new Server(3000);
    await server.listen();
}

main();