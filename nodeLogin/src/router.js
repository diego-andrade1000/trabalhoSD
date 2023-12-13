const express = require('express');
const authController = require('./controllers/authController');
const middleware = require('./middlewares/middleware');

const router = express.Router();

router.post('/login', authController.login);

router.post('/new-user', authController.createUser);

router.post('/decode', middleware, authController.decode);

module.exports = router;