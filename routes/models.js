var express = require('express');
var path = require('path');

var router = express.Router();

/* GET list of models. */
router.get('/', function(req, res) {
  res.send('respond with a list of files');
});


module.exports = router;
