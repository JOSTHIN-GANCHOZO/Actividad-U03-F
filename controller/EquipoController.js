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

export const getEquipoById = async (req, res) => {
    try {
        const { id } = req.params;
        const equipo = await Equipo.findByPk(id);

        if (!equipo) {
            return res.status(404).json({ mensaje: 'Equipo no encontrado' });
        }
        return res.json(equipo);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const crearEquipo = async (req, res) => {
    try {
        const { nombre, ciudad, pais, estadio, anioFundacion } = req.body;
        if (!nombre || !ciudad || !pais || !estadio || !anioFundacion) {
            return res.status(400).json({ error: 'Faltan campos obligatorios' });
        }
        if (anioFundacion < 1800 || anioFundacion > new Date().getFullYear()) {
            return res.status(400).json({ error: 'Año de fundación inválido' });
        }
        const nuevoEquipo = await Equipo.create({ nombre, ciudad, pais, estadio, anioFundacion });
        return res.status(201).json(nuevoEquipo);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error interno del servidor' });
    }
};