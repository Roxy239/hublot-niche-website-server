const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
require('dotenv').config();
const { MongoClient } = require('mongodb');

const port = process.env.PORT || 5000;
//MIDDLEWARE

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mnttd.mongodb.net/hublot?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// console.log(uri);

const data = { watches: null };

async function run() {
    try {
        await client.connect();
        // await client.watchs.insertMany(data);
        // const database = client.db('sample_mflix');
        // const movies = database.collection('movies');
        // // Query for a movie that has the title 'Back to the Future'
        // const query = { title: 'Back to the Future' };
        // const movie = await movies.findOne(query);
        const database = client.db("hublot");
        const watches = database.collection("watches");

        // const options = { ordered: true };
        // const result = await watches.insertMany(data, options);

        // console.log(`${result.insertedCount} documents were inserted`);


        const result = await watches.find();

        data.watches = result;

        result.forEach(watch => {
            console.log(watch);
        });







        console.log(result);


        console.log('DB CONNECTED');
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/watches', (req, res) => {
    res.status(200).json(data.watches);
});

app.get('/', (req, res) => {
    res.send('Hello HUBLOT!')
})

app.listen(port, () => {
    console.log(` listening at ${port}`)
})