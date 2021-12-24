const express = require('express');
const Document = require('../models/document');
const Router = express.Router();
const multer = require('multer');

//ajout

Router.post('ajoutdocument', (req, res) => {

    console.log(req.body);
    DocumentFromPostman = req.body;
    let document = new Document(DocumentFromPostman);

    document.save().then(
        (datadocument) => {
            res.send(datadocument);
        },
        (error) => {
            res.send(error);
        }
    );

})

//getall

Router.get('/getalldocuments', (req, res) => {

    Document.find().then(
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

Router.get('/getdocumentbyid/:id', (req, res) => {

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

Router.put('/updatedocument/:id', (req, res) => {

    let id = req.params.body;
    let d = req.body;

    Document.findByIdAndUpdate({ _id: id }, d, { new: true }).then(

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

Router.delete('/deletedocument/:id', (req, res) => {

    let id = req.params.id;
    Document.findByIdAndDelete({ _id: id }).then(

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