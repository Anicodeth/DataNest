const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/user/:id', userController.getUserById);

router.post('/user', authController.signUp);

router.post('/user/login', authController.login);

module.exports = {router};
