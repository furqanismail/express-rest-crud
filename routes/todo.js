const express = require('express');
const router = express.Router();

const todoHandler = require('./handler/todo');


router.post('/', todoHandler.create);
router.put('/:id', todoHandler.update);

module.exports = router;
