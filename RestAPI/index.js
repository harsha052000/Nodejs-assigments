const express = require('express');
const routes = require('./routes/api')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//setup express app
const app = express();


//connect to mongodb
mongoose.connect('mongodb+srv://node:node@cluster0.ap9dw.mongodb.net/restapiInventory');
mongoose.Promise=global.Promise;


app.use(bodyParser.json());

//initialize routes
app.use('/api',routes);

//listen for requests
app.listen(process.env.port || 7000 ,function(){
console.log('listening for the request');}
);
