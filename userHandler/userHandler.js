const express = require('express');
const mongoose = require('mongoose');

const userSchema = require('../Schemas/userSchema');

const User = new mongoose.model("User", userSchema);

const router = express.Router();

router.get('/', (req, res)=>{
User.find({/* status: 'active' */}, (err, data)=>{
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
    User.find({ _id: req.params.id }, (err, data)=>{
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
    const newUser = new User(req.body);
    newUser.save((err)=>{
        if(err){
            res.status(500).json({
                error: "There was a server side error."
            });
            console.log(err);
        }
        else{
            res.status(200).json({
                message: "User was inserted successfully!"
            });
        }
    });
});

router.post('/all', (req, res)=>{
    User.insertMany(req.body, (err)=>{
        if(err){
            res.status(500).json({
                error: "There was a server side error."
            });
            console.log(err);
        }
        else{
            res.status(200).json({
                message: "User were inserted successfully!"
            });
        }
    });

});

router.put('/:id', (req, res)=>{
    User.updateOne({ _id: req.params.id },{
        $set: {
            role: "admin"
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
                message: "User was updated successfully!"
            });
        }
    });
});

router.delete('/:id', (req, res)=>{
    User.deleteOne({ _id: req.params.id }, (err)=>{
        if(err){
            res.status(500).json({
                error: "There was a server side error."
            });
            console.log(err);
        }
        else{
            res.status(200).json({
                message: "User was deleted successfully!"
            });
        }
    });
});


module.exports = router;