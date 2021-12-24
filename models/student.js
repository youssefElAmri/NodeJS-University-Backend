const mongoose = require('mongoose');

let Student = mongoose.model('student', {
    name: String,
    lastname: String,
    age: Number,
    image: String,
    university: String
})

module.exports = Student;