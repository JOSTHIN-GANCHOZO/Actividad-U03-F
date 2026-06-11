import { DataTypes } from 'sequelize';
import { sequelize } from '../db/conexion.js';

export const Equipo = sequelize.define(
  'Equipo',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, 
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pais: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estadio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        anioFundacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1800,
                max: new Date().getFullYear(),
            },
        },
    },
    {
        tableName: 'equipos', // nombre de la tabla en la base de datos
        timestamps: true,     // agrega createdAt y updatedAt automáticamente
    }
);

// Verificación (opcional)
console.log(Equipo === sequelize.models.Equipo);