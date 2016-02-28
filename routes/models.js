var express = require('express');
var path = require('path');
var walk = require('walk');

var router = express.Router();



// Build file walker to assemble list of lego models
var files = [];

// Walker options
var walker = walk.walk('./files', {followLinks: false});

// Walker Events
walker.on('file', function(root,stat,next) {
  // Add this file to the list of files
  files.push(root + '/' stat.name);
  next();
});

walker.on('end', function() {
  console.log(files);
});



/* GET list of models. */
router.get('/', function(req, res) {
  res.send('respond with a list of files');
});


module.exports = router;
