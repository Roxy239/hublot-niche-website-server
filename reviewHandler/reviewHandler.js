const express = require('express');
const mongoose = require('mongoose');

const reviewSchema = require('../Schemas/reviewSchema');

const Review = new mongoose.model("Review", reviewSchema);

const router = express.Router();

router.get('/', (req, res)=>{
Review.find({/* status: 'active' */}, (err, data)=>{
        if(err){
            res.status(500).json({
                error: "There was a server side error."
            });
            console.log(err);
        }
        else{
            res.status(200).json(data);
        }
    });
});

router.get('/:id', (req, res)=>{
    Review.find({ _id: req.params.id }, (err, data)=>{
        if(err){
            res.status(500).json({
                error: "There was a server side error."
            });
            console.log(err);
        }
        else{
            res.status(200).json(data);
        }
    });
});

router.post('/', (req, res)=>{
    const newReview = new Review(req.body);
    newReview.save((err)=>{
        if(err){
            res.status(500).json({
                error: "There was a server side error."
            });
            console.log(err);
        }
        else{
            res.status(200).json({
                message: "Review was inserted successfully!"
            });
        }
    });
});

router.post('/all', (req, res)=>{
    Review.insertMany(req.body, (err)=>{
        if(err){
            res.status(500).json({
                error: "There was a server side error."
            });
            console.log(err);
        }
        else{
            res.status(200).json({
                message: "Review were inserted successfully!"
            });
        }
    });

});

router.put('/:id', (req, res)=>{
    Review.updateOne({ _id: req.params.id },{
        $set: {
            status: "active"
        }
    }, (err)=>{
        if(err){
            res.status(500).json({
                error: "There was a server side error."
            });
            console.log(err);
        }
        else{
            res.status(200).json({
                message: "Review was updated successfully!"
            });
        }
    });
});

router.delete('/:id', (req, res)=>{
    Review.deleteOne({ _id: req.params.id }, (err)=>{
        if(err){
            res.status(500).json({
                error: "There was a server side error."
            });
            console.log(err);
        }
        else{
            res.status(200).json({
                message: "Review was deleted successfully!"
            });
        }
    });
});




module.exports = router;