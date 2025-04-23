import sequelize from "./banco.js";
import './model/EditoraModelo.js';
import './model/EmprestimoModelo.js';
import './model/AutorModelo.js';
import './model/LivroModelo.js';
import './model/UsuarioModelo.js';
import './model/CategoriaModelo.js'
import './relacionamentos.js';

await sequelize.sync({ alter: true })
    .then(result => console.log("Tabelas criadas com sucesso"))
    .catch(error => console.log("Erro ao criar tabelas", error));