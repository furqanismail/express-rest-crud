const express = require('express');
const router = express.Router();

const todoHandler = require('./handler/todo');


router.post('/', todoHandler.create);
router.put('/:id', todoHandler.update);
router.get('/', todoHandler.get);
router.get('/:id', todoHandler.get_by_id);
router.delete('/:id', todoHandler.destroy);

module.exports = router;
