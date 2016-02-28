var express = require('express');
var path = require('path');

var router = express.Router();

/* GET Model file. */
router.get('/:name', function(req, res) {
  var file = './files/' + req.params.name + '.dat';

  var filename = path.basename(file);
  // res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  // res.setHeader('Content-type', 'application/x-ldraw');
  // var filestream = fs.createReadStream(file);
  // filestream.pipe(res);

  // Express has a nice shortcut for all of this
  res.download(file);
});


module.exports = router;
