var express = require('express');
var path = require('path');
var router = express.Router();

var json1 = require('../public/data/modifying_adjectives');
var json2 = require('../public/data/adjectives');
var json3 = require('../public/data/topics_covered');
var files = [json1, json2, json3];

router.get('/data', function(req, res){
        res.send(files);
});

router.get('/*', function(req, res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;