import { Equipo } from '../model/EquipoModel.js';

export const getAllEquipos = async (req, res) => {
    try {
        const equipos = await Equipo.findAll();
        if (!equipos) {
            return res.status(200).json({ mensaje: 'No hay equipos registrados' });
        }
        return res.status(200).json(equipos);
    } catch (error) {
        console.error('Error al obtener equipos:', error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};