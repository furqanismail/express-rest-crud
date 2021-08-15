const express = require('express');
const router = express.Router();

const todoHandler = require('./handler/todo');


router.post('/', todoHandler.create);

module.exports = router;
