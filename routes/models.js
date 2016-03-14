var express = require('express');
var path = require('path');
var walk = require('walk');

var router = express.Router();







/* GET list of models. */
router.get('/', function(req, res) {
  // Build file walker to assemble list of lego models
  var files = [];
  var models = '';
  // Walker options
  var walker = walk.walk('./files', {followLinks: false});

  // Walker Events
  walker.on('file', function(root,stat,next) {
    // Add this file to the list of files
    files.push(stat.name);
    next();
  });

  walker.on('end', function() {
    console.log("files array: ", files);
    models = JSON.stringify(files);
    console.log("models", models);
    res.set({
      'Content-type': 'application/json'
    })
    res.json(models);

  });


});


module.exports = router;
