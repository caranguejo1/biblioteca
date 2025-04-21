import { where } from "sequelize";
import Emprestimo from "../model/EmprestimoModelo.js"

async function listar(req, res) {
    const respostaBanco = await Emprestimo.findAll();
    res.json(respostaBanco);
}

async function selecionar(req, res) {
    const id = req.params.id;
    const respostaBanco = await Emprestimo.findByPk(id);
    res.json(respostaBanco);
}

async function emprestar(req, res) {
    const idlivro = req.body.idlivro;
    const idusuario = req.body.idusuario;

    //const respostaBanco = await Emprestimo.create(req.body);
    //res.json(respostaBanco);
    if (!idlivro){
        res.status(422).send('O parâmetro idlivro é obrigatório.');
    }
    if (!idusuario){
        res.status(422).send('O parâmetro idusuario é obrigatório.');
    }
    const livroBanco = await Livro.findByPk(idlivro);
    if (!livroBanco){
        res.status(404).send('Livro não encontrado.');
    }
    const usuarioBanco = await Usuario.findByPk(idUsuario);
    if (!usuarioBanco){
        res.status(404).send('Usuario não encontrado.');
    }
    if (!livroBanco.ativo){
        res.status(422).send('Este livro está inativo.');
    }
    if (livroBanco.emprestado){
        res.status(422).send('Este livro já está emprestado.');
    }
    //verifica se o usuário tem um emprestimo pendente
    //falta fazer
    const emprestimo = moment().format('YYYY-MM-DD');
    const vencimento = moment().add(15, 'days').format(YYYY-MM-DD);
    
    
    const respostaBanco = await Emprestimo.create({idlivro, emprestimo, vencimento, idusuario})

    const emprestado = true;
    await Livro.update(
        { emprestado },
        { where: { idlivro } });

    res.send('respostaBanco');
}

async function devolver(req, res) {
    const nomeautor = req.body.nomealtor;
    const nascimento = req.body.nascimento;
    const biografia = req.body.biografia;
    const nacionalidade = req.body.nacionalidade;
    const foto = req.body.foto;
    const idautor = req.params.id;

    const respostaBanco = await Emprestimo.update(
        { nomeautor, nascimento, biografia, nacionalidade, foto, idautor },
        { where: { idautor } });
    res.json(respostaBanco);
}

export default { listar, selecionar, emprestar, devolver };