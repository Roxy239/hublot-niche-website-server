const express = require('express');
const mongoose = require('mongoose');

const watchSchema = require('../Schemas/watchSchema');

const Watch = new mongoose.model("Watch", watchSchema);

const router = express.Router();

router.get('/', (req, res) => {
    Watch.find({/* status: 'active' */ }, (err, data) => {
        if (err) {
            res.status(500).json({
                error: "There was a server side error."
            });
            console.log(err);
        }
        else {
            res.status(200).json(data);
        }
    });
});

router.get('/:id', (req, res) => {
    Watch.find({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(500).json({
                error: "There was a server side error."
            });
            console.log(err);
        }
        else {
            res.status(200).json(data);
        }
    });
});

router.post('/', (req, res) => {
    const newWatch = new Watch(req.body);
    newWatch.save((err) => {
        if (err) {
            res.status(500).json({
                error: "There was a server side error."
            });
            console.log(err);
        }
        else {
            res.status(200).json({
                message: "Watch was inserted successfully!"
            });
        }
    });
});

router.post('/all', (req, res) => {
    Watch.insertMany(req.body, (err) => {
        if (err) {
            res.status(500).json({
                error: "There was a server side error."
            });
            console.log(err);
        }
        else {
            res.status(200).json({
                message: "Watch were inserted successfully!"
            });
        }
    });

});

router.put('/:id', (req, res) => {
    Watch.updateOne({ _id: req.params.id }, {
        $set: {
            status: "active"
        }
    }, (err) => {
        if (err) {
            res.status(500).json({
                error: "There was a server side error."
            });
            console.log(err);
        }
        else {
            res.status(200).json({
                message: "Watch was updated successfully!"
            });
        }
    });
});


router.delete('/:id', (req, res) => {
    Watch.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).json({
                error: "There was a server side error."
            });
            console.log(err);
        }
        else {
            res.status(200).json({
                message: "Watch was deleted successfully!"
            });
        }
    });
});


module.exports = router;