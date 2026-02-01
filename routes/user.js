const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

const userCtrl = require('../controllers/user');
const password = require('../middleware/password');
const rateLimit = require('../middleware/rateLimit')

router.get('/', userController.getAllCardsUser);
router.get('/:id', userController.getOneUser);

router.post('/', userController.createUser);
router.post('/login', password, userCtrl.login, rateLimit);

module.exports = router;