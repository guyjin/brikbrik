var express = require('express');
var path = require('path');
// var mime = require('mime');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET Model List */
router.get('/models', function(req, res) {
  var models = '';
})

module.exports = router;
