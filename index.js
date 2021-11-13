const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require('cors');
const watchHandler = require('./watchHandler/watchHandler');
const orderHandler = require('./orderHandler/orderHandler');
const reviewHandler = require('./reviewHandler/reviewHandler');

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mnttd.mongodb.net/hublot?retryWrites=true&w=majority`;






mongoose.connect(uri)
    .then(() => {
        console.log("connection successful...")
    })
    .catch(err => {
        console.log(err);
    });


app.use('/watches', watchHandler);
app.use('/orders', orderHandler);
app.use('/reviews', reviewHandler);

app.listen(port, () => {
    console.log(`Application is runnig at port ${port}\nhttp://localhost:${port}`)
})