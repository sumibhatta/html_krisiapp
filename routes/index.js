var express = require('express');
var router = express.Router();
var product = require('../resources/pro');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { productList: product });
});

module.exports = router;