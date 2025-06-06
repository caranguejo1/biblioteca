import { DataTypes } from "sequelize";
import sequelize from "../banco.js";

const Editora = sequelize.define("editora", {
    ideditora: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nomeeditora: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    cnpj: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    endereco: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

export default Editora;
