const express = require('express');
const Student = require('../models/student');
const Router = express.Router();
const multer = require('multer');

//multer

filename = '';
const storage = multer.diskStorage({
    destination: './upload',
    filename: function(req, file, cb) {
        date = Date.now();
        cb(null, date + '.' + file.mimetype.split('/')[1]);

        let fl = date + '.' + file.mimetype.split('/')[1];
        filename = fl;
    },
});

const upload = multer({ storage: storage });

//ajout

Router.post('/ajoutstudent', (req, res) => {

    console.log(req.body);

    let StudentFromPostman = req.body;

    let student = new Student(StudentFromPostman);

    student.save().then(
        (data) => {
            res.send(data);
        },
        (error) => {
            console.log(error);
            res.send(error);
        }
    );

})

//getall

Router.get('/getallstudents', (req, res) => {

    Student.find().then(
        (data) => {
            res.send(data);
        },
        (error) => {
            res.send(error);
        }
    );

})

//getbyid

Router.get('ajoutstudent/:id', (req, res) => {

    let id = req.params.id;
    Student.findOne({ _id: id }).then(
        (data) => {
            res.send(data);
        },
        (error) => {
            console.log(error);
            res.send(error);
        }
    );

})

//delete

Router.delete('/deletestudent/:id', (req, res) => {

    let id = req.params.id;
    Student.findByIdAndDelete({ _id: id }).then(
        (data) => {
            res.send(data);
        },
        (error) => {
            console.log(error);
            res.send(error);
        }
    );

})

//update

Router.put('/updatestudent/:id', (req, res) => {

    let id = req.params.body;
    let s = req.body;
    Student.findByIdAndUpdate({ _id: id }, s, { new: true }).then(
        (data) => {
            res.send(data);
        },
        (error) => {
            console.log(error);
            res.send(error);
        }
    );

})

module.exports = Router;