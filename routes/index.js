var express = require('express');
var path = require('path');
// var mime = require('mime');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Model file. */
router.get('/model/:name', function(req, res) {
  var file = __dirname + '/files/' + req.params.name + '.ldr';

  var filename = path.basename(file);


  // res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  // res.setHeader('Content-type', 'application/x-ldraw');
  //
  // var filestream = fs.createReadStream(file);
  // filestream.pipe(res);

  // Express has a nice shortcut for all of this
  res.download(file);
})

module.exports = router;
