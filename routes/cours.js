const express = require('express');
const Cours = require('../models/cours');
const Router = express.Router();
const multer = require('multer');

Router.post('/ajoutcours', (req, res) => {

    console.log(req.body)
    let CoursFromPostman = req.body;
    let cours = new Cours(CoursFromPostman);

    cours.save().then(
        (datacours) => {
            res.send(datacours);
        },
        (error) => {
            res.send(error);
        }
    );

})

//getall

Router.get('/getallcours', (req, res) => {

    Cours.find().then(
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

Router.get('/getcoursbyid/:id', (req, res) => {

    let id = req.params.body;
    Document.findOne({ _id: id }).then(

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

Router.put('/updatecours/:id', (req, res) => {

    let id = req.params.body;
    let c = req.body;

    Cours.findByIdAndUpdate({ _id: id }, c, { new: true }).then(

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

Router.delete('/deletecours/:id', (req, res) => {

    let id = req.params.id;
    Cours.findByIdAndDelete({ _id: id }).then(

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