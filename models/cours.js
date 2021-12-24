const mongoose = require('mongoose');

let Cours = mongoose.model('cours', {
    title: String,
    salle: String,
    date: Date
})

module.exports = Cours;