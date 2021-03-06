var express = require('express');
var router = express.Router();
var fs = require("fs");

/* GET home page. */
router.get('/', function (req, res, next) {
	// console.log(req.session);
	res.render('home/index', {
		title: 'Express',
		user: req.session.user,
		success: req.flash('success').toString(),
		error: req.flash('error').toString()
	});
});

router.get('/article', function (req, res, next) {
	// var data = fs.readFileSync('./module/mock/article.json');
	var data = JSON.parse(fs.readFileSync('./module/mock/article.json'));
	res.json(data);
});

module.exports = router;
