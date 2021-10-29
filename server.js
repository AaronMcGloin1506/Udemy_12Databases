const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');


const mongoUri = 'mongodb+srv://AdminMcGloin:MongoAaron123@cluster0.omxue.mongodb.net?retryWrites=true&w=majority';

app.get('/api/users',(req,res)=>{
    res.json([
        {
            id:1,
            username:'Francis'
        },
        {
            id:1,
            username:'Steve'
        }
    ])
})


MongoClient.connect(mongoUri,{ useUnifiedTopology: true },(err, client)=>{
    if(err){
        throw err;
    }
    console.log('connected to the db')
})


const port = process.env.PORT || 3001;
app.listen(port)