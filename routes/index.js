var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about-us', function(req, res, next) {
    res.render('about-us', { title: 'Express' });
});

router.get('/staff', function(req, res, next) {
    res.render('staff', { title: 'Express' });
});

router.get('/dokumentasi', function(req, res, next) {
    res.render('dokumentasi', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});

module.exports = router;