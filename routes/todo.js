const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('tes todo lagi 4');
});

module.exports = router;
