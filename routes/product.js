const express = require('express');
const router = express.Router();

const productHandler = require('./handler/product');

router.post('/', productHandler.store);
router.put('/:id', productHandler.update);
router.get('/', productHandler.get);
router.delete('/:id', productHandler.destroy);

module.exports = router;