var express = require('express');
var path = require('path');
var locationService = require('../service/location');
var router = express.Router();

/* GET default API page. */
router.get('/', function(req, res, next) {
	//send HTML
	var apiHtmlFile = path.join(__dirname, '../public', 'api.html');
	res.sendFile(apiHtmlFile);
});

//get a stored location
router.get('/location', function(req, res, next) {
	var serviceResponse = locationService.getNode();
	res.send(serviceResponse).status(200);
});

//put a location i.e. save
router.post('/location', function(req, res, next) {
	//console.log(req.body);      // your input JSON

	var serviceResponse = locationService.addNode(req.body.latitude, req.body.longitude);
	res.send(serviceResponse).status(200);
});

module.exports = router;
