var express = require('express');
var router = express.Router();
var products = require('../resources/pro');
var Product = require('../models/products');

router.get('/', function(req, res, next) {

    res.render('searchProducts', { productList: products });
});

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

router.get('/searchproducts', function(req, res, next) {
    if (req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        Product.find({ title: regex }, function(err, products) {
            if (err) {
                console.log(err);
            } else {
                res.render('searchProducts', { productList: products });
            }
        });
    } else {
        Product.find({}, function(err, products) {
            if (err) {
                console.log(err);
            } else {
                res.render('searchProducts', { productList: products });
            }
        });
    }

});





module.exports = router;