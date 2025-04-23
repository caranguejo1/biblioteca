import { DataTypes } from "sequelize";
import sequelize from "../banco.js";

const Emprestimo = sequelize.define("emprestimo", {
    idemprestimo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    idlivro: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idusuario: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    emprestimo: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    devolucao: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    observacao: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

export default Emprestimo;