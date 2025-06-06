import { DataTypes } from "sequelize";
import sequelize from "../banco.js";

const Autor = sequelize.define("autor", {
    idautor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nomeautor: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    biografia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nacionalidade: {
        type: DataTypes.STRING(60),
        allowNull: true
    },
    nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    foto: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

export default Autor;