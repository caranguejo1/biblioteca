import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

//configuração da conexão com o banco de dados
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

sequelize.authenticate()
    .then(result => console.log('conexao feita animal'))
    .catch(error => console.log('não deu certo'));

export default sequelize;