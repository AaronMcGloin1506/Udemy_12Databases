const express = require('express');
const app = express();
const mongoose = require('mongoose');


const mongoUri = 'mongodb+srv://USERNAME:PASSWORD@cluster0.omxue.mongodb.net?retryWrites=true&w=majority';
mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

///////////////////////////////////////////////////////

const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean
});

const Car = mongoose.Model('Car', carSchema);




///////////////////////////////////////////////////////

const port = process.env.PORT || 3001;
app.listen(port)