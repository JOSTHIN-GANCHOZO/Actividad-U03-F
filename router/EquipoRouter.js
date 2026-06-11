import { Router } from 'express';
import {
            getAllEquipos,
            getEquipoById,
            crearEquipo
        } from '../controller/EquipoController.js';

const router = Router();

router.get('/equipos', getAllEquipos);
router.get('/equipos/:id', getEquipoById);
router.post('/equipos', crearEquipo);

export default router;