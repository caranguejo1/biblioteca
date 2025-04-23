import { DataTypes } from "sequelize";
import sequelize from "../banco.js";

const Multa = sequelize.define("multa", {
    id :{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    vencimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    pagamento: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    id_emprestimo: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    valor_decimal: {
        type: DataTypes.DECIMAL(11, 2),
        allowNull: false,
        defaultValue: 0
    }
});

export default Multa;
