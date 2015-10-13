var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {


    res.render('home', { body_class: 'page-home' });


});

module.exports = router;