const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();

router.get('/turmas', TurmaController.pegaTodasAsTurmas);
router.get('/turmas/:id', TurmaController.pegarUmaTurma);
router.post('/turmas', TurmaController.crieUmaTurma);
router.put('/turmas/:id', TurmaController.atualizarNovaTurma);
router.delete('/turmas/:id', TurmaController.apagaTurma);

module.exports = router;