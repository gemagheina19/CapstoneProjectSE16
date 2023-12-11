const roomsController = require('../controllers/city.controller');
const router = require('express').Router();

router.post('/', roomsController.create);
router.get('/', roomsController.findAll);
router.put('/:id', roomsController.update);
router.put('/:id', roomsController.update);
router.delete('/:id', roomsController.delete);
router.get('/:id', roomsController.findOne);

module.exports = router;
