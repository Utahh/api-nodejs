const { Router } = require('express');
const PessoaController = require('../controllers/NivelController');

const router = Router();

router.get('/niveis', PessoaController.pegaTodosOsNiveis);
router.get('/niveis/:id', PessoaController.pegaNivel);
router.post('/niveis', PessoaController.criaNivel);
router.put('/niveis/:id', PessoaController.atualizaNivel);
router.delete('/niveis/:id', PessoaController.apagaNivel);

module.exports = router;