const mongoose = require('mongoose')
const Book = require('./book')

const authorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Author', authorSchema)