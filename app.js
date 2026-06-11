import express from 'express'
import { sequelize } from './db/conexion.js';

import equipoRouter from './router/EquipoRouter.js'

const app = express();
const port= 3000;
app.use(express.json());
app.use('/api', equipoRouter);

const main= async () =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await sequelize.sync({alter: true});
        console.log('Database synchronized and tables created if needed.');

        app.listen(port, () => {
            console.log(`Servidor corriendo en el puerto ${port}`);
        });
    } catch (error) {
        console.error(`Error ${error}`);
    }
}
main();