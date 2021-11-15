const express = require('express');
const mongoose = require('mongoose');

const orderSchema = require('../Schemas/orderSchema');

const Order = new mongoose.model("Order", orderSchema);

const router = express.Router();

router.get('/', (req, res) => {
    let condition = {}
    if (req.query.email) {
        condition = { email: req.query.email }
    }
    Order.find(condition, (err, data) => {
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


router.get('/adminall', (req, res) => {

    Order.find({}, (err, data) => {
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
    Order.find({ _id: req.params.id }, (err, data) => {
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
//order
router.post('/', (req, res) => {
    const newWatch = new Order({ ...req.body, status: "pending" });
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

//cancel order
router.get('/cancel/:id', (req, res) => {

    Order.updateOne({ _id: req.params.id }, {
        $set: {
            status: "cancelled"
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
                message: "Order was updated successfully!"
            });
        }
    });
});

router.post('/all', (req, res) => {
    Order.insertMany(req.body, (err) => {
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

// router.put('/:id', (req, res) => {
//     Order.updateOne({ _id: req.params.id }, {
//         $set: {
//             status: "active"
//         }
//     }, (err) => {
//         if (err) {
//             res.status(500).json({
//                 error: "There was a server side error."
//             });
//             console.log(err);
//         }
//         else {
//             res.status(200).json({
//                 message: "Watch was updated successfully!"
//             });
//         }
//     });
// });


router.delete('/:id', (req, res) => {
    Order.deleteOne({ _id: req.params.id }, (err) => {
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