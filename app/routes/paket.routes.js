const pakettController = require('../controllers/paket.controller');
const router = require('express').Router();

router.post('/', pakettController.create);
router.get('/', pakettController.findAll);
router.put('/:id', pakettController.update);
router.put('/:id', pakettController.update);
router.delete('/:id', pakettController.delete);
router.get('/:id', pakettController.findOne);

module.exports = router;
