var express = require('express');
var router = express.Router();
var dao = require('../db')

// db.connect(function(err){
// 	if (err) throw err;
// 	console.log("Connected")	

// 	db.query("SELECT * FROM stock_market.stock", function(err,result,fields){
// 		if (err) throw err;
// 		console.log(result);
// 	});
// 	db.end();
// })



/* GET home page*/

function basicAPI(req,res){
	res.status(200).json({
		"success" : true
		});
};


function testAPI(req,res){
	const user_message = req.body.message;
	res.status(200).json({
		"message" : user_message
	});
};

function byHoursController(req,res){
	res.status(200).json({
		"message" : "Hello World!"
	});
};

function recentController(req,res){

	var db = (new dao()).getConnection();
	var sql = "SELECT * FROM stock_market.stock WHERE code =? and (SELECT MAX(timestamp) FROM stock_market.stock) ORDER BY timestamp DESC LIMIT 1;"
	var values = [req.params["code"]]

	console.log(values)


	db.connect(function(err){
		if (err) throw err;

		db.query(sql, values, function(req,result,fields){
			
			if(err) {
				console.log("error");
				throw err;
			}

			console.log(result);
			return res.status(200).json(result);
		});
	});

};


module.exports = {
	basicAPI : basicAPI,
	testAPI : testAPI,
	byHoursController : byHoursController,
	recentController : recentController
}