const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/:id', userController.getUserById);

router.post('/signup', authController.signUp);

router.post('/login', authController.login);

module.exports = {router};
