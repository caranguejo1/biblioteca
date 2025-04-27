import '../relacionamentos.js'
import Emprestimo from "../model/EmprestimoModelo.js"
import Livro from "../model/LivroModelo.js";
import Usuario from "../model/UsuarioModelo.js";

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
    if (!idlivro) {
        res.status(422).send('O parâmetro idlivro é obrigatório.');
    }
    if (!idusuario) {
        res.status(422).send('O parâmetro idusuario é obrigatório.');
    }
    const livroBanco = await Livro.findByPk(idlivro);
    if (!livroBanco) {
        res.status(404).send('Livro não encontrado.');
    }
    const usuarioBanco = await Usuario.findByPk(idUsuario);
    if (!usuarioBanco) {
        res.status(404).send('Usuario não encontrado.');
    }
    if (!livroBanco.ativo) {
        res.status(422).send('Este livro está inativo.');
    }
    if (livroBanco.emprestado) {
        res.status(422).send('Este livro já está emprestado.');
    }
    //verifica se o usuário tem um emprestimo pendente
    //falta fazer
    const emprestimo = moment().format('YYYY-MM-DD');
    const vencimento = moment().add(15, 'days').format(YYYY - MM - DD);


    const respostaBanco = await Emprestimo.create({ idlivro, emprestimo, vencimento, idusuario })

    const emprestado = true;
    await Livro.update(
        { emprestado },
        { where: { idlivro } });

    res.send('respostaBanco');
}

async function devolver(req, res) {
    try {
        const id = req.params.id;

        // Validação 1: ID é numérico?
        if (isNaN(id)) {
            return res.status(400).json({
                success: false,
                message: "ID do empréstimo inválido!"
            });
        }

        // Busca o empréstimo
        const emprestimo = await Emprestimo.findByPk(id);

        // Validação 2: Empréstimo existe?
        if (!emprestimo) {
            return res.status(404).json({
                success: false,
                message: "Empréstimo não encontrado!"
            });
        }

        // Validação 3: Já foi devolvido?
        if (emprestimo.devolucao !== null) {
            return res.status(400).json({
                success: false,
                message: "Este empréstimo já foi devolvido!"
            });
        }

        // Processamento da devolução
        const transaction = await sequelize.transaction();

        try {
            // Atualiza a data de devolução
            await Emprestimo.update(
                { devolucao: sequelize.literal('CURRENT_DATE') },
                { where: { idemprestimo: id }, transaction }
            );

            // Atualiza disponibilidade do livro
            await Livro.update(
                { disponivel: true },
                { where: { id: emprestimo.idlivro }, transaction }
            );

            await transaction.commit();

            // Resposta de sucesso
            res.status(200).json({
                success: true,
                message: "Devolução registrada com sucesso!",
                detalhes: {
                    livroId: emprestimo.idlivro,
                    dataDevolucao: new Date().toISOString().split('T')[0]
                }
            });

        } catch (error) {
            await transaction.rollback();
            throw error; // Repassa o erro para o catch externo
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Falha ao processar devolução",
            error: error.message
        });
    }
}


export default { listar, selecionar, emprestar, devolver };