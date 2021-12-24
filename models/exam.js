const mongoose = require('mongoose');

let Exam = mongoose.model('exam', {

    title: String,
    date: Date,
    salle: String
})

module.exports = Exam;