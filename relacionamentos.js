import AutorModelo from './model/AutorModelo.js';
import EditoraModelo from './model/EditoraModelo.js';
import EmprestimoModelo from './model/EmprestimoModelo.js';
import LivroModelo from './model/LivroModelo.js';

//Livro e autor
//Um Autor pode ter vários livros
AutorModelo.hasMany(LivroModelo, { foreingnKey: 'id_autor' });
//um livro somente pode ter um Autor
LivroModelo.belongsTo(AutorModelo, { as: 'autor', foreignKey: 'id_autor' });
//Livro e Editora
//Um livro pode ter somente uma editora
LivroModelo.belongsTo(EditoraModelo, { as: 'editora', foreignKey: 'id_editora' });
//Uma Editora pode ter vários livros
EditoraModelo.hasMany(LivroModelo, { foreignKey: 'id_editora' });
//Livro e Empréstimo
//Um livro pode ter vários empréstimos
LivroModelo.hasMany(EmprestimoModelo, { foreignKey: 'id_emprestimo' });
//Um emprestimo somente pode ter um livro
EmprestimoModelo.belongsTo(LivroModelo, { as: 'livro', foreignKey: 'id_emprestimo' });