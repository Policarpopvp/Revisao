var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('esportes');
});

router.get('/surf', function(req, res, next) {
    res.render('surf');
  });
  
  router.get('/futebol', function(req, res, next) {
    res.render('futebol');
  });
  router.get('/jiujitsu', function(req, res, next) {
    res.render('jiujitsu');
  });
  router.get('/rugby', function(req, res, next) {
    res.send('rugby');
  });


module.exports = router;
