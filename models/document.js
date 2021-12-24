const mongoose = require('mongoose');

let Document = mongoose.model('document', {
    title: String,
    file: String,
    date: Date
})

module.exports = Document;