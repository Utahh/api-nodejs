const database = require('../models');

class NivelController {
    static async pegaTodosNiveis(req, res) {
        try {
            const todosOsNiveis = await database.Niveis.findAll();
            return res.status(200).json(todosOsNiveis);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmNivel(req,res) {
        const {id} = req.params;
        try {
            const umNivel = await database.Niveis.findOne({
                where: 
                {id: Number(id)}
            });
            return res.status(200).json(umNivel)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async crieUmNivel(req, res) {
        const novoNivel= req.body;
        try {
            const novoNivelCriado = await database.Niveis.create(novoNivel);
            return res.status(200).json(novoNivelCriado);
        } catch (error) {
            return res.status(500).json(err.message);
        }
    }

    static async atualizarUmaNivel(req, res) {
        const {id} = req.params;
        const novaInfo = req.body;
        try {
            await database.Nivel.update(novaInfo, {
                where: {id: Number(id)}
            });
            const nivelAtualizado = await database.Niveis.findOne({where: {
                id: Number(id)}
            })
            return res.status(200).json(nivelAtualizado);
        } catch (error) {
            return res.status(500).json(err.message);
        }
    }

    static async apagaNivel(req, res) {
        const {id} = req.params;
        try {
            await database.Niveis.destroy({where: {id: Number(id)}});
            return res.status(200).json({ message: `id ${id} deletado`});
        } catch (error) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = NivelController;