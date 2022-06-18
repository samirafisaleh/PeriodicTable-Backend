var mongoose = require('mongoose')
var schema = require('../schemas/elements')

module.exports = mongoose.model("Element", schema)