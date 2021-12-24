const express = require('express');
const multer = require('multer');
const Router = express.Router();
const Exam = require('../models/exam');

//ajout

Router.post('ajoutexam', (req, res) => {

    console.log(req.body);
    ExamFromPostman = req.body;

    let exam = new Exam(ExamFromPostman);

    exam.save().then(
        (dataexam) => {
            res.send(dataexam);
        },
        (error) => {
            res.send(error);
        }
    );

})

//getallexams

Router.get('/getallexams', (req, res) => {

    Exam.find().then(
        (data) => {
            res.send(data);
        },
        (error) => {
            console.log(error);
            res.send(error);
        }
    );

})

//getbyid

Router.get('/getexambyid/:id', (req, res) => {

    let id = req.params.id;
    Exam.findOne({ _id: id }).then(

        (data) => {
            res.send(data);
        },
        (error) => {
            console.log(error);
            res.send(error);
        }

    )

});

//update

Router.put('/updateexam', (req, res) => {

    let id = req.params.body;
    let e = req.body;

    Exam.findByIdAndUpdate({ _id: id }, e, { new: true }).then(

        (data) => {
            res.send(data);
        },
        (error) => {
            console.log(error);
            res.send(error);
        }

    )

})

//delete

Router.delete('/deleteexam', (req, res) => {

    let id = req.params.body;

    Exam.findByIdAndDelete({ _id: id }).then(

        (data) => {
            res.send(data);
        },
        (error) => {
            console.log(error);
            res.send(error);
        }

    )
})

module.exports = Router;