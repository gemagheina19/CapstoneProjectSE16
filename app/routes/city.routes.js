const cityyController = require('../controllers/city.controller');
const router = require('express').Router();

router.post('/', cityyController.create);
router.get('/', cityyController.findAll);
router.put('/:id', cityyController.update);
router.put('/:id', cityyController.update);
router.delete('/:id', cityyController.delete);
router.get('/:id', cityyController.findOne);

module.exports = router;
