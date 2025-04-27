import { DataTypes } from "sequelize";
import sequelize from "../banco.js";

const Livro = sequelize.define("livro", {
    id :{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    titulo: {
        type: DataTypes.STRING(100),
        allownull: false,
    },
    foto: {
        type: DataTypes.TEXT,
    },
    sinopse: {
        type: DataTypes.TEXT,
        allownull: false,
    },
    enredo: {
        type: DataTypes.TEXT,
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_autor: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_editora: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    disponivel: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});

export default Livro;
