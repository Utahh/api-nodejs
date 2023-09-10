const { Router } = require('express');
const PessoaController = require('../controllers/NivelController');

const router = Router();

router.get('/niveis', PessoaController.pegaTodosNiveis);
router.get('/niveis/:id', PessoaController.pegaUmNivel);
router.post('/niveis', PessoaController.crieUmNivel);
router.put('/niveis/:id', PessoaController.atualizarUmaNivel);
router.delete('/niveis/:id', PessoaController.apagaNivel);

module.exports = router;