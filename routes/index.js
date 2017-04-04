var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var msgModel = mongoose.model('msgModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create', function(req, res, next){
	var model = new msgModel(req.body);

	model.save(function(err, msg){ 
		if(err){ return next(err); }

		res.json(msg);

	});
});

router.get('/retrieve', function(req, res, next){
	msgModel.find(function(err, msg){
		if(err){ return next(err); }

		res.json(msg);
	});
});

module.exports = router;
