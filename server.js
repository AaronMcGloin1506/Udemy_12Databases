const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());


const mongoUri = 'mongodb+srv://x:X@cluster0.omxue.mongodb.net/awesomeapp?retryWrites=true&w=majority';
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

const Car = mongoose.model('Car', carSchema);

///////////////////////////////////////////////////////

app.post('/api/addcar', (req,res)=>{

    const addCar = new Car({
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
        avail: req.body.avail
    })

     addCar.save((err,doc)=>{
        if(err){
            return console.log(err)
        }
        res.status(200).json(doc)
    })
})

app.get('/api/getcars',(req,res)=>{
    Car.find({brand:'Citroen'},(err, docs)=>{
        if(err){
            return console.log(err)
        }
        res.json(docs)
    })
})

const port = process.env.PORT || 3001;
app.listen(port)