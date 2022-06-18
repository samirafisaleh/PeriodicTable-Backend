var mongoose = require('mongoose')


var schema = new mongoose.Schema({
    name : String,
    elementid : Number
});



module.exports = schema