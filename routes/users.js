var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.status(200).json({
    "get" : true
  });
});

/* POST users listing. */
router.post('/', function(req, res) {
  res.status(200).json({
    "post" : true
  });
});


/* PUT users listing. */
router.put('/', function(req, res) {
  res.status(200).json({
    "put" : true
  });
});

/* DELETE users listing. */
router.delete('/', function(req, res) {
  res.status(200).json({
    "delete" : true
  });
});


module.exports = router;
