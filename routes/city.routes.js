const cityController = require('../controllers/city.controller');
const router = require('express').Router();

router.post('/', cityController.create);
router.get('/', cityController.findAll);
router.put('/:id', cityController.update);
router.put('/:id', cityController.update);
router.delete('/:id', cityController.delete);
router.get('/:id', cityController.findOne);

module.exports = router;
