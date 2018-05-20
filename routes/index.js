var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/:timeformat', function(req, res, next) {
  var time = req.params.timeformat;
  var d = new Date(time);
  if(d != "Invalid Date"){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var obj = { unix: d.getTime(), natural: (months[d.getMonth()] + " " + d.getDate() + " " + d.getFullYear()) };
    res.setHeader('Content-Type', 'application/json');
    res.send(obj);
  }
  else {
    var obj = { unix: null, natural: null };
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.send(obj);
  }
});

module.exports = router;
