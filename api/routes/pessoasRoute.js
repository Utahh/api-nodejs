const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.post('/pessoas', PessoaController.crieUmaPessoa);
router.put('/pessoas/:id', PessoaController.atualizarUmaPessoa);
router.delete('/pessoas/:id', PessoaController.apagaPessoas);
router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula);
router.post('/pessoas/:estudanteId/matricula', PessoaController.crieUmaMatricula);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarUmaMatricula);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula);

module.exports = router;