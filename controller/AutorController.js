import '../relacionamentos.js'
import Autor from "../model/AutorModelo.js"

async function listar(req, res) {
    const respostaBanco = await Autor.findAll();
    res.json(respostaBanco);
}

async function selecionar(req, res) {
    const id = req.params.id;
    const respostaBanco = await Autor.findByPk(id);
    res.json(respostaBanco);
}

async function inserir(req, res) {
    //    const nomeeditora = req.body.nomeeditora;
    //    const cnpj = req.body.cnpj;
    //    const endereco = req.body.endereco;

    const respostaBanco = await Autor.create(req.body);
    res.json(respostaBanco);
}

async function alterar(req, res) {
    const nomeautor = req.body.nomealtor;
    const nascimento = req.body.nascimento;
    const biografia = req.body.biografia;
    const nacionalidade = req.body.nacionalidade;
    const foto = req.body.foto;
    const idautor = req.params.id;

    const respostaBanco = await Autor.update(
        { nomeautor, nascimento, biografia, nacionalidade, foto, idautor },
        { where: { idautor } });
    res.json(respostaBanco);
}

async function excluir(req, res) {
    const idautor = req.params.id;

    const respostaBanco = await Autor.destroy(
        { where: { idautor } });
    res.json(respostaBanco);
}

export default { listar, selecionar, inserir, alterar, excluir };