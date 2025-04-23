import { DataTypes } from "sequelize";
import sequelize from "../banco.js";

const Categoria = sequelize.define("categoria", {
    idcategoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nomecategoria: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
});

export default Categoria