import '../relacionamentos.js'
import Funcionario from "../model/FuncionarioModelo.js"

async function listar(req, res) {
    const respostaBanco = await Funcionario.findAll();
    res.json(respostaBanco);
}

async function selecionar(req, res) {
    const id = req.params.id;
    const respostaBanco = await Funcionario.findByPk(id);
    res.json(respostaBanco);
}

async function inserir(req, res) {
    const respostaBanco = await Funcionario.create(req.body);
    res.json(respostaBanco);
}

async function alterar(req, res) {
    const nomefuncionario = req.body.nomefuncionario;
    const cpf = req.body.cpf;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const nascimento = req.body.nascimento;
    const salario = req.body.salario;
    const contratacao = req.body.contratacao;
    const idfuncionario = req.params.id;
    const respostaBanco = await Funcionario.update(
        { nomefuncionario, cpf, email, telefone, nascimento, salario, contratacao, idfuncionario },
        { where: { idfuncionario } });
    res.json(respostaBanco);
}

async function demitir(req, res) {
    const idfuncionario = req.body.idfuncionario;

    //const respostaBanco = await Emprestimo.create(req.body);
    //res.json(respostaBanco);
    if (!idfuncionario){
        res.status(422).send('O parâmetro idfuncionario é obrigatório.');
    }
    const funcinarioBanco = await Funcionario.findByPk(idfuncionario);
    if (!funcinarioBanco){
        res.status(404).send('Funcionário não encontrado.');
    }
    if (!funcinarioBanco.ativo){
        res.status(422).send('Este funcionário está inativo.');
    }
    const inativar = moment().format('YYYY-MM-DD');    
    
    const respostaBanco = await Funcionario.create({idfuncionario})

    const inativado = true;
    await Funcionario.update(
        { inativado },
        { where: { idfuncionario } });

    res.send('respostaBanco');
}

export default { listar, selecionar, inserir, alterar, demitir };