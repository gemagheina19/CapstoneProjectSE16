const userController = require('../controllers/user.controller');
const router = require('express').Router();

router.post('/', userController.create);
router.get('/', userController.findAll);
router.put('/:id', userController.update);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
router.get('/:id', userController.findOne);

module.exports = router;
