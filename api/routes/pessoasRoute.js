const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController.js');

const router = Router();

router.get('/pessoas/todos', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas', PessoaController.pegaPessoasAtivas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas);
router.get('/pessoas/:estudanteId/matricula', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula);
router.post('/pessoas', PessoaController.crieUmaPessoa);
router.post('/pessoas/:id/restaura', PessoaController.restauraPessoas);
router.post('/pessoas/:estudanteId/matricula', PessoaController.crieUmaMatricula);
router.put('/pessoas/:id', PessoaController.atualizarUmaPessoa);
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizarUmaMatricula);
router.delete('/pessoas/:id', PessoaController.apagaPessoas);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula);

module.exports = router;