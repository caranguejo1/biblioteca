import { DataTypes } from "sequelize";
import sequelize from "../banco.js";

const Usuario = sequelize.define("usuario", {
    idusuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    cpf: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING(15),
        allowNull: true
    },
    senha: {
        type: DataTypes.STRING(100),
        allowNull: true
    }
});

export default Usuario;