const mongoose = require('mongoose')
const schema = require('../schemas/group')

module.exports = mongoose.Model("Group", schema)