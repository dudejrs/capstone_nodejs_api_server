var express = require('express');
var router = express.Router();
const stockController = require('../controllers/stock_controllers');




// /* GET users listing. */
// router.get('/', function(req, res) {
//   res.status(200).json({
//     "success" : true
//   });
// });

/* GET users listing. */
router.get('/',stockController.basicAPI);

router.get('/:code', function(req,res){
	
	if(req.query.type == "recent"){
		return stockController.recentController(req,res);
	}

	if(req.query.type == "details"){
		return stockController.basicAPI(req,res)
	};


	return res.status(200).json({
		"code" : req.params["code"],
		"query" : req.query.name
	});
});



// router.get('/test', stockController.testAPI);


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
