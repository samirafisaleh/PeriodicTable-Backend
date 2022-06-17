var express = require('express')
var router = express.Router()





router.get('/', function(req, res, next) {

    res.send("Implementation required")

});



router.get('/:elementId', function(req, res, next) {

    res.json({"elementId" : req.params.elementId})

});

module.exports = router