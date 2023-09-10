const database = require('../models');
const { Pessoas } = require('../models');

class PessoaController {
    static async pegaPessoasAtivas(req, res) {
        try {
            const pessoasAtivas = await database.Pessoas.findAll();
            return res.status(200).json(pessoasAtivas);
        }catch (err) {
            return res.status(500).json(err.message);
        }

    }

    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.scope('all').findAll();
            return res.status(200).json(todasAsPessoas);
        }catch (err) {
            return res.status(500).json(err.message);
        }
    }


    static async pegaUmaPessoa(req, res) {
        const {id} = req.params;
        try {
            const umaPessoa = await database.Pessoas.findOne({
                where: 
                {id: Number(id)}
            })
            return res.status(200).json(umaPessoa);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async crieUmaPessoa(req, res) {
        const novaPessoa = req.body;
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
            return res.status(200).json(novaPessoaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizarUmaPessoa(req, res) {
        const {id} = req.params;
        const novaInfo = req.body;
        try {
            await database.Pessoas.update(novaInfo, {
                where: {id: Number(id)}
            });
            const pessoaAtualizada = await database.Pessoas.findOne({where: {
                id: Number(id)}
            })
            return res.status(200).json(pessoaAtualizada);
        } catch (error) {
            return res.status(500).json(err.message);
        }
    }

    static async apagaPessoas(req, res) {
        const {id} = req.params;
        try {
            await database.Pessoas.destroy({where: {id: Number(id)}});
            return res.status(200).json({ message: `id ${id} deletado`});
        } catch (error) {
            return res.status(500).json(err.message);
        }
    }

    static async restauraPessoas(req, res) {
        const {id} = req.params;
        try {
            await database.Pessoas.restore({where: {id: Number(id)}});
            return res.status(200).json({ message: `id ${id} restaurado`});
        } catch (error) {
            return res.status(500).json(err.message);
        }
    }

    static async pegaUmaMatricula(req, res) {
        const {estudanteId, matriculaId} = req.params;
        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)}
            })
            return res.status(200).json(umaMatricula);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static async crieUmaMatricula(req, res) {
        const { estudanteId } = req.params;
        const novaMatricula = { ...req.body, estudanteId: Number(estudanteId) };
        
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);
            return res.status(200).json(novaMatriculaCriada);
        } catch (erro) {
            return res.status(500).json(erro.message);
        }
    }
    
    
    static async atualizarUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        const novaInfo = req.body;
        
        try {
            await database.Matriculas.update(novaInfo, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            
            const matriculaAtualizada = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId)
                }
            });
    
            return res.status(200).json(matriculaAtualizada);
        } catch (erro) {
            return res.status(500).json(erro.message);
        }
    }
    

    static async apagaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
    
        try {
            await database.Matriculas.destroy({ where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } });
            return res.status(200).json({ mensagem: `O ID ${matriculaId} foi excluído` });
        } catch (erro) {
            return res.status(500).json(erro.message);
        }
    }

    static async pegaMatriculas(req, res) {
        const {estudanteId} = req.params;
        try {
            const pessoa = await database.Pessoas.findOne({ where: {id: Number(estudanteId)}});
            const matriculas= await pessoa.getAulasMatriculadas();
            return res.status(200).json(matriculas);
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }
    
}

module.exports = PessoaController;