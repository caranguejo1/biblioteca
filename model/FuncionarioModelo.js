import { DataTypes } from "sequelize";
import sequelize from "../banco.js";

const Funcionario = sequelize.define("funcionario", {
    idfuncionario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nomefuncionario: {
        type: DataTypes.STRING(60),
        allowNull: false
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
    nascimento: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    salario: {
        type: DataTypes.DECIMAL(11, 2),
        allowNull: false,
        defaultValue: 0
    },
    contratacao: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    demissao: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    senha: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    token: {
        type: DataTypes.STRING(100),
        allowNull: true
    }
});

export default Funcionario;
