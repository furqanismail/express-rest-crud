const express = require('express');
const { routes } = require('../app');
const router = express.Router();

const userHandler = require('./handler/user');


routes.post('/register', userHandler.register);



module.exports = router;
